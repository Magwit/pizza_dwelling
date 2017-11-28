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
    addToOrder: function(k, i, p) {
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
        this.order[objIndex].sum =
          this.order[objIndex].qty * this.order[objIndex].prize;
        // I need functional programming...
      }
    },
    editQty: function(i, a) {
      console.log(a);
      this.order[i].qty += a;
      if (this.order[i].qty <= 0) {
        this.order.splice(i, 1);
      } else {
        this.order[i].sum = this.order[i].prize * this.order[i].qty; // candidate for computed property
        // this.subTotal(i);
      }
    }
  },
  computed: {
    orderTotal: function() {
      let result = 0;
      for (ii = 0; ii < this.order.length; ii++) {
        result += this.order[ii].sum;
      }
      return result;
    }
    // dead function
    /*
    subTotal: function(iii) {
      let result = 0;
      result = this.order[iii].prize * this.order[iii].qty;
      return result;
    }
    */
  }
});
