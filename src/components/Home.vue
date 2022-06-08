<template>
<h1>{{title}}</h1>
<br>



</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name:'ToHome',
    setup(){
        const title=ref('Home')
    
    return{
        title,
    }
    }
}
</script>

<style>


</style>