<template>
  <h1>{{ title }}</h1>
  <br><br><br>
 
  <form action="/main" ref="frm" id="frm">
    <fieldset>
      <legend>회원 가입</legend>
      <div>
        <label for="id" class="title">ID</label>
        <input type="text" ref="id" id="id" />
      </div>
      <div>
        <label for="name" class="title">Name</label>
        <input type="text" ref="name" id="name" />
      </div>
      <div>
        <label for="pass" class="title">Password</label>
        <input type="password" ref="pass" id="pass" />
      </div>
      <div>
        <label for="repass" class="title">Re Password</label>
        <input type="password" ref="repass" id="repass" />
      </div>
      <div>
        <label class="title">Hobby</label>
        <label :for="item" v-for="(item, i) in state.hobbyList" :key="i">
          {{ item
          }}<input
            type="checkbox"
            name="hobby"
            :id="item"
            :value="item"
            v-model="state.hobby"
          />
        </label>
      </div>
      <div>
        <label class="title">Gender</label>
        <label :for="item" v-for="(item, i) in state.genderList" :key="i">
          {{ item
          }}<input
            type="radio"
            name="gender"
            :id="item"
            :ref="item"
            :value="item"
            v-model="state.gender"
          />
        </label>
      </div>
      <div>
        <label for="id" class="title">Mobile</label>
        <select v-model="state.mobile" ref="m1">
          <option :value="item" v-for="(item, i) in state.mobileList" :key="i">
            {{ item }}
          </option></select
        >-<input type="text" ref="m2" class="m" />-<input
          type="text"
          class="m"
          ref="m3"
        />
        <input type="hidden" name="mobile" ref="mobile" />
      </div>
      <div class="btn">
        <button ref="btnJoin" class="btnJoin" @click.prevent="join" >
          가입
        </button>
        <button ref="btnCancel" class="btncancel" @click.prevent="cancel">취소</button>
      </div>
    </fieldset>
  </form>
  <br><br><br><br>


<!-- <form>
  <fieldset>
    <legend>회원가입</legend>

    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <div class="form-group">
      <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>

    <div class="form-group">
      <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
   
    <fieldset class="form-group">
      <legend class="mt-4">Radio buttons</legend>
      <div class="form-check">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
          Option one is this and that—be sure to include why it's great
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Option two can be something else and selecting it will deselect option one
        </label>
      </div>
      <div class="form-check disabled">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled="">
          Option three is disabled
        </label>
      </div>
    </fieldset>
    <fieldset class="form-group">
      <legend class="mt-4">Checkboxes</legend>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Default checkbox
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="">
        <label class="form-check-label" for="flexCheckChecked">
          Checked checkbox
        </label>
      </div>
    </fieldset>
   
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset><br><br><br><br>
</form> -->











</template>

<script>
import { reactive, ref } from "@vue/reactivity";

export default {
  name: "ToJoin",

  setup() {
    const state = reactive({
      hobby: [],
      hobbyList: ["축구", "배구", "농구"],
      gender: "여",
      genderList: ["남", "여"],
      mobile: "010",
      mobileList: ["010", "011", "016"],
    });

    const title = ref("Join");
    const frm = ref(null);
    const id = ref(null);
    const name = ref(null);
    const pass = ref(null);
    const repass = ref(null);
    const m1 = ref(null);
    const m2 = ref(null);
    const m3 = ref(null);
    const mobile = ref(null);

    function join() {
      if (id.value.value == "") {
        alert("아이디를 입력하세요");
        id.focus();
        return;
      }
      if (name.value.value == "") {
        alert("이름을 입력하세요");
        name.focus();
        return;
      }
      if (pass.value.value == "") {
        alert("비밀번호를 입력하세요");
        pass.focus();
        return;
      }
      if (repass.value.value != pass.value.value) {
        alert("비밀번호 다름");
        repass.focus();
        return;
      }
      if (m2.value.value.length != 4) {
        alert("4자리로 입력하세요");
        m2.focus();
        return;
      }
      if (m3.value.value.length != 4) {
        alert("4자리로 입력하세요");
        m3.focus();
        return;
      }
      mobile.value = m1.value + m2.value + m3.value;
      frm.value.submit();
    }

    function cancel() {
      frm.value.reset();
      document.querySelector("#여").checked = true; //단순히 document의 값을 초기화
    }

    return {
      state,
      id,
      name,
      pass,
      repass,
      m1,
      m2,
      m3,
      title,
      frm,
      cancel,
      join,
    };
  },
};
</script>

<style>
#frm {
  width: 800px;
  margin: 0 auto;

}
.title {
  display: inline-block;
  width: 120px;
  margin: 5px;
  text-align: left;

}
fieldset {
  padding: 20px;
  width: 800px;
}

legend{
  color: black;
}

fieldset div {
  width: 100%;
  text-align: left;
  color: black;
  font-weight: bold;
}
.m {
  width: 50px;
  color: black;
}
.btn{
  display: flex;
  justify-content: center;

}
.btnJoin,
.btncancel {
  width: 100px;
  height: 50px;
  margin: 10px;
  font-weight: bold;
  border: none;
  border-radius: 5%;
}

</style>
