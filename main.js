/*var typed =new typed("text",{
    strings:["Frontend Developer","Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
})*/

  
/* js for navbar toggle*/
const menubtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');

    document.querySelector('.menu-btn').addEventListener('click', () => {
        document.querySelector('.navbar').classList.toggle('active');
    });
    