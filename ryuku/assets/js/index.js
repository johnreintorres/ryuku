const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const body = document.getElementById("body-area");

menuIcon.addEventListener("click", function () {
    if (slideoutMenu.style.opacity == "1") {
        slideoutMenu.style.opacity = "0";
        slideoutMenu.style.pointerEvents = "none";
        body.style.overflow = "auto";

        $('.hamburger').toggleClass('is-active');
    } else {
        slideoutMenu.style.opacity = "1";
        slideoutMenu.style.pointerEvents = "auto";
        body.style.overflow = "hidden";
        $('.hamburger').toggleClass('is-active');
    }
});

(function () {
    $('.menu-lists').on('click', function () {
        $('.hamburger').toggleClass('is-active');
    })
})();
const menuItem = document.getElementById("menuItem").addEventListener("click", closeNav, true);
const menuItem1 = document.getElementById("menuItem1").addEventListener("click", closeNav, true);
const menuItem2 = document.getElementById("menuItem2").addEventListener("click", closeNav, true);
const menuItem3 = document.getElementById("menuItem3").addEventListener("click", closeNav, true);
const menuItem4 = document.getElementById("menuItem4").addEventListener("click", closeNav, true);
const menuItem5 = document.getElementById("menuItem5").addEventListener("click", closeNav, true);

function closeNav(){
    if (slideoutMenu.style.opacity == "1") {
        slideoutMenu.style.opacity = "0";
        slideoutMenu.style.pointerEvents = "none";
        body.style.overflow = "auto";
        $('.hamburger').toggleClass('is-active');
    } else {
        slideoutMenu.style.opacity = "1";
        slideoutMenu.style.pointerEvents = "auto";
        $('.hamburger').toggleClass('is-active');
        body.style.overflow = "hidden";
    }
}
function closeNavSp() {
    if (slideoutMenu.style.opacity == "1") {
        slideoutMenu.style.opacity = "0";
        slideoutMenu.style.pointerEvents = "none";
        body.style.overflow = "auto";
        $('.hamburger').toggleClass('is-active');
    } else {
        slideoutMenu.style.opacity = "1";
        slideoutMenu.style.pointerEvents = "auto";
        $('.hamburger').toggleClass('is-active');
        body.style.overflow = "hidden";
    }
}
function empty(){
    var name;
    name = document.getElementById("name").value;
    companyName = document.getElementById("companyName").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    remarks = document.getElementById("remarks").value;

    if (name == "") {
        alert("Name is Required");
        return false;
    }else if(email == ""){
        alert("Email is Required");
        return false;
    }else if(phone == ""){
        alert("Phone is Required");
        return false;
    }else if(remarks == ""){
        alert("Remarks is Required");
        return false;
    }
}

    function recaptcha_callback() {
        $('#submit-btn').removeAttr('disabled');
        $('#submit-btn').removeClass('disabled');

         };          
        

         $(document).on('scroll', function(){
            if($(document).scrollTop() > 1500){
              $('.li').addClass('shrink');
            } else {
              $('.li').removeClass('shrink');
            }
          })

 function myFunction(){
     var collapsible = document.getElementById("collapsible");
     var btnText = document.getElementById("myBtn");
     if (collapsible.style.display === "block"){
        collapsible.style.display = "none";
        btnText.innerHTML = "VIEW INFO"; }
else{
        collapsible.style.display = "block";
        btnText.innerHTML = "LESS INFO"; 
     }

 }
 function myFunction2(){
    var collapsible2 = document.getElementById("collapsible2");
    var btnText2 = document.getElementById("myBtn2");
    if (collapsible2.style.display === "block"){
       collapsible2.style.display = "none";
       btnText2.innerHTML = "VIEW INFO"; }
else{
       collapsible2.style.display = "block";
       btnText2.innerHTML = "LESS INFO"; 
    }

}
function myFunction3(){
    var collapsible2 = document.getElementById("collapsible3");
    var btnText3 = document.getElementById("myBtn3");
    if (collapsible3.style.display === "block"){
       collapsible3.style.display = "none";
       btnText3.innerHTML = "VIEW INFO"; }
else{
       collapsible3.style.display = "block";
       btnText3.innerHTML = "LESS INFO"; 
    }

}