<template>
    <div>
        <app-header :title="title"></app-header>
        <app-landing :items="items" :toastStatus="toastStatus" :toastMessage="toastMessage" :toastSuccess="toastSuccess" :toastWarning="toastWarning" :toastError="toastError" :barExpenses="barExpenses" :barSavings="barSavings" :barDisposableIncome="barDisposableIncome" :totalsVal="totalsVal" :totalsLabel="totalsLabel" ></app-landing>
        <router-view :items="items"></router-view>
        <app-totals :items="items" :totalsVal="totalsVal" :totalsLabel="totalsLabel" :fixedCostsStatus="fixedCostsStatus" :totalCostsStatus="totalCostsStatus"></app-totals>
        <app-footer :title="title"></app-footer>
    </div>
</template>

<script>
// Imports
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import ShowBudgetSummary from './components/showBudgetSummary.vue';
import ShowExpenses from './components/showExpenses.vue';
import Totals from './components/totals.vue';

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-landing': ShowBudgetSummary,
        'app-expenses': ShowExpenses,
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
            {id: '1', title: 'Expense 1', amount: 50.00, type: 'expense', fixedCost: true},
            {id: '2', title: 'Expense 2', amount: 50.00, type: 'expense', fixedCost: false},
            {id: '3', title: 'Expense 3', amount: 50.00, type: 'expense', fixedCost: true},
            {id: '4', title: 'Expense 4', amount: 100.00, type: 'expense', fixedCost: true},
            {id: '5', title: 'Expense 5', amount: 50.00, type: 'expense', fixedCost: false},

            {id: '6', title: 'Income 1', amount: 50.00, type: 'income', fixedCost: false},
            {id: '7', title: 'Income 2', amount: 50.00, type: 'income', fixedCost: false},
            {id: '8', title: 'Income 3', amount: 50.00, type: 'income', fixedCost: false},
            {id: '9', title: 'Income 4', amount: 100.00, type: 'income', fixedCost: false},

            {id: '11', title: 'Savings 1', amount: 5.00, type: 'savings', fixedCost: false},
            {id: '12', title: 'Savings 2', amount: 10.00, type: 'savings', fixedCost: false},
            {id: '13', title: 'Savings 3', amount: 50.00, type: 'savings', fixedCost: false}
          ],
          barExpenses: '65',
          barSavings: '25',
          barDisposableIncome: '10',
          title: 'OnBudget',
          subtitle: ' - Budget and expenses calculator',
          toastStatus: false,
          toastSuccess: false,
          toastWarning: false,
          toastError: false,
          toastMessage: "Default text",
          totalsVal: 'expense',
          totalsLabel: 'Expenses',
          totalCostsStatus: true,
          fixedCostsStatus: true
        }
    },
    methods: {
    },
    computed: {

    }
}

</script>

<style>
</style>
