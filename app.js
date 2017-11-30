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
        this.order.push({
          qty: 1,
          name: k,
          prize: p.toFixed(2),
          sum: p.toFixed(2),
          orderId: i
        });
      } else {
        console.log("We have a orderId " + i + " already");
        let result = 0;
        this.order[objIndex].qty++;
        /*
        this.order[objIndex].sum =
          this.order[objIndex].qty * this.order[objIndex].prize;
        */
        /*
        result = (
          this.order[objIndex].qty * this.order[objIndex].prize
        ).toFixed(2);
        this.order[objIndex].sum = result;
        */
        this.order[objIndex].sum = (
          this.order[objIndex].qty * this.order[objIndex].prize
        ).toFixed(2);
      }
    },
    editQty: function(i, a) {
      console.log(a);
      this.order[i].qty += a;
      if (this.order[i].qty <= 0) {
        this.order.splice(i, 1);
      } else {
        let result = 0;
        result = (this.order[i].prize * this.order[i].qty).toFixed(2); // candidate for computed property
        this.order[i].sum = result;
      }
    }
  },
  computed: {
    orderTotal: function() {
      let result = 0;
      for (ii = 0; ii < this.order.length; ii++) {
        result += parseFloat(this.order[ii].sum);
        // result += this.order[ii].sum.toFixed(2);
      }
      return result.toFixed(2);
    }
    // https://www.npmjs.com/package/vue-numeric

    //Subtotal is computed on two lines 44 and 33 - 34
    // It is not DRY and is a good candidate for a method or computed property
    // failed function attempt below
    /*
    subTotal: function(iii) {
      let result = 0;
      result = this.order[iii].prize * this.order[iii].qty;
      return result;
    }
    */
  }
});
