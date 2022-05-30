var data = []
clear()
let list = data

function addData() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var item = {
        id: id,
        name: name,
        address: address,
        email: email,
    }
    if (checkID(id)) {
        data.push(item)
        viewData()
        clear()
    } else {
        alert("ID học sinh bị trùng")
    }
}

function checkID(id) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            return false
        }
    }
    return true
}



function clear() {
    document.getElementById("id").value = ""
    document.getElementById("name").value = ""
    document.getElementById("address").value = ""
    document.getElementById("email").value = ""
}

function editData(id) {

    document.getElementById("confirm").innerHTML = "<button class='btn1' id=addData onClick=addData()>Thêm</button>" +
        "&nbsp;"+"<td> <button class='btn1' onclick=confirmData('${list[i].id}')> Xác nhận sửa</button>"
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == id) {
            document.getElementById("id").value = list[i].id
            document.getElementById("name").value = list[i].name
            document.getElementById("address").value = list[i].address
            document.getElementById("email").value = list[i].email
        }
    }
}

function confirmData(id) {

    for (let i = 0; i < list.length; i++) {

            list[i].id = document.getElementById("id").value
            list[i].name = document.getElementById("name").value
            list[i].address = document.getElementById("address").value
            list[i].email = document.getElementById("email").value
    }
    viewData()
    clear()
}

function deleteData(id) {

    let choice = confirm("Bạn có muốn xóa không ?")
    console.log(list)
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == id && choice === true) {
            list.splice(i, 1)
            viewData()
        }
    }
}

function viewData() {

    var table = '<table cellpadding="5" border="1">' +
        '<tr>' +
        '<th>Mã học sinh</th>' +
        '<th>Tên học sinh</th>' +
        '<th>Địa chỉ</th>' +
        '<th>Email</th>' +
        '<th>Sửa/Xóa</th>' +
        '</tr>' +
        '</th>' + '<tbody>'
    for (let i = 0; i < list.length; i++) {
        table += '<tr>'
        table += '<td>' + list[i].id + '</td>'
        table += '<td>' + list[i].name + '</td>'
        table += '<td>' + list[i].address + '</td>'
        table += '<td>' + list[i].email + '</td>'
        table += `<td>
<button class="btn1" onclick="editData('${list[i].id}')">Sửa</button>
<button class="btn1" onclick="deleteData('${list[i].id}')">Xóa</button>
</td>`
        table += '</tr>'
    }
    table += '</tbody></table>'
    document.getElementById("result").innerHTML = table

}

