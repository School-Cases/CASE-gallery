var app = new Vue({
    el: '#app',
    data: () => {
        return {
            posts: [],
            images: [
                "bondkaka.jpg",
                "cake.jpg",
                "croissant.jpeg",
                "donuts.jpg",
                "kanelbullar.jpg"
            ]
        }
    },
    methods: {
        randomImage () { /* Returns a string */
            let image = this.images[Math.floor(Math.random() * this.images.length)];
            console.log(image)
            return image;
        },
        addPosts () {
            for(let i = 0; i < 30; i++) { /* Html koden blev väldigt osnygg om man kopiera 30 stycken posts */
                this.posts.push({
                    imageUrl: `./assets/${this.randomImage()}`
                })
            }
        }
    },
    mounted() {
        this.addPosts()
    }
})

