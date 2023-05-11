 const parallax_el = document.querySelectorAll(".parallax");

 let xValue = 0, 
    yValue = 0; 

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerWidth / 2;

    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;

        
        el.style.transform = `translateX(calc(-50% + ${
            -xValue * speedx
        }px)) 
        translateY(calc(-50% + ${
            yValue * speedy}px))`;
    }

    );
});

let timeline = gsap.timeline();

timeline.from(".bg-img", {
    top: `${+document.querySelector(".bg-img").offsetHeight / 2}px`,
    duration: 3.5,
})
timeline.from(
    ".mountain-10",
    {
        y:
            window.innerHeight -
            document.querySelector(".mountain-10").getBoundingClientRect().top + 1000,
        duration: 3,
    },
    "1"
);



timeline.from(".text h1",
    {
        y: 
            window.innerHeight -
            document.querySelector(".text h1").getBoundingClientRect().top + 200,
        duration: 2,
    },
    "2"
)
.from(
    ".text h2",
    {
        y: -150, 
        opacity: 0,
        duration: 1.5,
    },
    "3"
);