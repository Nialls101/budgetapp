<template>
    <div id="addIncome">
      <div class="container">
        <div class="columns">
          <div class="column col-12 col-xs-12 add-income--heading">
            <h5>Add income</h5>
          </div>
        </div>
        <div class="columns">
          <form>
            <div class="column col-12 col-xs-12 add-income--row">
              <div class="form-group">
                <label class="form-label" for="input-income-name">Name</label>
                <input class="form-input" type="text" id="input-income-name" placeholder="Name" required v-model="income.title" >
              </div>
              <div class="form-group">
                <label class="form-label" for="input-income-amount">Amount</label>
                <input class="form-input" type="number" v-model.number="income.amount" min="0" id="input-income-amount" placeholder="Amount" required>
              </div>
            </div>
            <div class="column col-12 col-xs-12 add-income--row mt-2">
              <button v-on:click.prevent="addIncome" type="button" class="btn btn-primary">Add Income</button>
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
        income: []
      };
    },
    methods: {
      addDecimals: function (val, oldVal) {
      const number = +val.replace(/[^\d.,]/g, '');
      return isNaN(number) ? 0 : parseFloat(Math.round(number * 100) / 100).toFixed(2)
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
    addIncome: function() {
      var income = [];
      let items_id = this.items;
      let new_income_id = items_id.length;
      this.income = { 
        id: new_income_id, 
        title: this.income.title, 
        amount: this.income.amount , 
        type: 'income' 
      };
      this.items.push(this.income);
      // console.log(this.income);
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
#addIncome {
  width: 100%;
  min-width: 359px;
  max-width: 479px;
  margin: 0 auto;
  padding: 15px 0px 0px 0px;
  background: #fff;
  box-sizing: border-box;
}
.add-income--heading {
  padding: 0px 15px 5px 15px;
}
.add-income--row {
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
