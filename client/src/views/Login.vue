<template>
  <div>
    <h2>sdfds</h2>
    <button class="btn btn-primary" @click="authenticateUser">Sign In with google</button>
  </div>
</template>

<script>
import Service from "@/service/index";
export default {
  name: "Login",
  methods: {
    async authenticateUser() {
      try {
        const data = await Service.authenticateUser();
        this.rows = data;
      } catch (err) {
        throw err;
      }
    },
  },
};
</script>