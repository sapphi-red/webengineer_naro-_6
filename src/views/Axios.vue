<template>
  <div>
    <button @click="sendGet">get</button>
    <button @click="sendPost">post</button>
    <button @click="sendPut">put</button>
    <button @click="sendDelete">delete</button>
  </div>
</template>

<script>
import axios from "axios";

const BASE_URL = "https://enxtcw5jzfcbr.x.pipedream.net";

export default {
  name: "Axios",
  methods: {
    sendGet() {
      axios.get(BASE_URL);
    },
    sendPost() {
      axios.post(BASE_URL, {
        traQID: "sappi-red",
        grade: 19
      });
    },
    sendPut() {
      axios.put(BASE_URL, {
        testData: { string: "string", number: 1 }
      });
    },
    sendDelete() {
      axios.delete(BASE_URL, {
        data: { po: 1 }
      });
    }
  }
};
</script>
