const container = document.querySelector('.product');
const url = 'https://course-api.com/javascript-store-single-product';

const fetchProduct = async () => {
    container.innerHTML = `<div class="loading"></div>`;
    try {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const response = await fetch(`${url}?id=${id}`);
        const data = response.json();
        return data;
    } catch (error) {
        container.innerHTML = `<p class="error">Loading product failed.`;
        console.log(error);
    }
};

const displayProduct = (product) => {
    const colorsList = product.fields.colors
        .map((color) => {
            return `<span class="product-color" style="background-color: ${color}"></span>`;
        })
        .join('');
    return `<div class="product-wrapper">
                <img src="${product.fields.image[0].url}" class="img" alt="single product" />
                <div class="product-info">
                    <h3>${product.fields.name}</h3>
                    <h5>${product.fields.company}</h5>
                    <span>${product.fields.price / 100}</span>
                    <div class="colors">
                    ${colorsList}
                    </div>
                    <p>${product.fields.description}</p>
                    <button class="btn">add to cart</button>
                </div>
            </div>`;
};

const start = async () => {
    const data = await fetchProduct();
    container.innerHTML = '';
    container.innerHTML = displayProduct(data);
};

start();
