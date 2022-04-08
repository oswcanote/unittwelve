let userNum = document.getElementById("getNumber")
userNum.addEventListener("keydown", function (e){
    if (e.keyCode == 13){
        run(e);
    }
});

userNum.focus();

let counter = 0;


function run(){
    randomNum();
    userNumber();
    compareNumbers();
}
function randomNum(){
    let ran = Math.floor(Math.random()*10);
    let x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor ="#F6F930"
    x.style.color ="black"
    x.style.padding ="20px"
    x.style.textAlign = "center"
    return ran;

}
function userNumber(){
    let user = document.getElementById("getNumber").value;
    let y = document.getElementById("userNumber");
    y.innerHTML = user;
    y.style.color = "black";
    y.style.backgroundColor= "orange";
    y.style.padding= "20px";
    y.style.textAlign= "center";
    return user;
}
function compareNumbers(){
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare");
    let c = document.getElementById("counter")

    if(a != b){
        z.innerHTML = "Numbers are not the same computer got " + b + " user got " + a;
        z.style.color = "white";
        z.style.backgroundColor = "#ff00e2";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        counter++;
        c.innerHTML="You have tried " + counter + " times."
        c.style.color ="white";
        c.style.backgroundColor="red";
        c.style.padding ="20px";
        c.style.textAlign="center";
    } else if(a == b){
        z.innerHTML ="The Numbers are the same. Computer got " + b + " and the user got " + a;
        z.style.color="white";
        z.style.backgroundColor ="#00ff00";
        z.style.padding ="20px";
        z.style.textAlign ="center";
        c.innerHTML="You have tried " + counter + " times to get it right."
        c.style.color ="white";
        c.style.backgroundColor="red";
        c.style.padding ="20px";
        c.style.textAlign="center";
        counter =0;
    }
    resetInput();
}

function resetInput(){
    document.getElementById("getNumber").value ="";
}