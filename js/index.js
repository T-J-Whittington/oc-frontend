$(document).ready(function(){
    $.get("http://localhost:8000/order/getorders", function(response){ //This should be fixed to work with more than just symfony localhost
        console.log(response);
        let tableInsert = "";
        let tableBody = $('#orderBody');
        $.each(response, function(i, line){
             tableInsert = "<tr>" +
                 "<td>" + line.id + "</td>" +
                 "<td>" + line.date + "</td>" +
                 "<td>" + line.name + "</td>" +
                 "<td>£" + line.total + "</td>" +
                 "<td><a href='viewOrder.html?id=" + line.id + "'>View</a></td>" +
                 "</tr>";
             tableBody.append(tableInsert);
        })
    })
});