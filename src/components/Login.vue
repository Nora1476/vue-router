<template>
    <h1>{{title}}</h1>
<br><br><br>
      <div id="content">
        <form id="frm" ref="frm" action="/">
          <fieldset>
            <legend>로그인</legend>

            <div id="formJoin">
              <label for="id">ID : </label>
              <input name="id" id="id"  ref="id" type="text" /><br />
              <label for="pass">PW : </label>
              <input name="pass" id="pass"  ref="pass" type="password" /><br />

              <input type="submit" id="btnSend" @click.prevent="login" value="Log In"  />
              <input type="reset" id="btnSend" @click.prevent="cancel" value="Cancel" />
              <input type="submit" id="btnJoin" @click="join" value="Join" />
            </div>
          </fieldset>
        </form>
      </div>


</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name:'ToLogin',
    
    
    setup(){
        const title=ref('Login')
        const frm =ref(null)
        const id =ref(null)
        const pass =ref(null)

         
        function login(){
            if(id.value.value==""){
                alert("아이디를 입력하세요.")
                id.value.focus();
                return;
            }
            if(pass.value.value==""){
                alert("비밀번호를 입력하세요.")
                pass.value.focus();
                return;
            }

        frm.value.submit();
        }

        function cancel() {
            frm.value.reset()
        }

        function join(){
          location.href = "/join";
        }

    return{
        title, frm, id, pass, login, cancel, join
    }
  }
}
</script>

<style>


      html,
      body {
        width: 100wv;
        height: 100vh;
      }


      #content {
          
        vertical-align: middle;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    
      }

      #formJoin {
        text-align: center;
        padding: 20px 20px;
        padding-bottom: 10px;
      }

      #formJoin label {
        display: inline-block;
        width: 40px;
        font-weight: bold;
      }

      #formJoin input[type="submit"],
      #formJoin input[type="reset"] {
        width: 80px;
        height: 40px;
        margin: 10px;
        font-weight: bold;
        border: none;
        border-radius: 5%;
        margin-top :30px;
      }

      fieldset {
        width: 350px;
        margin: 0 auto;
        color: rgba(0, 0, 0, 0.5);
        border-radius: 5%;
      }

      legend {
        text-align: center;
        font-size: 25px;
        font-weight: bold;
      }

      #pass{
          margin-top:10px;
      }
</style>