<template>
    <div id="expenses">
      <SortableList lockAxis="y" v-model="items">
        <SortableItem v-for="(item, index) in items" :index="index" :key="index" :item="item.title" :amount="item.amount"/>
      </SortableList>
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
  props: ['item', 'amount'],
  template: `
    <li class="list-item">
      <span class="list-item--title">
        <span class="handle"></span> {{item}}</span>
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
        newExpenseTitle: '',
        newExpenseAmount: '',
        newExpenseFixedCost: Boolean,
        items: [
          {id: '1', title: 'Expense 1', amount: '50.00', fixedCost: true},
          {id: '2', title: 'Expense 2', amount: '50.00', fixedCost: true},
          {id: '3', title: 'Expense 3', amount: '50.00', fixedCost: true},
          {id: '4', title: 'Expense 4', amount: '50.00', fixedCost: true}
        ],
        itemsOld: ['Expense 1', 'Expense 2', 'Expense 3', 'Expense 4'],
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
    }
    }
}
</script>
<style scoped>
li {
  margin-top: 0;
}
</style>
