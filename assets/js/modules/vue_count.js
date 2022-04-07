const parent = new Vue({
  el: '#counter',
  data: {
    counter: 0,
    total: 0
  },
  methods: {
    increment: function () {
      anothercounter = counter;
      this.counter += 1      
    },
    decrement: function () {
      this.counter -= 1            
    }
  }
})