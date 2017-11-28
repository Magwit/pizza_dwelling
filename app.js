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
    findMe: function(k, i, p) {
      // DONE: Use the idea about .find or findIndex below
      // https://stackoverflow.com/a/45194601
      // https://stackoverflow.com/a/41938641

      let objIndex = this.order.findIndex(obj => obj.orderId === i); // assign
      console.log("The objIndex is " + objIndex);
      if (objIndex === -1) {
        this.order.push({ qty: 1, name: k, prize: p, sum: p, orderId: i });
      } else {
        console.log("We have a orderId " + i + " already");
        this.order[objIndex].qty++;
        this.order[objIndex].sum *= this.order[objIndex].qty;
      }
    }
  },
  computed: {} // Order total
});
