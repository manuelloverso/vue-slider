const { createApp } = Vue;

createApp({
  data() {
    return {
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
}).mount("#app");
