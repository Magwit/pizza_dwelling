new Vue({
  el: "#vue-app",
  data: {
    pizzas: [
      {
        name: "Capricciosa",
        prize: 3.0
      },
      {
        name: "Calzone",
        prize: 4.0
      },
      {
        name: "Rustic Vegan",
        prize: 5.5
      }
    ],
    order: []
  },
  methods: {
    addItem: function(k, i, p) {
      if (!this.order.includes({ name: k, prize: p })) {
        this.order.push({ name: k, prize: p });

        console.log("A " + k + " for the prize of " + p);
      } else {
        console.log("The " + k + " item was clicked more than once");
      }
    }
  }
});
