<template>
    <div id="showIncome">
      <SortableList lockAxis="y" v-model="items">
        <SortableItem v-for="(item, index) in items" v-if="item.type == 'income'" :index="index" :key="index" :item="item.title" :amount="item.amount" :fixedCost="item.fixedCost" v-on:remove="items.splice(index, 1)"/>
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
        <button class="btn btn-sm btn-link tooltip tooltip-top" data-tooltip="Delete" v-on:click="$emit('remove')" >
          <i class="icon icon-delete"></i>
        </button>
      </span>
    </li>
  `,
};

export default {
    props: {
      amount: Number,
      items: {
        type: Array,
        required: true
      },
      totalsVal: {
        type: String,
        required: true,
      },
      totalsLabel: {
        type: String,
        required: true
      },
      fixedCostsStatus: {
        type: Boolean,
        required: true
      }
    },
    components: {
      SortableItem,
      SortableList,
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
    deleteItem: function (item, index) {
      if(this.items[index] === item) {
        this.items.splice(index, 1)
      } else {
        let found = this.items.indexOf(item)
        this.items.splice(found, 1)
      }
    },
    // Adds an expense to the existing events array
    addIncome: function() {
      if(this.expense.name) {
        this.items.push(this.expense);
        this.income = { title: '', amount: '', type: 'income', fixedCost: false };
      }
    }
  },
  computed: {
  }
}
</script>
<style scoped>
li {
  margin-top: 0;
}
</style>
