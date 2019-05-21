// import addExpense from './components/addExpense.vue';
import showExpenses from './components/showExpenses.vue';
// import addIncome from './components/addIncome.vue';
// import showIncome from './components/showIncome.vue';
// import addSavings from './components/addSavings.vue';
// import showSavings from './components/showSavings.vue';
import showBudgetSummary from './components/showBudgetSummary.vue';

export default [
    { path: '/', component: showExpenses},
    { path: '/expenses', component: showExpenses},
    // { path: '/add-expense', component: addExpense},
    // { path: '/income', component: showIncome},
    // { path: '/add-income', component: addIncome},
    // { path: '/savings', component: showSavings},
    // { path: '/add-savings', component: addSavings},
]
