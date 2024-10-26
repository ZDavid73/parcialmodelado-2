const products = [
    {
        name: "Pokemon sobre",
        price: "25,000 COP",
        img: "https://i.ytimg.com/vi/7rXJfjbtqCI/hqdefault.jpg",
        link: "./pages/modelo10.html"
    },
    {
        name: "Bad Badtz-Maru x Red Eyes Black Dragon",
        price: "20,000 COP",
        img: "https://i.ebayimg.com/images/g/zOUAAOSwHL9mLbDk/s-l1200.jpg",
        link: "./pages/modelo1.html"
    },
    {
        name: "Chococat x yugioh Winged Dragon of Ra",
        price: "20,000 COP",
        img: "https://i.ebayimg.com/images/g/ewsAAOSwIvBm8EbK/s-l1200.jpg",
        link: "./pages/modelo2.html"
    },
    {
        name: "Kuromi x Slifer The Sky Dragon",
        price: "20,000 COP",
        img: "https://i.ebayimg.com/00/s/ODE4WDcyMA==/z/J8kAAOSwrNhmGiZq/$_12.JPG?set_id=880000500F",
        link: "./pages/modelo3.html"
    },
    {
        name: "Cinnamoroll x Blue-Eyes White Dragon",
        price: "20,000 COP",
        img: "https://i.ebayimg.com/images/g/H3QAAOSw~hJl-9-1/s-l1200.jpg",
        link: "./pages/modelo4.html"
    },
    {
        name: "Hello Kitty x Dark Magician",
        price: "20,000 COP",
        img: "https://i.ebayimg.com/images/g/Xb0AAOSw7Tll--Ei/s-l1200.jpg",
        link: "./pages/modelo5.html"
    },
    {
        name: "My Melody x Dark Magician Girl",
        price: "20,000 COP",
        img: "https://media.karousell.com/media/photos/products/2024/3/31/mcdonalds_my_melody_dark_magic_1711868146_3e063681_progressive",
        link: "./pages/modelo6.html"
    },
    {
        name: "Esmoquin x Obelisco El Tormentor",
        price: "20,000 COP",
        img: "https://www.picclickimg.com/etAAAOSwNwhnBPcq/Yugioh-x-Hello-Kitty-and-Friends-McDonalds.webp",
        link: "./pages/modelo7.html"
    },
    {
        name: "Kerokerokeroppi x Kuriboh",
        price: "20,000 COP",
        img: "https://i.ebayimg.com/images/g/k0EAAOSwHBFmNryi/s-l1200.jpg",
        link: "./pages/modelo8.html"
    },
    {
        name: "Pompopurin x Exodia The Forbidden One",
        price: "20,000 COP",
        img: "https://i.ebayimg.com/images/g/mrUAAOSw59JmCyB1/s-l1200.jpg",
        link: "./pages/modelo9.html"
    },
    {
        name: "Pochacco X time magician",
        price: "20,000 COP",
        img: "https://i.ebayimg.com/images/g/nkEAAOSw1uVmEGg7/s-l1200.jpg",
        link: "./pages/modelo9.html"
    },
];

const container = document.getElementById('products-container');

products.forEach(product => {
    const item = document.createElement('div');
    item.classList.add('item');

    item.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <a class="buy-button" href="${product.link}">Ver Modelo 3D</a>
    `;

    container.appendChild(item);
});
