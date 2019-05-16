<template>
  <div class="home">
    <div>
      <label>
        都市名
        <input type="text" v-model="cityName" />
      </label>
      <button @click="submit">Enter</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      cityName: ""
    };
  },
  methods: {
    submit() {
      this.$router.push(`/city/${this.cityName}`);
    }
  }
};
</script>
