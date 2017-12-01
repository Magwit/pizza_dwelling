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
    // In short. The order by which pizzas are added to the order determines the objIndex
    // orderId is determined by the menu items.The first item Capriciossa is always 0 etc.
    // objIndex is
    // -1 means no match, in that case push the menu item to the order array

    // https://www.w3schools.com/jsref/jsref_findindex.asp
    // "The findIndex() method returns the index of the first element in an array that pass a test (provided as a function)."
    addToOrder: function(k, i, p) {
      let objIndex = this.order.findIndex(obj => obj.orderId === i); // setting arbitrary objectIndex equal to
      console.log("The objIndex is " + objIndex);
      if (objIndex === -1) {
        //
        this.order.push({
          qty: 1,
          name: k,
          prize: p.toFixed(2),
          sum: p.toFixed(2),
          orderId: i
        });
      } else {
        console.log("And orderId is " + i + " already");
        console.log("now the object objIndex is " + objIndex);
        let result = 0;
        this.order[objIndex].qty++;
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

    //Subtotal is computed on two lines 48 and 37
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
