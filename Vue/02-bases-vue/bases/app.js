const app = Vue.createApp({
  // template: `
  // <h1>Hola Mundo</h1>
  // <p> Desde app.js</p>
  // `
  //opcion API
  // methods: {},
  // watch: {},
  // setup() {},
  data() {
    return {
      quote: " I'am Bataman",
      author: "Bruce Wain"
    }
  },
  methods: {
    changeQuote() {
      console.log('Hola Mundo')
      this.author = 'Brayan Marin'
      this.capitalize()
    },
    capitalize() {
      this.quote = this.quote.toUpperCase();
    }
  }
})

app.mount('#myApp')