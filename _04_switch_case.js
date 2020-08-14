var day = new Date().getDay();
console.log(day);

switch (day) {
    case 0:
        document.write("<h1>สวัสดีวันอาทิตย์</h1>");
        break;
    case 1:
        document.write("<h1>สวัสดีวันจันทร์</h1>");
        break;
    case 2:
        document.write("<h1>สวัสดีวันอังคาร</h1>");
        break;
    case 3:
        document.write("<h1>สวัสดีวันพุธ</h1>");
        break;
    case 4:
        document.write("<h1>สวัสดีวันพฤหัส</h1>");
        break;
    case 5:
        document.write("<h1>สวัสดีวันศุกร์</h1>");
        break;
    case 6:
        document.write("<h1>สวัสดีวันเสาร์</h1>");
        break;
}

function changebg(value) {
    var color = "0";
    color = value;

    var setcolor = "white";
    switch (color) {
        case "1":
            setcolor = "blue";
            console.log(setcolor);
            // คำสั่งกำหนดสีพื้นหลังของเว็บเพจด้วย  JavaScript
            document.body.style.backgroundColor = setcolor;
            break;
        case "2":
            setcolor = "red";
            console.log(setcolor);
            // คำสั่งกำหนดสีพื้นหลังของเว็บเพจด้วย  JavaScript
            document.body.style.backgroundColor = setcolor;
            break;
        case "3":
            setcolor = "yellow";
            console.log(setcolor);
            // คำสั่งกำหนดสีพื้นหลังของเว็บเพจด้วย  JavaScript
            document.body.style.backgroundColor = setcolor;
            break;
        default:
            console.log("Invalid color");
            setcolor = "white";
            // คำสั่งกำหนดสีพื้นหลังของเว็บเพจด้วย  JavaScript
            document.body.style.backgroundColor = setcolor;
            break;
    }

} // function()