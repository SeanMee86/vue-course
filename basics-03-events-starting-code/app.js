const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    incrementCounter: function(num) {
      this.counter+=num;
    },
    decrementCounter: function(num) {
      this.counter-=num;
    },
    updateName: function(event, lastname) {
      this.name = event.target.value + ' ' + lastname;
    },
    submitForm: function() {
      alert('Form Submitted');
    },
    confirmInput: function() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
