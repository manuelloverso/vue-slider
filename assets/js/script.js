const { createApp } = Vue;

createApp({
  data() {
    return {
      isPlaying: true,
      activeImage: 0,
      movie: [
        {
          description: `Random description of the first picture`,
          image: "./assets/img/01.jpg",
        },
        {
          description: "Random description of the second picture",
          image: "./assets/img/02.jpg",
        },
        {
          description: "Random description of the third picture",
          image: "./assets/img/03.jpg",
        },
        {
          description: "Random description of the fourth picture",
          image: "./assets/img/04.jpg",
        },
        {
          description: "Random description of the fifth picture",
          image: "./assets/img/05.jpg",
        },
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
