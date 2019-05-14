<template>
    <div class="d-visible" id="expenses">
      <SortableList lockAxis="y" v-model="items">
        <SortableItem v-for="(item, index) in items" :index="index" :key="index" :item="item"/>
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
  props: ['item'],
  template: `
    <li class="list-item"><span class="list-item--content">
      <span class="handle"></span> {{item}}</span>
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
        items: ['Expense 1', 'Expense 2', 'Expense 3', 'Expense 4', 'Expense 5', 'Expense 6', 'Expense 7', 'Expense 8'],
      };
    },
    methods: {
    }
}
</script>
<style scoped>
li {
  margin-top: 0;
}
</style>
