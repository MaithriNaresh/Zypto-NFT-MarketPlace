import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      alert("Google login successful!");
      navigate("/",{replace: true}); // or navigate to dashboard
    } else {
      alert("No token found");
      navigate("/login");
    }
  }, []);

  return <p  style={{ textAlign: "center", marginTop: "50px" , color:"white"}}>Logging in with Google...</p>;
};

export default GoogleSuccess;
