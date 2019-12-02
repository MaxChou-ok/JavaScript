let ary = [
    {
        title:'新建文件夹',
        id:0
    },
    {
        title:'新建文件夹(1)',
        id:1
    }
];
function render(arr){
    $('#create').html('');
    $.each(arr,(i,item)=>{
        let $fileitem = $
        (`
        <div class="file-item">
         <img src="img/folder-b.png">
        <span class="folder-name">${item.title}</span>
        <input type="text"/>
        <i class=""></i>
        </div>
     `);
     $fileitem.find('input').hide();
     $('folders').append($fileitem)
    });
}
render(ary);
$('#create').click(function(){
    let $fileitem =$(`
    <div class="file-item">
    <img src="img/folder-b.png">
    <span class="folder-name">新建文件夹</span>
    <input type="text" value="新建文件夹" class="editor" placeholder = "请设置文件名">
    <i class=""></i>
    </div>
    `);
    $('folders').append($fileitem); 
    let $txt = $fileitem.find('input');
    $txt.select();
    $txt.blur(function(){
        let val = $txt.val();
        let bool = ary.map(item=>item.title).includes(val);
            let nval = '';
            let num = 1; 
            nval = val;
            while(bool){
                let s = val.replace(/\(\d\)$/,'') + '('+ num++ +')';
                bool = ary.map(item=>item.title).includes(s);
                nval = s;
            }
            ary.push({
                id:+new Date,
                title:nval
            });
            render(ary);
    })
})