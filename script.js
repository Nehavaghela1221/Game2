score=0;
document.onkeydown=function(e){
    console.log("key code is: ",e.keyCode)
    if(e.keyCode==38){
        gost=document.querySelector('.gost');
        gost.classList.add('animategost');
        setTimeout(()=>{
            gost.classList.remove('animategost')
        },700);
    }
    if(e.keyCode==39){
        gost=document.querySelector('.gost');
        gostX=parseInt(window.getComputedStyle(gost,null).getPropertyValue('left'));
        gost.style.left=gostX+112+"px";
    }
    if(e.keyCode==37){
        gost=document.querySelector('.gost');
        gostX=parseInt(window.getComputedStyle(gost,null).getPropertyValue('left'));
        gost.style.left=(gostX-112)+"px";
    }

}

serInterval(()=>{
    gost=document.querySelector('.gost');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    gx=parseInt(window.getComputedStyle(gost,null).getPropertyValue('left'));
    gy=parseInt(window.getComputedStyle(gost,null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(obstacle , null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle , null).getPropertyValue('top'));

    offsetX=Math.abs(gx-ox);
    offsetY=math.abs(gy-oy);
    console.log(offsetX,offsetY)
    if(offsetX<93 && offsetY<52){
        gameOver.style.visibility='visible';
        obstacle.classList.remove('obstacleAni')
    }
    else{
        score+=1;
        updateScore(score);
    }
},100);
function updateScore(score){
    scoreCont.innerHTML="Your Score:"+score

}