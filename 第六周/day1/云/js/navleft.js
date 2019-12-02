const $del = $('#del');
const $rename = $('#rename');
$del.click(function(){
    if(list.some(item=>item.checked)){
        let {pid} = list[0];
        list.forEach(item => {
           if(item.checked){
               delete data[item.id];
           }
        });
        render(pid);
    }else{
        alert('请选择文件');
    }
});

$rename.click(function(){
    let reData = list.filter(item=>item.checked);
    if(list.some(item=>item.checked)){
     if(reData.length === 1){
        let $folder = $folders.find('active');
        let $span = $folder.find('span');
        let $txt = $folder.find('input');
        $span.hide();
        $txt.css('display','block');
        $txt.select();
        $txt.blur(function(){
            let val = $txt.val();
            if($span.text() === val){
                $span.show();
                $txt.hide();
            }else{
                if(!val){
                    alert('请填写内容');
                    $txt.val($span.text());
                    $txt.select();
                    return;
                }
                let {id,pid} = reData[0];
                let siblings = list.filter(item=>item.id !=id);
                if(siblings.some(item=>item.title === val)){
                    alert('请不要设置重复的名字');
                    $txt.select();
                }else{
                    data[id].title = val;
                    data[id].checked = false;
                    render(pid)
                }
            }
        });
     }else{
         alert('只能选择一个文件');
     }
    }else{
        alert('请选择文件')
    }
})