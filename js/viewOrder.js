$(document).ready(function(){
    let urlID = new URLSearchParams(document.location.search.substring(1)).get('id').toString();

    $.get("http://localhost:8000/order/getorder?id=" + urlID, function(response){ //This should be fixed to work with more than just symfony localhost
        console.log(response);
        let orderInsert = "";
        let orderBody = $('#orderBody');
        let customerInsert = "";
        let customerBody = $('#customerBody');
        let invoiceInsert = "";
        let invoiceBody = $('#invoiceBody');
        let total = 0;

        orderInsert = "<tr>" +
             "<td>" + response.info.id + "</td>" +
             "<td>" + response.info.date + "</td>" +
             "</tr>";
        orderBody.append(orderInsert);
        customerInsert = "<tr>" +
             "<td>" + response.info.custNum + "</td>" +
             "<td>" + response.info.firstname + "</td>" +
             "<td>" + response.info.lastname + "</td>" +
             "</tr>";
        customerBody.append(customerInsert);

        $.each(response.items, function(i, line){
            invoiceInsert = "<tr>" +
                 "<td>" + line.id + "</td>" +
                 "<td>" + line.item + "</td>" +
                 "<td>" + line.quantity + " @ £" + line.price + "</td>" +
                 "<td>£" + line.total + "</td>" +
                 "</tr>";
            invoiceBody.append(invoiceInsert);
            total = total + parseInt(line.total);
        });

        $('#totalNum').html("£"+total);
    });
});