<template>
  <div id="landing">

    <div class="container">
      <div class="columns">
        <div class="column col-12 col-xs-12">
          <h6>Budget breakdown</h6>
        </div>
      </div>
      <!-- Progress bar -->
      <div class="columns">
        <div class="column col-12 col-xs-12">
          <div id="progressbarHome" class="bar">
            <div 
              :barExpenses="barExpenses" 
              class="bar-item tooltip" 
              data-tooltip="Expenses" 
              role="progressbar" 
              :style="{ width: barExpenses + '%' }">{{ barExpenses }}%
            </div>
            <div 
              :barSavings="barSavings" 
              class="bar-item tooltip" 
              data-tooltip="Savings" 
              role="progressbar" 
              :style="{ width: barSavings + '%' }" 
              style="background: #817fe3">{{ barSavings }}%
            </div>
            <div 
              :barDisposableIncome="barDisposableIncome" 
              class="bar-item tooltip" 
              data-tooltip="Disposable Income" 
              role="progressbar" 
              :style="{ width: barDisposableIncome + '%' }" 
              style="background: #e4ebf1; color: #000">{{ barDisposableIncome }}%
            </div>
          </div>
        </div>
      </div>
      <!-- Month select -->
      <div class="columns landing-buttons">
        <div class="column col-6 col-xs-6">
          <label class="form-label" for="form-select-month-year">Select month and year:</label>
        </div>
        <div class="column col-6 col-xs-6">
          <div class="form-group">
            <select class="form-select" id="form-select-month-year" v-model="currentMonth">
              <option>Choose an option</option>
              <option value='0'>January</option>
              <option value='1'>February</option>
              <option value='2'>March</option>
              <option value='3'>April</option>
              <option value='4'>May</option>
              <option value='5'>June</option>
              <option value='6'>July</option>
              <option value='7'>August</option>
              <option value='8'>September</option>
              <option value='9'>October</option>
              <option value='10'>November</option>
              <option value='11'>December</option>
            </select>
          </div>
        </div>
      </div>
      <!-- Add buttons -->
      <div class="columns landing-buttons">
        <div class="column col-4 col-xs-4">
          <router-link tag="button" class="btn btn-primary btn-sm float-left" to="./add-expense">
            <i class="icon icon-plus"></i> Add <span class="hide-xs">new</span> expense
          </router-link>
        </div>
        <div class="column col-4 col-xs-4">
          <router-link tag="button" class="btn btn-primary btn-sm p-centered" to="./add-income">
            <i class="icon icon-plus"></i> Add <span class="hide-xs">new</span> income
          </router-link>
        </div>
        <div class="column col-4 col-xs-4">
          <router-link tag="button" class="btn btn-primary btn-sm float-right" to="./add-savings">
            <i class="icon icon-plus"></i> Add <span class="hide-xs">new</span> savings
          </router-link>
        </div>
      </div>
      <!-- Toasts -->
      <div v-if="toastStatus" class="columns landing-buttons">
        <div class="column col-sm-12">
          <div :class="{ 'toast-success': toastSuccess, 'toast-warning': toastWarning, 'toast-error': toastError }" class="toast">
            <button class="btn btn-clear float-right"></button>
            <p>{{ toastMessage }}</p>
          </div>
        </div>
      </div>
      <!-- Captured items list route -->
      <div class="columns">
        <div class="column col-sm-12 landing-tabs">
          <ul class="tab tab-block">
            <router-link 
              tag="li" 
              v-for="tab in tabs" 
              :key="tab" 
              :class="['tab-item', { active: currentTab === tab }]" 
              v-on:click="currentTab = tab" 
              :to="`./${tab}`" >
              <a v-on:click.prevent href="#">{{ tab }}</a>
            </router-link>
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
      currentMonth: {
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

          currentTab: '',
          tabs: ['expenses', 'income', 'savings']
        }
    },
    methods: {
    },
    computed: {
      currentTabComponent() {
        return 'show' + this.currentTab
      }
    }
}
</script>
<style scoped>
#landing{
  width: 100%;
  min-width: 359px;
  max-width: 479px;
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
