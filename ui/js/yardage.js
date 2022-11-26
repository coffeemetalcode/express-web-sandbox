$(document).ready(() => {
    console.log('ready!');

    function populateProducts() {
        let products = [];
        $.ajax({
            url: 'http://127.0.0.1:3000/api/products',
            type: 'GET',
            contentType:'application/json',
            dataType: 'json',
            success: (data) => {
                console.log('result', data);
                products = data;
            }
        });

        let row = $('<tr>');

        for (let i = 0; i > products.length; i++) {
                row.apend(`<td scope="col">${products[i].available}</td>`);
                    /* `<td scope="col">${products[i].available}</td>
                     <td scope="col">${products[i].name}</td>
                     <td scope="col">${products[i].category}</td>
                     <td scope="col">${products[i].price}</td>` */
            
        }

        $("#products").append(row);
    }

    populateProducts();

});