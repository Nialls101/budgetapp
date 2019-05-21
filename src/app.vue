<template>
    <div>
        <app-header v-bind:title="title"></app-header>
        <app-landing v-bind:items="items"></app-landing>
        <app-expenses v-bind:items="items"></app-expenses>
        <app-totals v-bind:items="items"></app-totals>
        <app-footer v-bind:title="title"></app-footer>
    </div>
</template>

<script>
// Imports
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Landing from './components/landing.vue';
import Expenses from './components/expenses.vue';
import Totals from './components/totals.vue';

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-landing': Landing,
        'app-expenses': Expenses,
        'app-totals': Totals
    },
    data () {
        return {
          user: [
              {
                income: [],
                netIncome: '',
                netPay: '',
                expenses: [],
                totalExpenses: '',
                fixedCosts: '',
                savings: [],
                monthlyDispIncome: ''
              },
          ],
          items: [
            {id: '1', title: 'Expense 1', amount: 50.00, expense: true, fixedCost: true},
            {id: '2', title: 'Expense 2', amount: 50.00, expense: true, fixedCost: false},
            {id: '3', title: 'Expense 3', amount: 50.00, expense: true, fixedCost: true},
            {id: '4', title: 'Expense 4', amount: 100.00, expense: true, fixedCost: true},
            {id: '5', title: 'Expense 5', amount: 50.00, expense: true, fixedCost: false}
          ],
          title: 'OnBudget',
          subtitle: ' - Budget and expenses calculator'
        }
    },
    methods: {
    }
}

</script>

<style>
</style>
