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
    // name, index and prize from menu item are passed as parameters
    addToOrder: function(k, i, p) {
      // orderId is determined by the menu items.The first item Capriciossa is always 0 etc.
      // setting arbitrary objectIndex by the order which menu items are added to order
      let objIndex = this.order.findIndex(obj => obj.orderId === i);
      console.log("The objIndex is " + objIndex);
      // if no match then push menu item to order array
      if (objIndex === -1) {
        //
        this.order.push({
          qty: 1,
          name: k,
          prize: p.toFixed(2),
          sum: p.toFixed(2),
          orderId: i
        });
        // if a match then increment qty on order item
      } else {
        console.log("And orderId is " + i + " already");
        console.log("now the object objIndex is " + objIndex);
        let result = 0;
        this.order[objIndex].qty++;
        // NOTE: candidate for separate function. See else condition on editQty()
        this.order[objIndex].sum = (
          this.order[objIndex].qty * this.order[objIndex].prize
        ).toFixed(2);
      }
    },
    // increment or decrement qty directly on order
    editQty: function(i, a) {
      console.log(a);
      this.order[i].qty += a;
      if (this.order[i].qty <= 0) {
        this.order.splice(i, 1);
      } else {
        let result = 0;
        // NOTE candidate for separate function. See else condition on addToOrder()
        result = (this.order[i].prize * this.order[i].qty).toFixed(2);
        this.order[i].sum = result;
      }
    },
    showSubmit: function() {
      let neat = JSON.stringify(this.order);
      alert(neat);
    }
  },
  computed: {
    orderTotal: function() {
      let result = 0;
      for (ii = 0; ii < this.order.length; ii++) {
        result += parseFloat(this.order[ii].sum);
      }
      return result.toFixed(2);
    }

    // NOTE Subtotal is computed inside two separate if else statements.
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
