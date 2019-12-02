let tools =(function(){
    function getChild(data,id=0){
        if(!data[id])return null;
        let ary = Object.keys(data);
        return ary.filter(item=>data[item].pid === id).map
        (item=>data[item]);
    }
    function getParent(id){
        if(data[id].pid === '-1')return null;
        return data[data[id].pid];
    }
    function grtParents(id){
        let pdata = getParent(id);
        let ary = [data[id]];
        while(pdata){
            ary.unshift(pdata);
            pdata = getParent(pdata.id);
        }
    return ary;
    }
    return{
        getChild,
        grtParents
    }
})()