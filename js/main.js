let nav = document.querySelector(".navigation-wrap");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
};

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    });
});





document.addEventListener("DOMContentLoaded",() => {
    function counter(id,start,end,duration){
        let obj=document.getElementById(id),
        current=start,
        range=end-start,
        increment=end>start ? 1: -1,
        step=Math.abs(Math.floor(duration / range)),
        timer=setInterval(() => {
            current+=increment;
            obj.textContent=current;
            if(current == end){
                clearInterval(timer);
            }

        },step);
    }

    counter("count1",0,1287,3000);
    counter("count2",100,5786,2500);
    counter("count3",0,1440,3000);
    counter("count4",0,7110,3000);
});


const form = document.getElementById('registerForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    let valid = true;

    // Name check
    if (name.value.trim() === "") {
        name.classList.add("is-invalid");
        valid = false;
    } else {
        name.classList.remove("is-invalid");
    }

    // Email check
    if (!email.value.trim() || !email.value.includes("@")) {
        email.classList.add("is-invalid");
        valid = false;
    } else {
        email.classList.remove("is-invalid");
    }

    // Password check
    if (password.value.trim() === "") {
        password.classList.add("is-invalid");
        valid = false;
    } else {
        password.classList.remove("is-invalid");
    }

    // Confirm password check
    if (confirmPassword.value !== password.value || confirmPassword.value === "") {
        confirmPassword.classList.add("is-invalid");
        valid = false;
    } else {
        confirmPassword.classList.remove("is-invalid");
    }

    // If valid → success message
    if (valid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});
