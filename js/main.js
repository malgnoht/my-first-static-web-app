var index = 0;
document.addEventListener('DOMContentLoaded',function(){
document.querySelector('#next').onclick = function(){
    if(index==0){
        document.querySelector('.s1').style.marginLeft="-100%";
        index=index+1;
    }
    else if(index==1){
        document.querySelector('.s1').style.marginLeft="-200%";
        index=index+1;
    }
    else if(index==2){
        document.querySelector('.s1').style.marginLeft="-300%";
        index=index+1;
    }
    else if(index==3){
        document.querySelector('.s1').style.marginLeft="0%";
        index=0;
    }
};
});
document.addEventListener('DOMContentLoaded',function(){
document.querySelector('#prev').onclick = function(){
    if(index==0){
        document.querySelector('.s1').style.marginLeft="-300%";
        index=3;
    }
    else if(index==3){
        document.querySelector('.s1').style.marginLeft="-200%";
        index=index-1;
    }
    else if(index==2){
        document.querySelector('.s1').style.marginLeft="-100%";
        index=index-1;
    }
    else if(index==1){
        document.querySelector('.s1').style.marginLeft="0%";
        index=index-1;
    }


};
});