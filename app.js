new Vue({
  el: "#vue-app",
  data: {
    pizzas: [
      { name: "Capricciosa", prize: 3.0 },
      { name: "Calzone", prize: 4.0 },
      { name: "Rustic Vegan", prize: 5.5 }
    ],
    order: []
  },
  methods: {
    addItem: function(k, i) {
      if (!this.order.includes(k)) {
        this.order.push(k);
      } else {
        console.log("The " + k + " item was clicked more than once");
      }
    }
  }
});
