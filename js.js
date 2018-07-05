let dataArray = [];
let ind = 1;
/*let obj = {
    'id': "",
    'val': "",
    'setValue': function (id, val) {
        this.id = id;
        this.val = val;
    }
};
// let obj1 = new Object(obj);
// let obj1 = new obj(id, val);
*/

let obj = function (id, val) {
    this.id = id;
    this.val = val;
};



function getData() {

    function appendData() {
        let ind = Date.now();
        let inputValue = $("#inp").val();
        if (!inputValue.trim()) {
            return;
        }
        let obj1 = new obj(ind, inputValue);
        dataArray.push(obj1);
        setTimeout(addToLocal(ind, inputValue), 0);
        let listItem = `<li id="${ind}">
                            ${inputValue}
                            <button onclick="delItem(this)"><img src="baseline-delete-24px.svg" style="height: 16px"></button>
                        </li>`;
        $("#list").append(listItem);
    }

    function addToLocal(ind, inputVal) {
        localStorage.setItem(ind.toString(), inputVal.toString());
    }

    appendData();
}

function delItem(liItem) {

    let parent = $(liItem).parent();
    // let parent = liItem.parentNode;
    function removeFromList() {
        let id = $(parent).attr('id');
        localStorage.removeItem(id);
        $(parent).remove();
    }

    removeFromList();
}