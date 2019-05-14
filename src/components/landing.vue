<template>
  <div id="landing">

    <div class="columns">
      <div class="column col-12 col-xs-12">
        <div id="progressbarHome" class="bar">
          <div v-bind:expenses="expenses" class="bar-item tooltip" data-tooltip="Expenses" role="progressbar" v-bind:style="{ width: expenses + '%' }">{{ expenses }}%</div>
          <div v-bind:savings="savings" class="bar-item tooltip" data-tooltip="Savings" role="progressbar" v-bind:style="{ width: savings + '%' }" style="background: #817fe3">{{ savings }}%</div>
          <div v-bind:disposableIncome="disposableIncome" class="bar-item tooltip" data-tooltip="Disposable Income" role="progressbar" v-bind:style="{ width: expenses + '%' }" style="background:none; color: #000">{{ disposableIncome }}%</div>
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
        }
    },
    methods: {
    }
}
</script>
<style scoped>
#landing{
    width: 100%;
    max-width: 360px;
    margin: 20px auto;
    padding: 0x;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
