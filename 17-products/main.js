const url = 'https://course-api.com/javascript-store-products';

const container = document.querySelector('.products-container');

const fetchProducts = async () => {
    // container.innerHTML = `<div class="loading"></div>`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        container.innerHTML = `<p class='error'>Error fetching data</p>`;
    }
};

const displayProducts = (list) => {
    const products = list
        .map((product) => {
            return `<a href="product.html" class="single-product">
                        <img src="${product.fields.image[0].url}" class="single-product-img" alt="single product" />
                        <footer>
                            <h5 class="name">${product.fields.name}</h5>
                            <span class="price">$${product.fields.price / 100}</span>
                        </footer>
                    </a>`;
        })
        .join('');
    container.innerHTML = products;
};

const start = async () => {
    const data = await fetchProducts();
    displayProducts(data);
};

start();
