<template>
  <div id="app">
    <Navbar />
    <router-view class="container" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>

<style>
#app {
  min-height: 100vh;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: rgb(248, 248, 248);
}
.my-card {
  background-color: #ffffff;
  margin: 0.75rem 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 30px 0px;
  border-radius: 7px;
}
</style>
