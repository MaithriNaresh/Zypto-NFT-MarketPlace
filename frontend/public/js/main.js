
// accordion
document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const collapseElement = this.parentElement.nextElementSibling;

            if (collapseElement.classList.contains("show")) {
                collapseElement.classList.remove("show");
                this.classList.add("collapsed");
                this.setAttribute("aria-expanded", "false");
            } else {
                collapseElement.classList.add("show");
                this.classList.remove("collapsed");
                this.setAttribute("aria-expanded", "true");
            }
        });
    });
});

// page loading
document.addEventListener("DOMContentLoaded", (event) => {
    imagesLoaded(document.querySelectorAll("img"), () => {
        document.body.classList.remove("loading");

        new displacementSlider({
            parent: el,
            images: imgs,
        });
    });
});

// gsap image moving
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.to(".move", {
        duration: 5,
        ease: "power2.inOut",
        x: 100
    });
    
    gsap.to(".moving", {
        duration: 5,
        ease: "power2.inOut",
        x: "+=200"
    });

    let tween = gsap.to(".moveOn", {
        rotation: 360,
        duration: 8,
        scrollTrigger: {
          markers: false,
          toggleActions: "play reverse restart reverse",
          onEnter: (self) => console.log("onenter"),
          onLeave: (self) => console.log("onleave"),
          onEnterBack: (self) => console.log("onenterBack"),
          onLeaveBack: (self) => console.log("onleaveBack")
        }
      });
      
      console.log(tween);
});

// gsap text hover image
document.addEventListener("DOMContentLoaded", (event) => {
    const textMedia = document.getElementById("textMedia");

    for (const link of textMedia.getElementsByTagName("a")) {
        link.onmousemove = (e) => {
            const rect = link.getBoundingClientRect();

            const img = link.querySelector("img");
            if (!img) return;

            img.style.top = `${e.clientY - rect.top}px`;
            img.style.left = `${e.clientX - rect.left}px`;
        };
    }
});

