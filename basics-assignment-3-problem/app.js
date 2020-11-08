const app = Vue.createApp({
    data: function() {
        return {
            counter: 0,
            message: 'Start Counting',
            timerRunning: false
        }
    },
    watch: {
        counter(v) {
            if(!this.timerRunning) {
                this.timerRunning = true;
                setTimeout(function(){
                    this.counter = 0;
                    this.message = 'Start Counting';
                    this.timerRunning = false;
                }.bind(this), 5000);
            }
            if(v > 37)
                this.message = 'Too Much!'
            else if(v < 37)
                this.message = 'Not there yet...'
            else
                this.message = ''
        }
    },
    methods: {
        incrementCounter(num) {
            this.counter += num;
        }
    }
})

app.mount('#assignment');
