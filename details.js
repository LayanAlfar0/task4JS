const urlParameters = new URLSearchParams(window.location.search);
const id = urlParameters.get('id');
axios.get('https://dummyjson.com/products')
    .then((response) => {
        const data = response.data;
        const products = data.products;
        for (let i = 0; i < products.length; i++) {

            if (products[i].id == id) {

                let product = products[i];
                const result = ` 
                    <img src = "${product.thumbnail}"/>
                    <h2>${product.title}</h2>
                    <p>description : ${product.description}</p>
                    <p>price : ${product.price}</p>
                    <p>discountPercentage : ${product.discountPercentage}</p>
                    <p>rating: ${product.rating}</p>
                    <p>stock : ${product.stock}</p>
                    <p>brand : ${product.brand}</p>
                    <p>category : ${product.category}</p>
                `
                let images = product.images;
                const res = images.map(function (ele) {
                    return `
                    <div class="swiper-slide">
                    <img src=${ele}>
                    </div>
                        `
                });

                document.querySelector('.detail').innerHTML += result;
                document.querySelector('.details .swiper .swiper-wrapper').innerHTML += res;

                break;
            }
        }

        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            effect: 'creative',
            creativeEffect: {
                prev: {
                    // will set `translateZ(-400px)` on previous slides
                    translate: [0, 0, -400],
                },
                next: {
                    // will set `translateX(100%)` on next slides
                    translate: ['100%', 0, 0],
                },
            },

            // // If we need pagination
            // pagination: {
            //     el: '.swiper-pagination',
            // },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            autoplay: {
                delay: 5000,
            },
            // slidesPerView: 1,
            // spaceBetween: 10,
            // Responsive breakpoints


        });
    });
