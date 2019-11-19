var utils = {
    getCss(ele,attr){
        var str = getComputedStyle(ele)[attr];
        if(/width|height|padding|margin|left|top/.test(attr)){
            return parseFloat(str)
        }
        return str;
    } ,
    setCss(ele,attr,val){
        if(/width|height|padding|margin|left|top/.test(attr)){
            ele.style[attr] = parseFloat(val)+'px';
        }else{
            ele.style[attr] = val;
        }
        
    },
    winH(){
        var h = document.documentElement.clientHeight || document.body.clientHeight;
        var w = document.documentElement.clientWidth || document.body.clientWidth;
        return {
            w,h
        }
    },
    offset(ele) {
        let l = ele.offsetLeft,
            t = ele.offsetTop;
        let temp = ele.offsetParent;
        while (temp) {
            l += temp.offsetLeft + temp.clientLeft;
            t += temp.offsetTop + temp.clientTop;
            temp = temp.offsetParent;
        }
        return {
            l,
            t
        }
    }
}