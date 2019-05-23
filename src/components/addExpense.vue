<template>
    <div id="addExpense">
      <div class="container">
        <div class="columns">
          <div class="column col-12 col-xs-12 add-expense--heading">
            <h5>Add expense</h5>
          </div>
        </div>
        <div class="columns">
          <form>
            <div class="column col-12 col-xs-12 add-expense--row">
              <div class="form-group">
                <label class="form-label" for="input-expense-name">Name</label>
                <input class="form-input" type="text" id="input-expense-name" placeholder="Name" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="input-expense-amount">Amount</label>
                <input class="form-input" type="number" min="0" id="input-expense-amount" placeholder="Amount" required>
              </div>
              <div class="form-group">
                <label class="form-switch">
                  <input type="checkbox" id="input-expense-fc" value="input-expense-fc">
                  <i class="form-icon"></i> Is this a fixed cost?
                </label>
              </div>
            </div>
            <div class="column col-12 col-xs-12 add-expense--row">
              <button type="submit" class="btn btn-primary">Add Expense</button>
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
        totalsVal: 'expense',
        totalsLabel: 'Expenses',
        expenses: []
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
    addExpense: function() {
      if(this.expense.name) {
        this.items.push(this.expense);
        this.expense = { title: '', amount: '', expense: true, fixedCost: false };
      }
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
    },
    fixedCosts() {
      let sum = 0;
      this.items.filter(item => item.fixedCost == true)
      .forEach(item => sum += parseFloat(item.amount));
      return sum;
    }
  }
}
</script>
<style scoped>
#addExpense {
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  padding: 15px 0px 0px 0px;
  background: #fff;
  box-sizing: border-box;
}
.add-expense--heading {
  padding: 0px 15px 5px 15px;
}
.add-expense--row {
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
