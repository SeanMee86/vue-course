const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            hide: false,
            bColor: ''
        }
    },
    computed: {
        showOrHide() {
            return {
                    visible: !this.hide,
                    hidden: this.hide
                }
        },
        setColor() {
            return {
                backgroundColor: this.bColor
            }
        }
    },
    methods: {
        toggleDisplay() {
            this.hide = !this.hide;
        }
    }
})

app.mount('#assignment');
