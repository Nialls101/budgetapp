<template>
    <div>
        <app-header v-bind:title="title"></app-header>
        <app-landing></app-landing>
        <app-expenses></app-expenses>
        <app-footer v-bind:title="title"></app-footer>
    </div>
</template>

<script>
// Imports
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Landing from './components/landing.vue';
import Expenses from './components/expenses.vue';

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-landing': Landing,
        'app-expenses': Expenses
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

$('.tab-item').on('click', function(){

    var thisTab = this;

    /* some code ... */

    /* Removing active effect with slideUp: */
    $('.active').not(thisTab).slideUp(function(){
        $(this).removeClass('active').fadeIn();
    });

    /* After that, active the clicked tab: */
    $(thisTab).addClass('active');

});
</script>

<style>
</style>
