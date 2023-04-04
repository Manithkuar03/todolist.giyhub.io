function add_item(){
    let item = document.getElementById("box");
    let List_item = document.getElementById("List_item");

    if(item.value != ""){
        let make_li = document.createElement("li");
        make_li.appendChild(document.createTextNode(item.value));
        List_item.appendChild(make_li);
        item.value="";

        make_li.onclick = function(){
            this.parentNode.removeChild(this);
        }
    }
    else{
        alert("please add a value to item");
    }
}