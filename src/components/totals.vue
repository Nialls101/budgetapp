<template>
    <div id="totals">
      <div id="totalExpenses" class="columns">
        <div class="column col-12 col-xs-12 totals-row">
          <span class="list-item--title">Total Expenses</span>
          <span class="list-item--amount">R {{ totalAmounts('expense') }}</span>
        </div>
      </div>
      <div id="fixedCosts" class="columns">
        <div class="column col-12 col-xs-12 totals-row">
          <span class="list-item--title fixed-cost-text">Fixed Costs</span>
          <span class="list-item--amount">R {{ fixedCosts }}</span>
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
        newExpenseFixedCost: Boolean
      };
    },
    methods: {
      addDecimals: function (val, oldVal) {
      const number = +val.replace(/[^\d.,]/g, '');
      return isNaN(number) ? 0 : parseFloat(Math.round(number * 100) / 100).toFixed(2)
    },
    totalAmounts: function(val) {
      let sum = 0;
      this.items.filter(item => item.type == val)
      .forEach(item => {
        sum += parseFloat(item.amount);
        });

      return sum;
    }
  },
  computed: {
    totalExpenses() {
      let sum = 0;
      this.items.filter(item => item.type == 'expense')
      .forEach(item => {
        sum += parseFloat(item.amount);
      });

      return sum;
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
      .forEach(item => {
        sum += parseFloat(item.amount);
      });

      return sum;
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
