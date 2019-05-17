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
            <div v-bind:expenses="expenses" class="bar-item tooltip" data-tooltip="Expenses" role="progressbar" v-bind:style="{ width: expenses + '%' }">{{ expenses }}%</div>
            <div v-bind:savings="savings" class="bar-item tooltip" data-tooltip="Savings" role="progressbar" v-bind:style="{ width: savings + '%' }" style="background: #817fe3">{{ savings }}%</div>
            <div v-bind:disposableIncome="disposableIncome" class="bar-item tooltip" data-tooltip="Disposable Income" role="progressbar" v-bind:style="{ width: expenses + '%' }" style="background: #e4ebf1; color: #000">{{ disposableIncome }}%</div>
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
          <div v-bind:class="{ 'toast-success': toastSuccess, 'toast-warning': toastWarning, 'toast-error': toastError }" class="toast">
            <button class="btn btn-clear float-right"></button>
            <p>{{ toastMessage }}</p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column col-sm-12 landing-tabs">
          <ul class="tab tab-block">
            <li class="tab-item active"><a v-bind:class="{ 'badge': expensesBadgeShow }" href="#tabs">Expenses</a></li>
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

    },
    data(){
        return{
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
            {id: '4', title: 'Expense 4', amount: 50.00, expense: true, fixedCost: true},
            {id: '5', title: 'Expense 5', amount: 50.00, expense: true, fixedCost: false}
          ]
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
  padding-bottom: 0;
}
.landing-buttons {
  padding: 25px 0px 5px 0px;
}
.landing-info {
  padding: 5px 0px 0px 0px;
}
</style>
