<template>
<h1>{{state.title}}</h1>
<br>
<div class="layoutContainer">
  <div class="header">header</div>
  <div class="section1">
    <div class="member">
      <h2>list</h2>
        <table class="memberInfo">
          <tr>
            <th>날짜</th>
            <th>순번</th>
            <th>가수</th>
            <th>곡명</th>
          </tr>
          <tr>
            <td>22.06.08</td>
            <td>1</td>
            <td>Nora</td>
            <td>First song and Second song</td>
          </tr>
          <tr>
            <td>22.06.09</td>
            <td>2</td>
            <td>Tim</td>
            <td>third song and fourth song</td>
          </tr>
          <tr>
            <td>22.06.010</td>
            <td>3</td>
            <td> Jason </td>
            <td>third song and fourth song</td>
          </tr>
        </table>
      </div>
  </div>

  <div class="section2">section2</div>
  <div class="section3">section3</div>
  <div class="section4">section3</div>
</div>
<br><br><br>
<br><br><br>


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
.layoutContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
  height: 800px;
  width: 80%;
  margin: 0 auto;
  grid-template-areas:
    "header header"
    "section1 section2"
    "section3 section4";
 
      }
.header{
  grid-area: header;
   background-color: rgb(222, 222, 222);
}
.section1{
  grid-area: section1;
  background-color: rgb(222, 222, 222);
  display: flex;
  justify-content: center;
  align-items: center;
}

.memberInfo {
  width: 400px;
  text-align: center;
  border: 1px solid;
  border-collapse: collapse;
}
.memberInfo td,
.memberInfo th {
  border: 1px solid;
  height: 30px;
}
.section2{
  grid-area: section2;
   background-color: rgb(222, 222, 222);
}
.section3{
  grid-area: section3;
   background-color: rgb(222, 222, 222);
}
.section4{
  grid-area: section4;
   background-color: rgb(222, 222, 222);
}


</style>