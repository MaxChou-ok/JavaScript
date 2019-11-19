const box = document.querySelector('.body');
const lis = box.querySelectorAll('li');
const head = document.querySelector('.head');
function minEle(lis){
    let ary = [...lis].map(ele=>ele.scrollHeight);
    let min = Math.min(...ary);
    let index = ary.findIndex(item=>item === min);
    return {
        ele:lis[index],
        index,
        min
    }
}
function debounce(cb,time){
    let timer;
    return function(...arg){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            cb.call(this,...arg);
        }, time);
    }
}
function throttling(cb,time){
    let prevtime = 0,
    timer;
    return function(...arg){
        let nowTime = +new Date;
        if(nowTime - prevtime > time){
            cb.call(this,...arg);
        }else{
            clearInterval(timer);
            timer = setTimeout(() => {
                if(+new Date - prevtime > time){
                    cb.call(this,...arg);
                }
            }, time);
        }
        prevtime = nowTime;
    }
}

function render(){
    fetch('./data.json')
    .then(d=>d.json())
    .then(ary=>{
        ary.forEach((item,i)=>{
            let {ele} = minEle(lis);
            let div = document.createElement('div');
            div.className = 'img_box';
            let img = document.createElement('img');
            img.src = item.pic;
            
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            p1.className = 'desc';
            p1.innerText = item.desc;
            p2.className = 'author';
            p2.innerText = item.author;
            div.append(img);
            div.append(p1);
            div.append(p2);
            ele.append(div);
            setTimeout(() => {
                img.style.opacity = 1;
            });
        });
    });
}
render();
let iH = window.innerHeight; 
window.onscroll = debounce(fn,200);

function fn(){
    if(box.scrollHeight < iH)return;

    let {min} = minEle(lis); 
    let scroll = window.pageYOffset; 
    if(iH + scroll >= min+head.offsetHeight){
        render();
    }

}