// การสร้างตัวแปรในภาษา JavaScript
var name = "Samit";
var age = 38;
var weight = 60;
var birthdate = "05/10/1982";
var record_date = new Date();
var datetimestamp = Date.parse("2020-08-04");
var localdateString = record_date.toLocaleDateString(
    "th-TH", 
    { day: "2-digit", month:"2-digit", year: "numeric" }
); // en-EN
/* 
การแสดงผลตัวแปร
+ บวก
- ลบ
* คูณ
/ หาร
** ยกกำลัง
% หารเอาเศษ
*/
console.log(name + 20);
console.log(age + 5);
console.log("น้ำหนักคือ " + weight + " kg.");
console.log(birthdate);
console.log(record_date);
console.log(datetimestamp);
console.log(localdateString);
