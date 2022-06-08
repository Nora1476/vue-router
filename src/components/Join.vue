<template>
  <h1>{{ title }}</h1>
  <br /><br /><br />
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
      <div>
        <label class="title"></label>
        <button ref="btnJoin" @click.prevent="join" class="btn-margin">
          가입
        </button>
        <button ref="btnCancel" @click.prevent="cancel">취소</button>
      </div>
    </fieldset>
  </form>
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
  width: 500px;
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
}
fieldset div {
  width: 100%;
  text-align: left;
}
.m {
  width: 50px;
}
.btn-margin {
  margin: 20px 10px;
}
</style>
