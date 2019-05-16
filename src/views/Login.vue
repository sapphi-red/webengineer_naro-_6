<template>
  <div class="login">
    <h1>Login Page</h1>
    <label>
      ユーザー名
      <input type="text" v-model="username" />
    </label>
    <label>
      パスワード
      <input type="password" v-model="password" />
    </label>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      axios.post("/api/login", {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>
