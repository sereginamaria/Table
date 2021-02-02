<template>
  <div id="app">
    <v-tabel
            :users_data="USERS">

    </v-tabel>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import vTabel from "@/components/vTabel";
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

export default {
  name: 'App',
  components: {
    vTabel
  },
  computed: {
    ...mapGetters([
            'USERS'
    ])
  },
  methods: {
    ...mapActions([
            'GET_USERS_FROM_API'
    ])
  },
  mounted() {
    this.GET_USERS_FROM_API()
  }
}
</script>

<style>
</style>
