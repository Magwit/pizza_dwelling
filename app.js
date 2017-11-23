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
        name: "RusticVegan",
        prize: 5.5
      }
    ],
    order: []
  },
  methods: {
    addItem: function(k, i, p) {
      if (!this.order.includes("name :" + k)) {
        this.order.push({ name: k, prize: p });
        console.log("A " + k + " for the prize of " + p);
      } else {
        console.log("The " + k + " item was clicked more than once");
      }
    },
    hasVegan: function(k, i, p) {
      // console.log(this.pizzas[0].name);
      var self = this;
      // check for empty array
      if (!this.order.length) {
        console.log("First!");
        this.order.push({ name: k, prize: p });
        // else check for matches in the array and push unique pizza names
      } else {
        this.order.forEach(function(arrayElem) {
          // let result = "";
          if (arrayElem.name == k) {
            console.log("already got one " + k);
            // and return a value
          } else {
            self.order.push({ name: k, prize: p });
          }
        });
      }
    }
  }
});
