<template>
    <header>
        <h1>OnBudget</h1>
    </header>
</template>
<script>
export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data(){
        return{

        }
    },
    methods: {

    }
}
</script>
<style scoped>
header{
    background: #efefef;
    padding: 10px;
    max-width: 360px;
    margin: auto;
}
h1{
    color: #222;
    text-align: center;
}
</style>
