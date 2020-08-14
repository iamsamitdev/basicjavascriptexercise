// คำสั่งในการเข้าถึง tag div
// แบบแรก getElementById
document.getElementById('result').innerHTML = "Hello";
// แบบที่ 2 getElementsByTagName
document.getElementsByTagName("p")[0].innerHTML = "Welcome";
document.getElementsByTagName("p")[1].innerHTML = "To my site";
// แบบที่ 3 querySelector
document.querySelector("#result").innerHTML = "สวัสดี";
document.querySelector("#pa").innerHTML = "ยินดีต้อนรับ";
document.querySelector("#pb").innerHTML = "เข้าสู่เว็บไซต์ของเรา";