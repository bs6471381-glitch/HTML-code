//Image Slider
let slides = document.querySelectorAll(".slide");
let index=0;
function changeSlide(){slides[index].classList.remove("active");
    index++;
    if(index>=slides.length){index=0;}
    slides[index].classList.add("active");
}
setInterval(changeSlide,3000);
//Dark Mode
let btn=document.getElementById("themeBtn");
btn.onclick=function(){document.body.classList.toggle("dark")}
//Form Validation
document.getElementById("contactForm")
.addEventListener("submit",function(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let message=document.getElementById("message").value;
    if(name==""||email==""||message==""){alert("Please fill all Fields");}
    else{alert("Form Submitted Successfully");}
});
// Scroll Reveal Animation

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(function(section) {

        let windowHeight = window.innerHeight;
        let revealTop = section.getBoundingClientRect().top;
        let revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();


// Animated Counter

const counters = document.querySelectorAll(".counter");

counters.forEach(function(counter){

    let target = Number(counter.getAttribute("data-target"));

    let count = 0;
    let speed = target / 100;

    function updateCounter(){

        count += speed;

        if(count < target){

            counter.innerText = Math.floor(count);

            requestAnimationFrame(updateCounter);

        }else{

            if(target == 12000){
                counter.innerText = "12K+";
            }
            else if(target == 25){
                counter.innerText = "25+";
            }
            else if(target == 100){
                counter.innerText = "100+";
            }
            else if(target == 95){
                counter.innerText = "95%";
            }

        }

    }

    updateCounter();

});

    