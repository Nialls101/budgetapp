<template>
    <div>
        <app-header v-bind:title="title"></app-header>
        <app-landing></app-landing>
        <app-expenses></app-expenses>
        <app-totals></app-totals>
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
