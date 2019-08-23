<template>
    <header>
      <div class="columns">
        <div class="column col-xs-2 col-md-2 text-left">
          <!-- basic dropdown button -->
          <div class="dropdown">
            <a href="#" class="btn btn-link dropdown-toggle" tabindex="0">
              <i class="icon icon-menu"></i>
            </a>
            <!-- menu component -->
            <ul class="menu">
              <li class="menu-item"><router-link tag="a" to="/">Home</router-link></li>
              <li class="menu-item"><router-link tag="a" to="/add-expense">Add Expense</router-link></li>
              <li class="menu-item"><router-link tag="a" to="/add-income">Add Income</router-link></li>
              <li class="menu-item"><router-link tag="a" to="/add-savings">Add Savings</router-link></li>
            </ul>
          </div>
        </div>
        <div class="column col-xs-8 col-md-8">
          <h1><router-link tag="a" to="/">{{ title }}</router-link></h1>
        </div>
        <div class="column col-md-2 col-xs-2 text-right">
          <button v-bind:class="{ 'btn-success': inBudget, 'btn-error': overBudget }" class="btn btn-action tooltip tooltip-left" data-tooltip="Budget status" >
            <i v-bind:class="{ 'icon-check': inBudgetIcon, 'icon-flag': overBudgetIcon }" class="icon"></i>
          </button>
        </div>
      </div>
    </header>
</template>
<script>
export default {
  props: {
    title: {
    type: String,
    required: true
    }
  },
  data(){
    return{
      inBudget: true,
      overBudget: false,
      inBudgetIcon: true,
      overBudgetIcon: false
    }
  },
  methods: {

  }
}
</script>
<style scoped>
header{
  background: #3161b4;
  padding: 10px;
  min-width: 359px;
  max-width: 479px;
  margin: auto;
}
h1{
  color: #fff;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 0;
  margin-top: 0.23em;
  text-shadow: 1px 2px #25519d
}
.active {
  color: #fff;
  text-decoration: none;
}
.btn-link {
  color: #d9e0ed;
}
.btn-link:hover, .btn-link:active, .btn-link:focus {
  color: #fff;
}
</style>
