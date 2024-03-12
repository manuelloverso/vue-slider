const { createApp } = Vue;

createApp({
  data() {
    return {
      isPlaying: true,
      activeImage: 0,
      movie: [
        "./assets/img/01.jpg",
        "./assets/img/02.jpg",
        "./assets/img/03.jpg",
        "./assets/img/04.jpg",
        "./assets/img/05.jpg",
      ],
    };
  },

  methods: {
    previousBtn() {
      this.activeImage--;
      if (this.activeImage < 0) {
        this.activeImage = this.movie.length - 1;
      }
    },

    nextBtn() {
      this.activeImage++;
      if (this.activeImage >= this.movie.length) {
        this.activeImage = 0;
      }
    },

    autoPlay(boolean) {
      if (boolean == true) {
        this.isPlaying = setInterval(this.nextBtn, 2000);
      } else {
        clearInterval(this.isPlaying);
      }
    },
  },

  mounted() {
    this.autoPlay(this.isPlaying);
  },
}).mount("#app");
