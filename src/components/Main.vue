<template>
<h1>{{state.title}}</h1>
<br>
<div class="header">header</div>
<div class="section1">section1</div>
<div class="section2">section2</div>
<div class="section3">header</div>
<div class="section4">header</div>


</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    name:'ToMain',
    setup(){
      const state = reactive({
        title:'Main'
      })
    
    return{
        state, 
    }
    }
}
</script>

<style>


</style>