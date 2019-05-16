<template>
  <div>
    <div v-if="cityList && cityList.length !== 0">
      <ul>
        <li
          v-for="city in cityList"
          :key="city.name"
          @click="moveToCity(city.name)"
        >
          {{ city.name }}
        </li>
      </ul>
    </div>
    <div v-else>国が見つかりませんでした</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Country",
  data() {
    return {
      cityList: null
    };
  },
  methods: {
    moveToCity(name) {
      this.$router.push(`/city/${name}`);
    }
  },
  async mounted() {
    const countryName = this.$route.params.countryName;
    const res = await axios.get(`/api/countries/${countryName}`);
    this.cityList = res.data;
  }
};
</script>
