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
//Testimonials
let testimonials=["'Gurucharan University has transformed my career'",
    "'Excellent faculty and modern infrastructure'",
    "'Best place for quality education'"
];
let t=0;
setInterval(function(){document.getElementById("testimonialText").innerHTML=testimonials[t];
    t++;
    if(t>=testimonials.length){t=0;}
},3000);
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