var name = prompt("กรุณาป้อนชื่อ", "samit");
var email = prompt("กรุณาป้อนอีเมล์", "abc@email.com");
var age = prompt("กรุณาป้อนอายู", "0");

console.log("ชื่อ " + name);
console.log("อีเมล์ " + email);
console.log("อายุ " + age);

// Condition Operator
var status = (age >= 60)? "เกษียณ": "ยังทำงานอยู่"; 

console.log(status);
alert(status);
document.write(status+"<br>");
document.write(status+"<br>");
document.write("<p>"+status+"</p>");