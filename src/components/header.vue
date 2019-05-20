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
              <li class="menu-item"><a href="#dropdowns">Expenses</a></li>
            </ul>
          </div>
        </div>
        <div class="column col-xs-8 col-md-8">
          <h1>{{ title }}</h1>
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
    max-width: 360px;
    margin: auto;
}
h1{
    color: #fff;
    font-size: 1rem;
    text-align: center;
    text-shadow: 1px 2px #25519d
}
.btn-link {
  color: #d9e0ed;
}
.btn-link:hover, .btn-link:active, .btn-link:focus {
  color: #fff;
}
</style>
