<template>
  <b-jumbotron :header="'Welcome, ' + currentUser.username" lead="To the Node.js / Vue.js Application">
      <!-- <h1>Welcome, {{ currentUser.username }}</h1> -->
      <hr class="my-4">
      <b-card title="Registered Data" v-show="workouts.length">
        <b-table
          striped 
          sticky-header
          hover 
          :items="workouts" 
          @row-clicked="selectWorkout"
        />
      </b-card>
      <div class="mt-5">
        <b-button variant="primary" href="#" @click="refreshList()">Refresh Data List</b-button>
        <b-button variant="danger" href="#" @click="removeAllWorkouts()">Delete All Data</b-button>
      </div>
  </b-jumbotron>
</template>

<script>
// import dataServices from "../services/dataServices"
// import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { mapState, mapActions } from "vuex";

export default {
  name: 'Read',
  props: [
    'currentUser'
  ],
  mounted() {
    this.retrieveWorkouts();
  },
  data() {
    return {
      currentWorkout: null,
      currentIndex: -1,
    }
  },
  computed: mapState({
    workouts: state => state.workouts
  }),
  methods: {
    ...mapActions(['retrieveWorkouts', 'removeAllWorkouts']),
    selectWorkout(workout) {
      this.currentWorkout = workout;
      this.$router.push(
        { 
          name: 'Update',
          params: {
            id: workout.id,
            data: workout
          }
        }
      )
    },
    // removeAllWorkouts() {
    //   dataServices.deleteAll()
    //     .then(response => {
    //       console.log(response.data);
    //       this.refreshList();
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     }
    //   );
    // },
  }
}
</script>
