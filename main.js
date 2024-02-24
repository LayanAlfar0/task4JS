axios.get('https://dummyjson.com/products')
    .then((response) => {
        const data = response.data;
        const products=data.products;
        const result = products.map(function(ele){
            return `
                <div class="product">
                    <img src="${ele.thumbnail}"/>
                    <h2>${ele.title}</h2>
                    <p>${ele.price}</p>
                    <a href="details.html?id=${ele.id}">details</a>
                </div>
            `
        });
        document.querySelector('.products').innerHTML=result;
    });
