const listbgimg = document.querySelectorAll('.bg');
const welcomemsg = document.querySelector('.scrollment h1');
const downarr = document.getElementById('downarr');
const loginbox = document.getElementById('loginbox');
const loginbtn = document.getElementById('loginbtn');
const loginexitbtn = document.querySelector('.bx-exit');
const maincontainer = document.getElementById('main-section');
const gosignup = document.getElementById('gosignup');
const signupbox = document.getElementById('signupcontainer');
const signupexitbtn = document.querySelector('.signupexit');
/* const ------------------------------- */



window.addEventListener("scroll", (event) => {
    const scrollamount = window.scrollY;

    listbgimg.forEach((bg, index) => {
        if (index == 0 ){
            bg.style.transform = `translateY(${(scrollamount)*0.9}px)`;
        }
        else if (index == 1){
            bg.style.transform = `translateY(${(scrollamount)/2}px)`;
        }
        else if (index == 2){
            bg.style.transform = `translateY(${(scrollamount)/3}px)`;
        }
        else if (index == 3){
            bg.style.transform = `translateY(${(scrollamount)/3}px)`;
        }
        else if (index == 4){
            bg.style.transform = `translateY(${(scrollamount)/75}px)`;
        }
        else if (index == 6){
            bg.style.transform = `translateY(${(scrollamount)/50}px)`;
        }
        else{
            welcomemsg.style.transform = `translateY(${(scrollamount)*1.2}px)`;
            downarr.style.transform = `translateY(${(scrollamount)*1.3}px)`;
        }
    })
})




loginbtn.addEventListener("click", function(){
    loginbox.classList.add("show");
    loginbox.classList.remove("hide");
    maincontainer.classList.add("bluron");
    maincontainer.classList.remove("bluroff");
});

loginexitbtn.addEventListener("click", function(){
    loginbox.classList.add("hide");
    loginbox.classList.remove("show");
    maincontainer.classList.add("bluroff");
    maincontainer.classList.remove("bluron");
})


gosignup.addEventListener("click", function(){
    loginbox.classList.add("hide");
    loginbox.classList.remove("show");
    signupbox.classList.add("signupshow");
    signupbox.classList.remove("signuphide");
})

signupexitbtn.addEventListener("click", function(){
    loginbox.classList.add("show");
    loginbox.classList.remove("hide");
    signupbox.classList.add("signuphide");
    signupbox.classList.remove("signupshow");
})