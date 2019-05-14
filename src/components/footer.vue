<template>
    <footer>
        <p>Copyright 2019 {{ title }}</p>
    </footer>
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
    }
}
</script>
<style scoped>
footer{
    background: #2a5398;
    padding: 10px;
    max-width: 360px;
    margin: auto;
    font-size: .7rem;
    color: #d9e0ed;
    text-align: center;
    text-shadow: 1px 2px #25519d
}
p{
        color: #d9e0ed;
        text-align: center;
        margin: 0 0 0.3rem;
}
</style>
