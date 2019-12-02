const $folders = $('.folders');
const $f_empty = $('_f-empty');
const $checkedAll = $('#checkedAll');
function render(num = 0){
    $folders.html('');
    let d =tools.getChild(data,num);
    list = d;
    if(!d.length){
        $f_empty.show();
        return;
    }
    $f_empty.hide();
    let every = true;
    $.each(d,(i,item)=>{
        if(!item.checked){
            every = false;
            $checkedAll.removeClass('checked');
        }
        const {checked,id,title} = item;
        let $folder = $(`<div class = "file-item ${checked?'active':''}" did = "${id}">
        <img src = "img/folder-b.png"/>
        <span class = "folder-name">${title}</span>
        <input type="text" value = "${title}" class = "editor"/>
        <i class=${checked?"checked":''}></i>
        </div>`);
        let $img = $folder.find('img');
        let $i = $folder.find('i');
        $i.click(function(){
            data[id].checked = !data[id].checked;
            render(num);
        });
        $img.dblclick(function(){
            let id = $(this).parent().attr('did')*1;
            d.forEach(item=>item.checked = false);
            $checkedAll.removeClass('checked');
            render(id);
            createMenu(id);
        });
        $folders.append($folder);
    });
    $checkedAll.off().click(function(){
        d.forEach(item=>item.checked = !every);
        render(num);
    });
    if(every){
        $checkedAll.addClass('checked');
    }
}
render(0)
