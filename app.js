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
        this.order.push({ name: k, prize: p, sum: p });
      } else if (this.order.length > 0 && this.order[this.ii].name !== k) {
        this.order.push({ name: k, prize: p, sum: p });
        this.ii = this.ii + 1;
      } else {
        console.log("The " + k + " item was clicked more than once");
        this.order[this.ii].sum += p;
      }
    },
    incrementSum: function(k, i, p) {
      // // TODO: Push condition create a index variable and set it to
      // ii. In the else we increment by that variable..
      // Do I need to pass the event? EVENT.. tells us
      //   this.order.index.sum = sum + prize
      // for Looped
      // https://stackoverflow.com/questions/4689856/how-to-change-value-of-object-which-is-inside-an-array-using-javascript-or-jquer

      // here is someone using .find.. I like it
      // https://stackoverflow.com/a/45194601

      console.log("the index on the Pizza menu array is " + i);
      // this.order[0].name = "kebabpizza";
      // the syntax is correct but the index is irrelevant.
      // The manu index and the order index
      // are not related
      this.order.push({ name: "Ratt", prize: 10, sum: 10 });
    }
  }
});
