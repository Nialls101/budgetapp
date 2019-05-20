<template>
    <div id="totals">
      <div id="totalExpenses" class="columns">
        <div class="column col-12 col-xs-12 totals-row">
          <span class="list-item--title">Total Expenses ({{ totalExpensesCount }})</span>
          <span class="list-item--amount">R {{ totalExpenses }}</span>
        </div>
      </div>
      <div id="fixedCosts" class="columns">
        <div class="column col-12 col-xs-12 totals-row">
          <span class="list-item--title fixed-cost-text">Fixed Costs ({{ totalFixedCostsCount }})</span>
          <span class="list-item--amount">R {{ fixedCosts }}</span>
        </div>
      </div>
    </div>
</template>
<script>

export default {
    props: {
      amount: Number,
    },
    components: {
    },
    data() {
      return {
        expenses: '65',
        savings: '25',
        disposableIncome: '10',

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
        items: [
          {id: '1', title: 'Expense 1', amount: 50.00, expense: true, fixedCost: true},
          {id: '2', title: 'Expense 2', amount: 50.00, expense: true, fixedCost: false},
          {id: '3', title: 'Expense 3', amount: 50.00, expense: true, fixedCost: true},
          {id: '4', title: 'Expense 4', amount: 100.00, expense: true, fixedCost: true},
          {id: '5', title: 'Expense 5', amount: 50.00, expense: true, fixedCost: false}
        ],
        test_array: [0, 1, 2, 3, 4]
      };
    },
    methods: {
      addDecimals: function (val, oldVal) {
      const number = +val.replace(/[^\d.,]/g, '');
      return isNaN(number) ? 0 : parseFloat(Math.round(number * 100) / 100).toFixed(2)
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
      let fixedCostVal = this.items.fixedCost;
      if (fixedCostVal = true ) {
        return this.items.reduce((acc, item) => acc + item.amount, 0);
      } else {
        return 0.00
      }
    }
  }
}
</script>
<style scoped>
li {
  margin-top: 0;
}

#totalExpenses {
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  background: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #efefef;
}
#fixedCosts {
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  background: #fff;
  box-sizing: border-box;
}
#totalExpenses .list-item--title {
  padding-left: 46px;
}
#fixedCosts .list-item--title {
  padding-left: 46px;
}
</style>
