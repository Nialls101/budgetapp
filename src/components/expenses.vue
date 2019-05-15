<template>
    <div id="expenses">
      <SortableList lockAxis="y" v-model="items">
        <SortableItem v-for="(item, index) in items" :index="index" :key="index" :item="item.title" :amount="item.amount" :fixedCost="item.fixedCost"/>
      </SortableList>
      <div id="totalExpenses" class="columns">
        <div class="column col-12 col-xs-12 totals-row">
          <span class="list-item--title">Total Expenses</span>
          <span class="list-item--amount">R {{ expenseAmount }}</span>
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
import {ContainerMixin, ElementMixin} from 'vue-slicksort';
const SortableList = {
  mixins: [ContainerMixin],
  template: `
    <ul class="list" useDragHandle="true">
      <slot />
    </ul>
  `,
};

const SortableItem = {
  mixins: [ElementMixin],
  props: ['item', 'amount', 'fixedCost'],
  template: `
    <li class="list-item">
      <span class="list-item--title">
        <span class="handle"></span> {{item}} <span class="fixed-cost-text" v-if="fixedCost">&nbsp;(FC)</span></span>
      </span>
      <span class="list-item--amount">
        R{{amount}}
      </span>
      <span class="list-item--actions">
        <button class="btn btn-sm btn-link tooltip tooltip-top" data-tooltip="Edit" >
          <i class="icon icon-edit"></i>
        </button>
        <button class="btn btn-sm btn-link tooltip tooltip-top" data-tooltip="Delete" >
          <i class="icon icon-delete"></i>
        </button>
      </span>
    </li>
  `,
};

export default {
    props: {
    },
    components: {
      SortableItem,
      SortableList,
    },
    data() {
      return {
        expenseAmount: '0.00',
        fixedCosts: '0.00',
        newExpenseTitle: '',
        newExpenseAmount: '',
        newExpenseFixedCost: Boolean,
        items: [
          {id: '1', title: 'Expense 1', amount: '50.00', fixedCost: true},
          {id: '2', title: 'Expense 2', amount: '50.00', fixedCost: false},
          {id: '3', title: 'Expense 3', amount: '50.00', fixedCost: true},
          {id: '4', title: 'Expense 4', amount: '50.00', fixedCost: false}
        ],
      };
    },
    methods: {
      addNewExpense: function () {
      this.expenseItem.push({
        id: this.nextExpenseId++,
        title: this.newExpenseTitle,
        amount: this.newExpenseAmount,
        fixedCost: this.newExpenseFixedCost
      })
      this.newExpenseTitle = ''
    },
    totalExpenses: function () {
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
