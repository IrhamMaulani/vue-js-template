<template>
  <v-app>
    <navbar-header></navbar-header>

    <router-view></router-view>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    "navbar-header": Header
  }
};
</script>

<style>
</style>
