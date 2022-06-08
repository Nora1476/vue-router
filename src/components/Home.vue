<template>
<h1>{{state.title}}</h1>



</template>

<script>
import { reactive} from '@vue/reactivity'
export default {
    name:'ToHome',
    setup(){
     const state = reactive({
        title:'Home'
      })
    
    return{
        state,
    }
    }
}
</script>

<style>


</style>