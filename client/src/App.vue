<template>
  <v-app>
    <Layout />
  </v-app>
</template>

<script>
import Layout from "@/components/Layout";

export default {
  name: "App",
  components: {
    Layout
  }
};
</script>

<style>
#app {
  min-height: 100vh;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0d264c;
}
.container {
  margin-top: 150px;
}
.my-card {
  padding: 24px 32px;
  border-radius: 0.75rem;
  box-shadow: 0 9px 37px rgba(13, 38, 76, 0.07);
}
.row {
  margin-bottom: 32px;
}
h2 {
  font-weight: 500;
  font-size: 24px;
  line-height: 1.5;
  color: #0d264c;
  padding-bottom: 10px;
}
h1 {
  font-weight: 600;
  font-size: 41px;
  color: #0d264c;
}
</style>
