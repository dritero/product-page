var app = new Vue ({
    el: '#app',
    data: {
        product: "Nexus LG",
        description: "The best Smartphone that has ever existed",
        image: 'https://s.yimg.com/aah/yhst-77219656498823/lg-nexus-5x-back-battery-cover-replacement-quartz-53.gif',
        inStock: false,
        inventory: 7,
        onSale: false,
        details: ["Weight: 136g.", "Dimensions: 147 x 72.6 x 7.9mm.", "OS: Android Oreo.", "Screen size: 5.2-inch."],
        variants: [
            {
                variantImage: "https://s.yimg.com/aah/yhst-77219656498823/lg-nexus-5x-back-battery-cover-replacement-quartz-53.gif",
                variantId: 5673,
                variantColor: "White"
            },
            {
                variantImage: "https://www.lg.com/uk/images/mobile-phones/md05238561/gallery/medium01.jpg",
                variantId: 5674,
                variantColor: "Black"
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        }
    }
})