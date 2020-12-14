$(document).ready(function(){
    // $.ajax({ url: "backend", "OrderController", "getOrders",
    //     context: document.body,
    //     success: function(){
    //         alert("done");
    //     }});

    $.get("http://localhost:8000/order/getorders", function(response){
        console.log(response);
        let tableInsert = "";
        let tableBody = $('#orderBody');
        $.each(response, function(i, line){
             tableInsert = "<tr>" +
                 "<td>" + line.id + "</td>" +
                 "<td>" + line.date + "</td>" +
                 "<td>" + line.name + "</td>" +
                 "<td>" + line.total + "</td>" +
                 "</tr>";
             tableBody.append(tableInsert);
        })
    })
});