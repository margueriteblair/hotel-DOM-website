//display 3 rooms available with dates;

let roomList = [101, 102, 103, 201, 202, 203, 301, 302, 303]

let html = "<select>"
for (let i = 0; i < roomList.length; i++) {
        html = html + `<option value="${roomList[i]}">${roomList[i]}</option>`
        console.log(roomList[i])
}

    html = html + "</select>"
    document.getElementById("dropdown").innerHTML = html;

let bookedRooms = [];

function myFunction() {
    console.log("hello world")
}