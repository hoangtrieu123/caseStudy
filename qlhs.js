var data = []
clear()
function checkID(id) {
    var list = data
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            return false
        }
    }
    return true
}

function addData() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var addres = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var item = {
        id: id,
        name: name,
        addres: addres,
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
function clear(){
    document.getElementById("id").value = ""
    document.getElementById("name").value = ""
    document.getElementById("address").value = ""
    document.getElementById("email").value = ""
}
function editData(id) {
    var list = data
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            document.getElementById("id").value = list[i].id
            document.getElementById("name").value = list[i].name
            document.getElementById("address").value = list[i].address
            document.getElementById("email").value = list[i].email
        }
    }
}

function deleteData(id) {
    var list = data
    let choice = confirm("Bạn có muốn xóa không ?")
    console.log(list)
    for (let i = 0; i < list.length; i++) {
        console.log(id, list[i].id)
        if (list[i].id == id && choice === true) {
            list.splice(i, 1)

            viewData()
        }
    }
}

function viewData() {
    var list = this.data
    var table = '<table cellpadding="5" border="1">' +
        '<tr>' +
        '<th>Mã học sinh</th>' +
        '<th>Tên học sinh</th>' +
        '<th>Địa chỉ</th>' +
        '<th>Email</th>' +
        '<th>Sửa/Xóa</th>'+
    '</tr>' +
    '</th>' + '<tbody>'
    for (let i = 0; i < list.length; i++) {
        table += '<tr>'
        table += '<td>' + list[i].id + '</td>'
        table += '<td>' + list[i].name + '</td>'
        table += '<td>' + list[i].addres + '</td>'
        table += '<td>' + list[i].email + '</td>'
        table += '<td><button onclick="editData(' + list[i].id + ')">Sửa</button>&nbsp;<button onclick="deleteData(' + list[i].id + ')">Xóa</button></td>'
        table += '</tr>'
    }
    table += '</tbody></table>'
    document.getElementById("result").innerHTML = table
}
