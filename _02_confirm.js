var status = confirm("Are you want to delete ?");
console.log(status);

// ถ้าสถานะการยืนยันเป็น true
if(status == "true" && status=="xxx"){
    console.log("Delete success");
}else if(status == "other"){
    console.log("something");
}
// ถ้าสถานะการยืนยันเป็น false
else{
    console.log("Not delete item");
}