function twoSecondReset() {
  this.counter = 0;
}

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  watch: {
    counter(v) {
      if(v > 50) {
        setTimeout(function() {this.counter = 0; console.log(this)}.bind(this), 2000);
      }
    }
    // name(v) {
    //   if(v === '' ){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = `${v} ${this.lastName}`
    //   }
    // },
    // lastName(v) {
    //   if(v === '' ){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = `${this.name} ${v}`
    //   }
    // }
  },
  computed: {
    fullname() {
      if (this.name === '' || this.lastName === '')
        return '';
      return `${this.name} ${this.lastName}`;
    }
  },
  methods: {
    outputFullName() {
      if (this.name === '')
        return '';
      return this.name+' '+'Mee';
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
