
let seconds=0;
let minutes=0;
let hours=0;
let happy=null;

function increaseTime(){

    seconds++;

    if(seconds>=60){
        seconds=0;
        minutes++;
    }
    if(minutes>=60){
        hours++;
        minutes=0;
    }
}

function helper(){
    increaseTime();
    
    let time=document.querySelector(".Time");
    let second=seconds;
    let hour=hours;
    let minute=minutes;
    if(second<10)
    second='0'+second;
    if(hour<10)
    hour='0'+hour;
    if(minute<10){
        minute='0'+minute;
    }
    time.innerText=`${hour}:${minute}:${second}`;
}





document.querySelector(".stop").addEventListener('click',function(){

    clearInterval(happy);
    happy=null;
})

document.querySelector(".play").addEventListener('click',function(){

    if (!happy) {
        happy = setInterval(helper, 1000); // Start the timer
    } 
})

document.querySelector(".reset").addEventListener('click',function(){
seconds=0;
minutes=0;
hours=0;
clearInterval(happy);
happy=null;
let time=document.querySelector(".Time");
time.innerText=`00:00:00`;

})
