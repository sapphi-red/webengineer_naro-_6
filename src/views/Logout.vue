<template>
  <div class="logout">
    <h1>Logout Page</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Logout",
  methods: {
    logout() {
      axios.post("/api/logout");
    }
  }
};
</script>
