$(document).ready(() => {
    console.log('ready!');

    $.ajax({
        url: 'http://127.0.0.1:3000/api/products',
        type: 'GET',
        contentType:'application/json',
        dataType: 'json',
        success: (data) => populateProducts(data)
    });

    function populateProducts(products) {
        console.log('products array', products);
        
        for (let i = 0; i < products.length; i++) { 
            products[i] = convertYardage(products[i]);

            $("#products").append(
                `<tr><td>${products[i].available}</td>
                <td>${products[i].name}</td>
                <td>${products[i].category}</td>
                <td>${products[i].price}</td></tr>`);
        }
    }

    function convertYardage(product) {
        let yardage = product.tags.includes("Yardage");
        let converted = product;

        if (yardage) {
            converted.price = product.price * 4
            converted.available = (product.available / 4).toFixed(2);
        }

        console.log(converted);
        return converted;
    }
});