<template>
  <div>
    <div v-if="cityInfo" class="city">
      <div class="name">Name: {{ cityInfo.name }}</div>
      <div class="country-code">CountryCode: {{ cityInfo.country_code }}</div>
      <div class="district">District: {{ cityInfo.district }}</div>
      <div class="population">Population: {{ cityInfo.population }}</div>
    </div>
    <div v-else>街が見つかりませんでした</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "City",
  data() {
    return {
      cityInfo: null
    };
  },
  async mounted() {
    const cityName = this.$route.params.cityName;
    const res = await axios.get(`/api/cities/${cityName}`);
    this.cityInfo = res.data;
  }
};
</script>
