import addExpense from './components/addExpense.vue';
import showExpenses from './components/showExpenses.vue';
import addIncome from './components/addIncome.vue';
import showIncome from './components/showIncome.vue';
import addSavings from './components/addSavings.vue';
import showSavings from './components/showSavings.vue';
import showBudgetSummary from './components/showBudgetSummary.vue';

export default [
    { path: '/', component: showExpenses, props: {totalsVal: 'expense', totalsLabel: 'Expenses', fixedCostsStatus: true, totalCostsStatus: true}},
    { path: '/add-expense', component: addExpense, props: {totalsVal: 'expense', totalsLabel: 'Expenses', fixedCostsStatus: false, totalCostsStatus: false}},
    { path: '/expenses', component: showExpenses, props: {totalsVal: 'expense', totalsLabel: 'Expenses', fixedCostsStatus: true, totalCostsStatus: true}},
    { path: '/income', component: showIncome, props: {totalsVal: 'income', totalsLabel: 'Income', fixedCostsStatus: false, totalCostsStatus: false}},
    { path: '/add-income', component: addIncome, props: {totalsVal: 'income', totalsLabel: 'Income', fixedCostsStatus: false, totalCostsStatus: false}},
    { path: '/savings', component: showSavings, props: {totalsVal: 'income', totalsLabel: 'Income', fixedCostsStatus: false, totalCostsStatus: false}},
    { path: '/add-savings', component: addSavings, props: {totalsVal: 'income', totalsLabel: 'Income', fixedCostsStatus: false, totalCostsStatus: false}},
]
