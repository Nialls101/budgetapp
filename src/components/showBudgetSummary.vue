<template>
  <div id="landing">

    <div class="container">
      <div class="columns">
        <div class="column col-12 col-xs-12">
          <h6>Budget breakdown</h6>
        </div>
      </div>
      <div class="columns">
        <div class="column col-12 col-xs-12">
          <div id="progressbarHome" class="bar">
            <div :barExpenses="barExpenses" class="bar-item tooltip" data-tooltip="Expenses" role="progressbar" :style="{ width: barExpenses + '%' }">{{ barExpenses }}%</div>
            <div :barSavings="barSavings" class="bar-item tooltip" data-tooltip="Savings" role="progressbar" :style="{ width: barSavings + '%' }" style="background: #817fe3">{{ barSavings }}%</div>
            <div :barDisposableIncome="barDisposableIncome" class="bar-item tooltip" data-tooltip="Disposable Income" role="progressbar" :style="{ width: barDisposableIncome + '%' }" style="background: #e4ebf1; color: #000">{{ barDisposableIncome }}%</div>
          </div>
        </div>
      </div>
      <div class="columns landing-buttons">
        <div class="column col-6 col-xs-6">
          <label class="form-label" for="input-month-year">Select month and year:</label>
        </div>
        <div class="column col-6 col-xs-6">
          <div class="form-group">
            <input class="form-input" id="input-month-year" type="month" value="2019-05">
          </div>
        </div>
      </div>
      <div class="columns landing-buttons">
        <div class="column col-6 col-xs-6">
          <button class="btn btn-primary btn-sm float-left"><i class="icon icon-plus"></i> Add new expense</button>
        </div>
        <div class="column col-6 col-xs-6">
          <button class="btn btn-primary btn-sm float-right"><i class="icon icon-plus"></i> Add new income</button>
        </div>
      </div>
      <div v-if="toastStatus" class="columns landing-buttons">
        <div class="column col-sm-12">
          <div :class="{ 'toast-success': toastSuccess, 'toast-warning': toastWarning, 'toast-error': toastError }" class="toast">
            <button class="btn btn-clear float-right"></button>
            <p>{{ toastMessage }}</p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column col-sm-12 landing-tabs">
          <ul class="tab tab-block">
            <li class="tab-item active"><a :class="{ 'badge': expensesBadgeShow }" href="#tabs">Expenses</a></li>
            <li class="tab-item"><a href="#tabs">Income</a></li>
            <li class="tab-item"><a href="#tabs">Savings</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
    props: {
      toastStatus: {
        type: Boolean,
        required: true
      },
      toastMessage: {
        type: String,
        required: true
      },
      toastSuccess: {
        type: Boolean,
        required: false
      },
      toastWarning: {
        type: Boolean,
        required: false
      },
      toastError: {
        type: Boolean,
        required: false
      },
      barExpenses: {
        type: String,
        required: true
      },
      barSavings: {
        type: String,
        required: true
      },
      barDisposableIncome: {
        type: String,
        required: true
      },
      totalsVal: {
        type: String,
        required: true
      }
    },
    data(){
        return{
          expensesBadgeShow: false,
          expensesBadgeTotal: 0,

          expenseAmount: 0.00,
          newExpenseTitle: '',
          newExpenseAmount: '',
          newExpenseFixedCost: Boolean,

        }
    },
    methods: {
    },
    computed: {
    }
}
</script>
<style scoped>
#landing{
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  padding: 15px 0px 0px 0px;
  background: #f3f3f3;
  box-sizing: border-box;
}
#expenses ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
#expenses li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
.landing-tabs {
  padding: 0;
}
.landing-tabs ul {
  margin-bottom: 0;
}
.landing-tabs li {
  padding: 6px;
  padding-bottom: 0;
}
.landing-buttons {
  padding: 15px 0px 5px 0px;
}
.landing-info {
  padding: 5px 0px 0px 0px;
}
</style>
