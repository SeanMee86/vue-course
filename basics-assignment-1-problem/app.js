const app = Vue.createApp({
    data() {
        return {
            name: 'Sean',
            age: 34,
            img: 'https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png',
            inputVal: `Here's some input`
        }
    },
    methods: {
        agePlus5() {
            return this.age + 5;
        },
        favNum() {
            return Math.random();
        }
    }
})

app.mount('#assignment');
