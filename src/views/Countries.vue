<template>
  <div>
    <div v-if="countryList && countryList.length !== 0">
      <ul>
        <li
          v-for="country in countryList"
          :key="country.code"
          @click="moveToCountry(country.name)"
        >
          {{ country.name }}
        </li>
      </ul>
    </div>
    <div v-else>国一覧が取得できませんでした</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Country",
  data() {
    return {
      countryList: null
    };
  },
  methods: {
    moveToCountry(name) {
      this.$router.push(`/country/${name}`);
    }
  },
  async mounted() {
    const res = await axios.get(`/api/countries`);
    this.countryList = res.data;
  }
};
</script>
