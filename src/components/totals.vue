<template>
    <div id="totals">
      <div v-if="totalCostsStatus" id="totalExpenses" class="columns">
        <div class="column col-12 col-xs-12 totals-row">
          <span class="list-item--title">Total&nbsp;<span v-if="totalsLabel === 'Expenses'">Expenses</span><span v-else-if="totalsLabel === 'Income'">Income</span><span v-else-if="totalsLabel === 'Savings'">Savings</span></span>
          <span class="list-item--amount">R <span v-if="totalsType === 'expense'">{{ totalExpenseAmount }}</span><span v-else-if="totalsType === 'income'">{{ totalIncomeAmount }}</span><span v-else-if="totalsType === 'savings'">{{ totalSavingsAmount }}</span></span>
        </div>
      </div>
      <div v-if="fixedCostsStatus" id="fixedCosts" class="columns">
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
      },
      totalsLabel: {
        type: String,
        required: true
      },
      fixedCostsStatus: {
        type: Boolean,
        required: true
      },
      totalCostsStatus: {
        type: Boolean,
        required: true
      },
      totalsType: {
        type: String,
        required: true
      }
    },
    components: {
    },
    data() {
      return {
      };
    },
    methods: {
      addDecimals: function (val, oldVal) {
      const number = +val.replace(/[^\d.,]/g, '');
      return isNaN(number) ? 0 : parseFloat(Math.round(number * 100) / 100).toFixed(2)
    },
    // totalAmounts: function(val) {
    //   let sum = 0;
    //   this.items.filter(item => item.type == val)
    //   .forEach(item => {
    //     sum += parseFloat(item.amount);
    //     });
    //
    //   return sum;
    // }
  },
  computed: {
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
    },
    totalExpenseAmount() {
      let sum = 0;
      this.items.filter(item => item.type == 'expense')
      .forEach(item => {
        sum += parseFloat(item.amount);
      });

      return sum;
    },
    totalIncomeAmount() {
      let sum = 0;
      this.items.filter(item => item.type == 'income')
      .forEach(item => {
        sum += parseFloat(item.amount);
      });

      return sum;
    },
    totalSavingsAmount() {
      let sum = 0;
      this.items.filter(item => item.type == 'savings')
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
  min-width: 359px;
  max-width: 580px;
  margin: 0 auto;
  background: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #efefef;
}
#fixedCosts {
  width: 100%;
  min-width: 359px;
  max-width: 580px;
  margin: 0 auto;
  background: #fff;
  box-sizing: border-box;
}
#totalExpenses .list-item--title {
  width: calc(100% - 153px);
  padding-left: 46px;
}
#fixedCosts .list-item--title {
  width: calc(100% - 153px);
  padding-left: 46px;
}
</style>