// gravity pills (GSAP elements)
document.addEventListener("DOMContentLoaded", (event) => {
    function initSimulation() {
        const Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse,
            Events = Matter.Events;
    
        const engine = Engine.create(),
            world = engine.world;
    
        const containerElement = document.querySelector(".tag-canvas"); // use class name= "tag-canvas" from html wrapper
        const containerWidth = containerElement.clientWidth;
        const containerHeight = containerElement.clientHeight;
    
        Engine.run(engine);
    
        // Create boundaries
        const ground = Bodies.rectangle(containerWidth / 2, containerHeight + 50, containerWidth, 100, { isStatic: true });
        const wallLeft = Bodies.rectangle(-50, containerHeight / 2, 100, containerHeight, {
            isStatic: true,
        });
        const wallRight = Bodies.rectangle(containerWidth + 50, containerHeight / 2, 100, containerHeight, { isStatic: true });
        const roof = Bodies.rectangle(containerWidth / 2, -50, containerWidth, 100, {
            isStatic: true,
        });
    
        World.add(world, [ground, wallLeft, wallRight, roof]);
    
        // Sync Matter.js bodies with HTML elements
        const tags = document.querySelectorAll(".gravity-pills"); // use class name= "tag-canvas" for elements
        const tagBodies = Array.from(tags).map((tag) => {
            const width = tag.offsetWidth;
            const height = tag.offsetHeight;
    
            const x = Math.random() * (containerWidth - width) + width / 2;
            const y = Math.random() * containerHeight;
    
            const body = Bodies.rectangle(x, y, width, height, {
                chamfer: { radius: height / 2 }, // Rounded corners
                density: 0.01,
                friction: 0.1,
                restitution: 0.8, // Bouncy effect
                render: {
                    fillStyle: "transparent", // Disable Matter.js background rendering
                },
            });
    
            World.add(world, body);
            return { body, element: tag };
        });
    
        // Sync positions and rotation with Matter.js
        Events.on(engine, "afterUpdate", () => {
            tagBodies.forEach(({ body, element }) => {
                const { x, y } = body.position;
    
                element.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${body.angle}rad)`;
            });
        });
    
        // Add mouse interactivity
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
            },
        });
    
        World.add(world, mouseConstraint);
    
        // Adjust rendering and bounds on resize
        window.addEventListener("resize", () => {
            render.canvas.width = containerElement.clientWidth;
            render.canvas.height = containerElement.clientHeight;
            render.options.width = containerElement.clientWidth;
            render.options.height = containerElement.clientHeight;
        });
    }
    
    const containerElement = document.querySelector(".tag-canvas");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                initSimulation();
            }
        });
    });
    
    observer.observe(containerElement);
});

// sales charts
document.addEventListener("DOMContentLoaded", (event) => {
    var options = {
        series: [
            {
                name: "Price",
                data: [
                    [16.4, 1.4],
                    [21.7, 2],
                    [25.4, 2.5],
                    [19, 2],
                    [10.9, 1],
                    [13.6, 1.2],
                    [10.9, 2.4],
                    [10.9, 1],
                    [10.9, 2.2],
                    [16.4, 0.2],
                    [16.4, 1.8],
                    [13.6, 0.3],
                    [13.6, 0.5],
                    [29.9, 0.8],
                    [27.1, 2.3],
                    [16.4, 0.7],
                    [13.6, 2.7],
                    [10.9, 2.8],
                ],
            },
        ],
        chart: {
            height: 320,
            type: "scatter",
            animations: {
                enabled: false,
            },
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ["#056BF6", "#D2376A"],
        xaxis: {
            tickAmount: 10,
            min: 0,
            max: 40,
        },
        yaxis: {
            title: {
                enabled: true,
                text: 'Price (ETH)'
            },
            tickAmount: 7,
        },
        markers: {
            size: 10,
        },
    };

    var chart = new ApexCharts(document.querySelector("#chart-div"), options);
    chart.render();
});

// price distribution charts
document.addEventListener("DOMContentLoaded", (event) => {
    var data = {
        labels: ["0.001", "0.002", "0.003", "0.004", "0.005", "0.006", "0.007", "0.008", "0.009", "0.01"],
        datasets: [
            {
                label: "Offers",
                backgroundColor: "rgba(91,37,245, 0.2)",
                data: [500, 300, 800, 150, 200, 150, 800, 200, 800, 100],
            },
            {
                label: "Listings",
                backgroundColor: "rgba(91,37,245, 1)",
                data: [1000, 800, 1800, 1100, 1000, 800, 1800, 1600, 1800, 1200],
            },
        ],
    };
    let colorCode = window.getComputedStyle(document.documentElement).getPropertyValue('--color-primary-400');
    var options = {
        cornerRadius: 0,
        maintainAspectRatio: false,
        legend: {
            position: "bottom",
            labels: {
                fontColor: colorCode,
                boxWidth: 20,
                padding: 10,
            },
        },
        scales: {
            yAxes: [
                {
                    gridLines: {
                        display: true,
                        color: colorCode,
                    },
                    ticks: {
                        maxTicksLimit: 5,
                    },
                },
            ],
            xAxes: [{}],
        },
    };

    var ctx = document.getElementById("last_costs").getContext("2d");
    var myLineChart = new Chart(ctx, {
        type: "bar",
        data: data,
        options: options,
    });
});

// nft sales charts
document.addEventListener("DOMContentLoaded", (event) => {
    var options = {
        series: [
            {
                name: "Avg. price",
                data: [
                    {
                        x: "Feb 10",
                        y: 2,
                        goals: [
                            {
                                name: "Number of sale",
                                value: 4,
                                strokeHeight: 5,
                                strokeColor: "#008FFB",
                            },
                        ],
                    },
                    {
                        x: "Feb 12",
                        y: 4,
                        goals: [
                            {
                                name: "Number of sale",
                                value: 2,
                                strokeHeight: 5,
                                strokeColor: "#008FFB",
                            },
                        ],
                    },
                    {
                        x: "Feb 14",
                        y: 7,
                        goals: [
                            {
                                name: "Number of sale",
                                value: 5,
                                strokeHeight: 50,
                                strokeColor: "#008FFB",
                            },
                        ],
                    },
                    {
                        x: "Feb 16",
                        y: 3,
                        goals: [
                            {
                                name: "Number of sale",
                                value: 3,
                                strokeHeight: 15,
                                strokeColor: "#008FFB",
                            },
                        ],
                    },
                    {
                        x: "Feb 18",
                        y: 1,
                        goals: [
                            {
                                name: "Number of sale",
                                value: 1,
                                strokeHeight: 13,
                                strokeWidth: 0,
                                strokeLineCap: "round",
                                strokeColor: "#008FFB",
                            },
                        ],
                    },
                    {
                        x: "Feb 20",
                        y: 3,
                        goals: [
                            {
                                name: "Number of sale",
                                value: 2,
                                strokeHeight: 5,
                                strokeColor: "#008FFB",
                            },
                        ],
                    },
                    {
                        x: "Feb 22",
                        y: 5,
                        goals: [
                            {
                                name: "Number of sale",
                                value: 4,
                                strokeHeight: 40,
                                strokeDashArray: 2,
                                strokeColor: "#008FFB",
                            },
                        ],
                    },
                ],
            },
        ],
        chart: {
            height: 350,
            type: "bar",
        },
        plotOptions: {
            bar: {
                columnWidth: "60%",
            },
        },
        colors: ["#00E396"],
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            customLegendItems: ["Avg. price", "Number of sale"],
            markers: {
                fillColors: ["#00E396", "#008FFB"],
            },
        },
    };
    
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
});

// Upload NFTs
document.addEventListener("DOMContentLoaded", (event) => {
    // Select Upload-Area
    const uploadArea = document.querySelector("#uploadArea");

    // Select Drop-Zoon Area
    const dropZoon = document.querySelector("#dropZoon");

    // Loading Text
    const loadingText = document.querySelector("#loadingText");

    // Slect File Input
    const fileInput = document.querySelector("#fileInput");

    // Select Preview Image
    const previewImage = document.querySelector("#previewImage");

    // File-Details Area
    const fileDetails = document.querySelector("#fileDetails");

    // Uploaded File
    const uploadedFile = document.querySelector("#uploadedFile");

    // Uploaded File Info
    const uploadedFileInfo = document.querySelector("#uploadedFileInfo");

    // Uploaded File  Name
    const uploadedFileName = document.querySelector(".uploaded-file__name");

    // Uploaded File Icon
    const uploadedFileIconText = document.querySelector(".uploaded-file__icon-text");

    // Uploaded File Counter
    const uploadedFileCounter = document.querySelector(".uploaded-file__counter");

    // ToolTip Data
    const toolTipData = document.querySelector(".upload-area__tooltip-data");

    // Images Types
    const imagesTypes = ["jpeg", "png", "svg", "gif"];

    // Append Images Types Array Inisde Tooltip Data
    toolTipData.innerHTML = [...imagesTypes].join(", .");

    // When (drop-zoon) has (dragover) Event
    dropZoon.addEventListener("dragover", function (event) {
        // Prevent Default Behavior
        event.preventDefault();

        // Add Class (drop-zoon--over) On (drop-zoon)
        dropZoon.classList.add("drop-zoon--over");
    });

    // When (drop-zoon) has (dragleave) Event
    dropZoon.addEventListener("dragleave", function (event) {
        // Remove Class (drop-zoon--over) from (drop-zoon)
        dropZoon.classList.remove("drop-zoon--over");
    });

    // When (drop-zoon) has (drop) Event
    dropZoon.addEventListener("drop", function (event) {
        // Prevent Default Behavior
        event.preventDefault();

        // Remove Class (drop-zoon--over) from (drop-zoon)
        dropZoon.classList.remove("drop-zoon--over");

        // Select The Dropped File
        const file = event.dataTransfer.files[0];

        // Call Function uploadFile(), And Send To Her The Dropped File :)
        uploadFile(file);
    });

    // When (drop-zoon) has (click) Event
    dropZoon.addEventListener("click", function (event) {
        // Click The (fileInput)
        fileInput.click();
    });

    // When (fileInput) has (change) Event
    fileInput.addEventListener("change", function (event) {
        // Select The Chosen File
        const file = event.target.files[0];

        // Call Function uploadFile(), And Send To Her The Chosen File :)
        uploadFile(file);
    });

    // Upload File Function
    function uploadFile(file) {
        // FileReader()
        const fileReader = new FileReader();
        // File Type
        const fileType = file.type;
        // File Size
        const fileSize = file.size;

        // If File Is Passed from the (File Validation) Function
        if (fileValidate(fileType, fileSize)) {
            // Add Class (drop-zoon--Uploaded) on (drop-zoon)
            dropZoon.classList.add("drop-zoon--Uploaded");

            // Show Loading-text
            loadingText.style.display = "block";
            // Hide Preview Image
            previewImage.style.display = "none";

            // Remove Class (uploaded-file--open) From (uploadedFile)
            uploadedFile.classList.remove("uploaded-file--open");
            // Remove Class (uploaded-file__info--active) from (uploadedFileInfo)
            uploadedFileInfo.classList.remove("uploaded-file__info--active");

            // After File Reader Loaded
            fileReader.addEventListener("load", function () {
                // After Half Second
                setTimeout(function () {
                    // Add Class (upload-area--open) On (uploadArea)
                    uploadArea.classList.add("upload-area--open");

                    // Hide Loading-text (please-wait) Element
                    loadingText.style.display = "none";
                    // Show Preview Image
                    previewImage.style.display = "block";

                    // Add Class (file-details--open) On (fileDetails)
                    fileDetails.classList.add("file-details--open");
                    // Add Class (uploaded-file--open) On (uploadedFile)
                    uploadedFile.classList.add("uploaded-file--open");
                    // Add Class (uploaded-file__info--active) On (uploadedFileInfo)
                    uploadedFileInfo.classList.add("uploaded-file__info--active");
                }, 500); // 0.5s

                // Add The (fileReader) Result Inside (previewImage) Source
                previewImage.setAttribute("src", fileReader.result);

                // Add File Name Inside Uploaded File Name
                uploadedFileName.innerHTML = file.name;

                // Call Function progressMove();
                progressMove();
            });

            // Read (file) As Data Url
            fileReader.readAsDataURL(file);
        } else {
            // Else

            this; // (this) Represent The fileValidate(fileType, fileSize) Function
        }
    }

    // Progress Counter Increase Function
    function progressMove() {
        // Counter Start
        let counter = 0;

        // After 600ms
        setTimeout(() => {
            // Every 100ms
            let counterIncrease = setInterval(() => {
                // If (counter) is equle 100
                if (counter === 100) {
                    // Stop (Counter Increase)
                    clearInterval(counterIncrease);
                } else {
                    // Else
                    // plus 10 on counter
                    counter = counter + 10;
                    // add (counter) vlaue inisde (uploadedFileCounter)
                    uploadedFileCounter.innerHTML = `${counter}%`;
                }
            }, 100);
        }, 600);
    }

    // Simple File Validate Function
    function fileValidate(fileType, fileSize) {
        // File Type Validation
        let isImage = imagesTypes.filter((type) => fileType.indexOf(`image/${type}`) !== -1);

        // If The Uploaded File Is An Image
        if (isImage.length !== 0) {
            // Check, If File Size Is 2MB or Less
            if (fileSize <= 2000000) {
                // 2MB :)
                return true;
            } else {
                // Else File Size
                return alert("Please Your File Should be 2 Megabytes or Less");
            }
        } else {
            // Else File Type
            return alert("Please make sure to upload An Image File Type");
        }
    }
});

// Refresh
document.addEventListener("DOMContentLoaded", (event) => {
    window.onload = function(){
        var btn = document.getElementById('refresh');
        if (!btn) return;
        btn.onclick = function(event){
            btn.children[0].classList.add('spin-animation');
            setTimeout(function(){
                btn.children[0].classList.remove('spin-animation');
            }, 500);
        }
    }
});

// number count animations
document.addEventListener("DOMContentLoaded", (event) => {
    function Counter(obj) {
        // get the number
        var number = obj.text();
        obj.attr("data-number", number);

        // clear the HTML element
        obj.empty();

        // create an array from the text, prepare to identify which characters in the string are numbers
        var numChars = number.split("");
        var numArray = [];
        var setOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        // for each number, create the animation elements
        for (var i = 0; i < numChars.length; i++) {
            if ($.inArray(parseInt(numChars[i], 10), setOfNumbers) != -1) {
                obj.append('<span class="digit-con"><span class="digit' + numArray.length + '">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br></span></span>');
                numArray[numArray.length] = parseInt(numChars[i], 10);
            } else {
                obj.append("<span>" + numChars[i] + "</span>");
            }
        }

        // determine the height of each number for the animation
        var increment = obj.find(".digit-con").outerHeight();
        var speed = 2000;

        // animate each number
        for (var i = 0; i < numArray.length; i++) {
            obj.find(".digit" + i).animate({ top: -(increment * numArray[i]) }, Math.round(speed / (1 + i * 0.333)));
        }
    }

    $(document).ready(function () {
        $(".number").each(function () {
            Counter($(this));
        });
    });

    $("#animate").click(function () {
        $(".number").eq(0).text($(".number").attr("data-number"));
        Counter($(".number").eq(0));
    });
});

// number of copy
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".numberOfCopy").forEach(container => {
        const decrementBtn = container.querySelector(".input-number-decrement");
        const incrementBtn = container.querySelector(".input-number-increment");
        const inputField = container.querySelector(".nft-input-number");
        
        decrementBtn.addEventListener("click", function () {
            let value = parseInt(inputField.value, 10);
            if (!isNaN(value) && value > parseInt(inputField.min, 10)) {
                inputField.value = value - 1;
            }
        });
        
        incrementBtn.addEventListener("click", function () {
            let value = parseInt(inputField.value, 10);
            if (!isNaN(value) && value < parseInt(inputField.max, 10)) {
                inputField.value = value + 1;
            }
        });
    });
});

// Toasts
document.addEventListener("DOMContentLoaded", () => {
    const toastTriggers = document.querySelectorAll(".toast-btn"); // get the associated toast button > class="toast-btn"

    toastTriggers.forEach((button) => {
        button.addEventListener("click", () => {
            const toastSelector = button.getAttribute("data-toast"); // use attribute for button > data-toast="refresh-toast"
            const toastElement = document.querySelector(`.${toastSelector}`);

            if (toastElement) {
                const toastInstance = bootstrap.Toast.getOrCreateInstance(toastElement);
                toastInstance.show();
            }
        });
    });
});

// Timer
document.addEventListener("DOMContentLoaded", (event) => {
    // Set the date we're counting down to
    let elements = document.querySelectorAll(".countdown");
    // Update the count down every 1 second

    // Output the result in an element with class="countdown"
    elements.forEach((element) => {
        let x = setInterval(function () {
            var countDownDate = new Date(element.dataset.count).getTime();
            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            element.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                element.innerHTML = "EXPIRED";
                element.classList.add("disable");
            }
        }, 1000);
    });
});

// Dark Mode
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleBtn = document.getElementById('darkMode');
    const body = document.body;

    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      let otherTheme = savedTheme === "theme-light" ? "theme-dark" : "theme-light";
        body.classList.remove(otherTheme);
        body.classList.add(savedTheme);
    } else {
      // If no theme preference is saved, default to dark mode
      body.classList.add("theme-dark");
    }

    toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('theme-light')) {
        body.classList.replace('theme-light', 'theme-dark');
        localStorage.setItem('theme', 'theme-dark'); // Save the theme to localStorage
    } else {
        body.classList.replace('theme-dark', 'theme-light');
        localStorage.setItem('theme', 'theme-light'); // Save the theme to localStorage
    }
    });
});

// Dark Mode button
document.addEventListener("DOMContentLoaded", (event) => {
    //check to see if this current container is within viewport
    document.querySelector(".mode").addEventListener("click", () => {
        document.querySelector(".sun-logo").classList.toggle("animate-sun");
        document.querySelector(".moon-logo").classList.toggle("animate-moon");
        document.querySelector("body").classList.toggle("theme");
    })
});

// Tooltip Trigger
document.addEventListener('DOMContentLoaded', (event) => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});

/* Encrypt Value */
document.addEventListener('DOMContentLoaded', (event) => {
  let crypt_state = false;
  let _el = document.getElementById('encrypt');
  if (_el) {
      _el.addEventListener('click', function() {
          crypt_state = !crypt_state;
          let elements = document.querySelectorAll(".encrypted");
          elements.forEach((el) => el.innerText = crypt_state ? "***" : el.dataset.content);
      });
  }

  window.addEventListener("DOMContentLoaded", function() {
      let elements = document.querySelectorAll(".encrypted");
      elements.forEach((el) => el.setAttribute("data-content", el.innerText));
  })
});

// Dropdown on Hover
document.addEventListener('DOMContentLoaded', (event) => {
  $(document).ready(function() {
      $('.dropdown').hover(function() {
          $(this).addClass('show');
          $(this).find('.dropdown-menu-shows').addClass('show');
      }, function() {
          $(this).removeClass('show');
          $(this).find('.dropdown-menu-shows').removeClass('show');
      });
  });

  $(document).ready(function() {
      $('.dropdown').hover(function() {
          $(this).find('.dropdown-menu-shows')
              .stop(true, true).delay(50).fadeIn(200);
      }, function() {
          $(this).find('.dropdown-menu-shows')
              .stop(true, true).delay(50).fadeOut(200);
      });
  });
});

// Favorite Button
document.addEventListener('DOMContentLoaded', (event) => {
  $('.favme').click(function() {
      $(this).toggleClass('active');
  });

  /* when a user clicks, toggle the 'is-animating' class */
  $(".favme").on('click touchstart', function() {
      $(this).toggleClass('is_animating');
  });

  /*when the animation is over, remove the class*/
  $(".favme").on('animationend', function() {
      $(this).toggleClass('is_animating');
  });
});

// Price Meter
document.addEventListener('DOMContentLoaded', (event) => {
  (function() {
      var leaseMeter, meterBar, meterBarWidth, meterValue, progressNumber;

      /*Get value of value attribute*/
      var valueGetter = function() {
          leaseMeter = document.getElementsByClassName('leaseMeter');
          for (var i = 0; i < leaseMeter.length; i++) {
              meterValue = leaseMeter[i].getAttribute('value');
              return meterValue;
          }
      }

      /*Convert value of value attribute to percentage*/
      var getPercent = function() {
          meterBarWidth = parseInt(valueGetter()) * 0.10;
          meterBarWidth.toString;
          meterBarWidth = meterBarWidth + "%";
          return meterBarWidth;
      }

      /*Apply percentage to width of .meterBar*/
      var adjustWidth = function() {
          meterBar = document.getElementsByClassName('meterBar');
          for (var i = 0; i < meterBar.length; i++) {
              meterBar[i].style['width'] = getPercent();
          }
      }

      /*Update value indicator*/
      var indicUpdate = function() {
          progressNumber = document.getElementsByClassName('progressNumber');
          for (var i = 0; i < progressNumber.length; i++) {
              progressNumber[i].innerHTML = valueGetter();
          }
      }

      adjustWidth();
      indicUpdate();
  })();
});

// Validation
document.addEventListener('DOMContentLoaded', (event) => {
  (() => {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
              if (!form.checkValidity()) {
                  event.preventDefault()
                  event.stopPropagation()
              }

              form.classList.add('was-validated')
          }, false)
      })
  })();
});

// Password Strength
document.addEventListener('DOMContentLoaded', (event) => {
  $('#password').keyup(function(e) {
      var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
      var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
      var enoughRegex = new RegExp("(?=.{6,}).*", "g");
      if (false == enoughRegex.test($(this).val())) {
          $('#passstrength').html('More characters');
          document.getElementById("passstrength").style.color = "#dc3545";
      } else if (strongRegex.test($(this).val())) {
        document.getElementById("passstrength").style.color = "#0d6efd";
          $('#passstrength').html('Strong!');
      } else if (mediumRegex.test($(this).val())) {
        document.getElementById("passstrength").style.color = "#0dcaf0";
          $('#passstrength').html('Medium!');
      } else {
          document.getElementById("passstrength").style.color = "#ffc107";
          $('#passstrength').html('Weak!');
      }
      return true;
  });
});

// Password Visibility
var state = false;

function toggle() {
  const input = document.getElementById("password");
  if (input) {
    const type = input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);
  } else {
    console.warn("Password input not found.");
  }
}


// Newsletter Signup Button
$(document).mousemove(function (e) {
  var $n = $(".signup-btn");

  // If element doesn't exist, return early
  if ($n.length === 0) return;

  var mX = e.pageX;
  var mY = e.pageY;
  var from = { x: mX, y: mY };

  var off = $n.offset();
  var nx1 = off.left;
  var ny1 = off.top;
  var nx2 = nx1 + $n.outerWidth();
  var ny2 = ny1 + $n.outerHeight();

  var maxX1 = Math.max(mX, nx1);
  var minX2 = Math.min(mX, nx2);
  var maxY1 = Math.max(mY, ny1);
  var minY2 = Math.min(mY, ny2);

  var intersectX = minX2 >= maxX1;
  var intersectY = minY2 >= maxY1;

  var to = {
    x: intersectX ? mX : nx2 < mX ? nx2 : nx1,
    y: intersectY ? mY : ny2 < mY ? ny2 : ny1,
  };

  var distX = to.x - from.x;
  var distY = to.y - from.y;
  var hypot = Math.sqrt(distX * distX + distY * distY);
  var final = Math.round(hypot);

  $("#distance_text").text(final);

  const news = document.getElementById("news");
  if (news) {
    if (final === 0) {
      news.classList.add("active");
    } else {
      news.classList.remove("active");
    }
  }
});


// Popovers
document.addEventListener('DOMContentLoaded', (event) => {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
});

//Sidebar Collapse
document.addEventListener("DOMContentLoaded", function() {
    let arrow_el = document.getElementById("sidebar-collapse");
    let body_el = document.querySelector("body");
    if(!arrow_el || !body_el) return null;
  
    arrow_el.addEventListener("click", function() {
      body_el.classList.toggle("sidebar-close");
    });
});

//mobile sidebar toggle
document.addEventListener("DOMContentLoaded", function() {
    let arrow_el = document.getElementById("sidebar-mobile-toggle");
    let body_el = document.querySelector("body");
    if(!arrow_el || !body_el) return null;
  
    arrow_el.addEventListener("click", function() {
      body_el.classList.toggle("sidebar-mobile-close");
    });
});

// table cell link
jQuery(document).ready(function($) {
    $('*[data-href]').on('click', function() {
        window.location = $(this).data("href");
    });
});

