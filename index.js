let slide = document.querySelectorAll(".patientCard");
let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("close");
let connectBtn = document.getElementById("connectBtn")

let count = 0;

slide.forEach(function(slides, index){
    slides.style.left=`${index * 100}%`
})

function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 99}%)`
    })
}

setInterval(function(){
    count++;
    if(count == slide.length){
        count=0;
    }
    myFun();
}, 2000)


card.forEach(function(cards){
    cards.addEventListener("click", function(){
        console.log(cards.firstElementChild.src);
        document.querySelector(".content").style.display="block"
       document.querySelector(".contentDetail").innerHTML=`
        <img src=${cards.firstElementChild.src}>
        <div>
            <h1>DR Alexa Zoan</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus labore perspiciatis ut ab beatae error. Perspiciatis ratione eos id minus reiciendis!</p>
        </div>

        `
        closeBtn.addEventListener("click", function(){
            document.querySelector(".content").style.display="none"

        })
    })
})

connectBtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value ==  ""){
        alert("Please Enter Detail")
    }else{
        alert("You Logged In")
        email.value="";
        pass.value="";

    }

})

    
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
         
            const fullName = document.getElementById("fullName").value.trim();
            const dob = document.getElementById("dob").value;
            const appointmentDate = document.getElementById("appointmentDate").value;
            const reason = document.getElementById("reason").value.trim();
            const contactNumber = document.getElementById("contactNumber").value.trim();
            const email = document.getElementById("email").value.trim();

            if (!fullName || !dob || !appointmentDate || !reason || !contactNumber || !email) {
                alert("Please fill in all fields before submitting the form.");
                return;
            }

           alert(`Thank you, ${fullName}! Your appointment request for ${appointmentDate} has been received. We will contact you shortly.`);

           
            form.reset();
        });
    });

