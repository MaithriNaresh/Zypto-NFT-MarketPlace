import React, { useEffect, useState } from "react";

const CountDownTimer = ({ startDate, endDate, onEnd }) => {
  const [state, setState] = useState(null); // initially null

  const calculateTimeLeft = () => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return null; // invalid dates
    }

    if (now < start) {
      return { phase: "not_started", timeLeft: start - now };
    } else if (now >= start && now < end) {
      return { phase: "running", timeLeft: end - now };
    } else {
      return { phase: "expired", timeLeft: 0 };
    }
  };

  useEffect(() => {
    const initial = calculateTimeLeft();
    if (!initial) return;
    setState(initial);

    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      if (!updated) return;

      setState(updated);

      if (updated.phase === "expired") {
        clearInterval(timer);
        if (typeof onEnd === "function") {
          onEnd();
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate, endDate]);

  if (!state) return null; // Or a loading spinner

  if (state.phase === "expired") {
    return <span className="text-danger">Expired</span>;
  }

  const t = state.timeLeft;
  const d = Math.floor(t / (1000 * 60 * 60 * 24));
  const h = Math.floor((t / (1000 * 60 * 60)) % 24);
  const m = Math.floor((t / (1000 * 60)) % 60);
  const s = Math.floor((t / 1000) % 60);

  return (
    <span className="countdown meta text-xs fw-light grayscale-200">
      {state.phase === "not_started" ? "Starts in " : "Ends in "}
      {d}d {h}h {m}m {s}s
    </span>
  );
};


export default CountDownTimer;
