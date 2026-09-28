/* =================================================
   LOVE STORY CONTROLLER FINAL
================================================= */


/* ===============================
   CONFIG
================================ */


const correctDate = "2806";


const loveMessage =
"Bà chã iu ăm chã nhiều lém ó ❤️. Hôm nay là anni của tụi mình bà chã chúc ăm chã học giỏi ngoan ngoãn dễ thương đẹp trai nhoaaaa. Iu ăm chã nhiều lém";


const songText =
"here my love, our song";




let inputDate = "";

let letterIndex = 0;

let songIndex = 0;

let envelopeOpened = false;







/* ===============================
   ELEMENTS
================================ */


const datePage =
document.getElementById("datePage");


const giftPage =
document.getElementById("giftPage");


const letterPage =
document.getElementById("letterPage");


const songPage =
document.getElementById("songPage");



const dateInput =
document.getElementById("dateInput");



const bigHeart =
document.getElementById("bigHeart");



const giftBox =
document.getElementById("giftBox");



const envelope =
document.getElementById("envelope");



const letter =
document.getElementById("letter");



const letterText =
document.getElementById("letterText");



const continueBtn =
document.getElementById("continueBtn");



const music =
document.getElementById("bgMusic");








/* ===============================
   NUMBER INPUT
================================ */


function pressNumber(number,event){


    inputDate += number;


    dateInput.value =
    inputDate;



    createClickHeart(event);


}





function deleteNumber(event){


    inputDate =
    inputDate.slice(0,-1);



    dateInput.value =
    inputDate;



    createClickHeart(event);


}









/* ===============================
   BUTTON HEART
================================ */


function createClickHeart(event){



const heart =
document.createElement("div");



heart.className =
"click-heart";



heart.innerHTML =
"❤️";



heart.style.left =
event.clientX+"px";



heart.style.top =
event.clientY+"px";



document.body.appendChild(
heart
);



setTimeout(()=>{


heart.remove();


},800);



}









/* ===============================
   CHECK DATE
================================ */


function checkDate(){


if(inputDate === correctDate){


startLoveStory();


}

else{


shakeInput();


}


}






function shakeInput(){


dateInput.animate(

[

{
transform:"translateX(-10px)"
},

{
transform:"translateX(10px)"
},

{
transform:"translateX(0)"
}

],

{

duration:300

}

);


}









/* ===============================
   START EXPERIENCE
================================ */


function startLoveStory(){



music.volume = 0.35;



music.play()
.catch(()=>{});




datePage.classList.add(
"hidden"
);




bigHeart.classList.add(
"big-heart-animation"
);




createHeartExplosion();



setTimeout(()=>{


bigHeart.style.display="none";


showGift();



},2200);



}









/* ===============================
   BIG HEART EXPLOSION
================================ */


function createHeartExplosion(){



for(let i=0;i<100;i++){



createParticle(
"❤️",
900
);



}



}








function createParticle(icon,distance){



const heart =
document.createElement("div");



heart.innerHTML =
icon;



heart.style.position =
"fixed";



heart.style.left =
"50%";



heart.style.top =
"50%";



heart.style.fontSize =
Math.random()*30+10+"px";



heart.style.zIndex =
999;



document.body.appendChild(
heart
);




const x =
(Math.random()-0.5)
*distance;



const y =
(Math.random()-0.5)
*distance;





heart.animate(

[

{

transform:

"translate(-50%,-50%) scale(0)"

},


{


transform:

`translate(${x}px,${y}px) scale(1)`

},


{

opacity:0

}

],

{


duration:1800,


easing:
"cubic-bezier(.2,.8,.2,1)"

}


);





setTimeout(()=>{


heart.remove();


},1800);



}









/* ===============================
   GIFT
================================ */


function showGift(){



giftPage.classList.remove(
"hidden"
);



setTimeout(()=>{


openGift();


},5000);



}








function openGift(){



const box =
document.querySelector(
".gift-box"
);



if(box){


box.classList.add(
"gift-open"
);


}



setTimeout(()=>{


createGiftHearts();


},800);




setTimeout(()=>{


showEnvelope();


},2600);



}








function createGiftHearts(){



for(let i=0;i<70;i++){


createParticle(
"💕",
700
);


}



}









/* ===============================
   SHOW ENVELOPE
================================ */


function showEnvelope(){



giftPage.classList.add(
"hidden"
);



letterPage.classList.remove(
"hidden"
);



envelope.classList.remove(
"opened"
);



letter.classList.remove(
"letter-show"
);



letterText.innerHTML="";



letterIndex=0;



envelopeOpened=false;



}









/* ===============================
   OPEN ENVELOPE
================================ */


function openEnvelope(){



if(envelopeOpened)
return;



envelopeOpened=true;




envelope.classList.add(
"opened"
);




createSmallHearts();




setTimeout(()=>{


startLetterTyping();



},900);



}









function createSmallHearts(){



for(let i=0;i<25;i++){



const heart =
document.createElement("div");



heart.innerHTML =
"💕";



heart.style.position =
"fixed";



heart.style.left =
"50%";



heart.style.top =
"50%";



heart.style.fontSize =
"20px";



heart.style.zIndex =
999;



document.body.appendChild(
heart
);




const x =
(Math.random()-0.5)
*500;



const y =
(Math.random()-0.5)
*500;




heart.animate(

[

{

transform:
"translate(-50%,-50%) scale(0)"

},


{

transform:
`translate(${x}px,${y}px)`,

opacity:0

}

],

{


duration:1500,

easing:"ease-out"


}

);




setTimeout(()=>{


heart.remove();


},1500);



}



}









/* ===============================
   LETTER TYPING
================================ */


function startLetterTyping(){



if(letterIndex <
loveMessage.length){



letterText.innerHTML +=
loveMessage[letterIndex];



letterIndex++;



setTimeout(

startLetterTyping,

65

);



}


}









/* ===============================
   CONTINUE
================================ */


continueBtn.onclick =
function(){



letterPage.classList.add(
"hidden"
);



songPage.classList.remove(
"hidden"
);



startSongTyping();



};









/* ===============================
   SONG TYPING
================================ */


function startSongTyping(){



const title =
document.getElementById(
"songTitle"
);




if(songIndex <
songText.length){



title.innerHTML +=
songText[songIndex];



songIndex++;



setTimeout(

startSongTyping,

120

);



}

else{


setTimeout(()=>{


const spotify =
document.querySelector(
".spotify-card"
);



spotify.classList.remove(
"hidden"
);



spotify.classList.add(
"show"
);



},1000);



}



}









/* ===============================
   FLOATING HEART
================================ */


function createFloatingHeart(){



const heart =
document.createElement("div");



heart.className =
"float-heart";



heart.innerHTML =
"♥";



heart.style.left =
Math.random()*100+"%";



heart.style.fontSize =
Math.random()*20+10+"px";



heart.style.animationDuration =
Math.random()*5+6+"s";



document
.getElementById(
"heartsContainer"
)
.appendChild(
heart
);



setTimeout(()=>{


heart.remove();


},10000);



}



setInterval(

createFloatingHeart,

900

);









/* ===============================
   MUSIC BUTTON
================================ */


document
.getElementById(
"musicButton"
)
.onclick=function(){



if(music.paused){


music.play();


}

else{


music.pause();


}



};