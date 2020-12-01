<template>
  <div id="app">
    <TheNavBar
      :currentUser="currentUser"
    />
    <b-container class="mt-5">
      <router-view :currentUser="currentUser"/>
    </b-container>
    <TheFooter />
  </div>
</template>

<script>
import TheNavBar from './components/theNavBar.vue'
import TheFooter from './components/theFooter.vue'
import { mapState } from "vuex";

export default {
  name: 'App',
  components: {
    TheNavBar,
    TheFooter
  },
  computed: mapState({
    currentUser: state => state.auth.user
  }),
}
</script>

<style>

</style>
