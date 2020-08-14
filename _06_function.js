// การสร้างฟังก์ชันในภาษา JavaScript
// ฟังก์ชันแบบไม่มีการรับค่า
function wakeup(){
    alert("Hello");
}

// ฟังก์ชันแบบมีการรับค่า
function showinfo(name, email){
    alert("Hello "+ name + " Your email "+ email);
}

// ฟังก์ชันแบบมีการรับค่าและรีเทิร์น (return) ค่าออกไปใช้งาน
function area(width, height){
    var total_area = width * height;
    var total_area_with_amount = total_area * 500;
    var result = [total_area, total_area_with_amount]; // array
    return result;
}