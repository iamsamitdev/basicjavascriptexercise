function chooseCategory(catname){
    var trstring = "";
    // คำสั่งอ่านข้อมูลจาก JSON file
    fetch('category.json')
    .then(response => response.json())
    .then(function(data){

            for(var row=0; row < data['category'][catname].length; row++){
                trstring += "<tr>"+
                                "<td><img src='"+data['category'][catname][row]['img']+"' width='50'></td>"+
                                "<td>"+data['category'][catname][row]['name']+"</td>"+
                                "<td>"+data['category'][catname][row]['price']+"</td>"+
                                "<td>"+data['category'][catname][row]['qty']+"</td>"+
                                "</tr>";
            }
        
            // console.log(trstring);
            document.getElementsByTagName("tbody")[0].innerHTML = trstring;
        }
    );    
}
