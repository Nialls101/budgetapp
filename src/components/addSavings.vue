<template>
    <div id="addSavings">
      <div class="container">
        <div class="columns">
          <div class="column col-12 col-xs-12 add-savings--heading">
            <h5>Add Savings</h5>
          </div>
        </div>
        <div class="columns">
          <form>
            <div class="column col-12 col-xs-12 add-savings--row">
              <div class="form-group">
                <label class="form-label" for="input-savings-name">Name</label>
                <input class="form-input" type="text" id="input-savings-name" placeholder="Name" required v-model="savings.title" >
              </div>
              <div class="form-group">
                <label class="form-label" for="input-savings-amount">Amount</label>
                <input class="form-input" type="number" v-model.number="savings.amount" min="0" id="input-savings-amount" placeholder="Amount" required>
              </div>
            </div>
            <div class="column col-12 col-xs-12 add-savings--row mt-2">
              <button v-on:click.prevent="addSavings" type="button" class="btn btn-primary">Add Savings</button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    amount: Number,
    items: {
      type: Array,
      required: true
    },
    totalCostsStatus: {
      type: Boolean,
      required: true
    },
    fixedCostsStatus: {
      type: Boolean,
      required: true
    }
  },
  components: {
  },
  data() {
    return {
      barExpenses: '65',
      barSavings: '25',
      barDisposableIncome: '10',

      toastStatus: false,
      toastSuccess: false,
      toastWarning: false,
      toastError: false,
      toastMessage: "Default text",

      expensesBadgeShow: false,
      expensesBadgeTotal: 0,

      expenseAmount: 0.00,
      newExpenseTitle: '',
      newExpenseAmount: '',
      newExpenseFixedCost: Boolean,
      totalsVal: 'income',
      totalsLabel: 'Income',
      savings: []
    };
  },
  methods: {
    addDecimals: function (val, oldVal) {
      const number = +val.replace(/[^\d.,]/g, '');
      return isNaN(number) ? 0 : parseFloat(Math.round(number * 100) / 100).toFixed(2);
    },
    deleteItem: function (item, index) {
      if(this.items[index] === item) {
      this.items.splice(index, 1)
      } else {
        let found = this.items.indexOf(item)
        this.items.splice(found, 1)
      }
    },
    // Adds an expense to the existing events array
    addSavings: function() {
      var savings = [];
      let items_id = this.items;
      let new_savings_id = items_id.length;
      this.savings = { 
        id: new_savings_id, 
        title: this.savings.title, 
        amount: this.savings.amount, 
        type: 'savings' 
      };
      this.items.push(this.savings);
      // console.log(this.savings);
      // console.log(this.items);
    }
  },
  computed: {
    totalExpenses() {
      let fixedCostVal = this.items.fixedCost;
      return this.items.reduce((acc, item) => acc + item.amount, 0);
    },
    totalExpensesCount() {
      return this.items.reduce((acc, item) => acc + item.expense, 0);
    },
    totalFixedCostsCount() {
      return this.items.reduce((acc, item) => acc + item.fixedCost, 0);
    }
  }
}
</script>
<style scoped>
#addSavings {
  width: 100%;
  min-width: 359px;
  max-width: 479px;
  margin: 0 auto;
  padding: 15px 0px 0px 0px;
  background: #fff;
  box-sizing: border-box;
}
.add-savings--heading {
  padding: 0px 15px 5px 15px;
}
.add-savings--row {
  padding: 0px 15px 5px 15px;
}
h5 {
  color: #3161b4;
  margin-bottom: .2em;
}
li {
  margin-top: 0;
}
form {
  width: 100%
}
.form-switch {
  margin-top: .8rem;
  margin-bottom: .8rem;
}
</style>
