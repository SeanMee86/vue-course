Vue.createApp({
    data() {
        return {
            output: '',
            secondOutput: '',
            confirmedOutput: ''
        }
    },
    methods: {
        alertClick: function() {
            alert('Button Clicked');
        }
    }
}).mount('#assignment')
