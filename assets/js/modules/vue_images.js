var app = new Vue({
  el: "#app",
  data() {
    return {
      index: 0,
      image: null,
      images: [
        {
          id: 0,
          src: "./assets/images/img_10.jpg",          
          alt: ""
        },
        {
          id: 1,
          src: "./assets/images/img_6.jpg",         
          alt: ""
        },
        {
          id: 2,
          src: "./assets/images/img_7.jpg",         
          alt: ""
        },
        {
          id: 3,
          src: "./assets/images/img_8.jpg",          
          alt: ""
        },
        {
          id: 4,
          src: "./assets/images/img_9.jpg",         
          alt: ""
        }
      ]
    }
  },
  mounted() {
    this.image = this.images[0];
  },
  methods: {
    switchImage: function (e) {
      this.image = this.images[e.currentTarget.getAttribute('id')];
    }

  }
});
