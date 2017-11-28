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
    order: [],
    ii: 0
  },
  methods: {
    addItem: function(k, i, p) {
      if (this.order.length == 0) {
        this.order.push({ name: k, prize: p, sum: p, orderId: i });
      } else if (this.order.length > 0 && this.order[this.ii].orderId !== i) {
        // find thwe order id in any
        this.order.push({ name: k, prize: p, sum: p, orderId: i });
      } else {
        console.log("The " + k + " it was clicked more than once");
        // this.order[this.oIndex + 1].sum += p;
        //    let demogorgon = this.orders.find( (d) => {
        // return d.value ===
        //    } )
      }
      // how can something that is
      // internal to the object such as objectIndex point to its own  object?
      // is this where I use .find
      // the else means ...
    },
    findMe: function(k, i, p) {
      // TODO: Use the idea about .find or findIndex below
      // https://stackoverflow.com/a/45194601
      // https://stackoverflow.com/a/41938641

      // if nothing found
      //    push
      // else if found
      //    target by index
      //    increment sum
      objIndex = this.order.findIndex(obj => obj.orderId === i);
      console.log(objIndex);
      if (objIndex === -1) {
        this.order.push({ name: k, prize: p, sum: p, orderId: i });
      } else {
        console.log("We have a orderId " + i + " already");
        this.order[objIndex].sum += p;
      }

      // console.log("the index on the Pizza menu array is " + i);
      // this.order[0].name = "kebabpizza";
      // the syntax is correct but the index is irrelevant.
      // The manu index and the order index
      // are not related
    }
  }
});
