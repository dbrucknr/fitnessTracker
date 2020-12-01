<template>
  <b-jumbotron>
      <b-card
        header="User Profile"
        header-tag="header"
      >
        <b-card-body>
          <b-card-title>Username: {{ currentUser.username }}</b-card-title>
          <b-card-sub-title class="mb-2">{{ currentUser.email }}</b-card-sub-title>
          <hr class="my-4">
          <b-card-text>
            <h6 class="mb-2">JSON Web Token:</h6>
              <ul>
                <li>{{ currentUser.accessToken }}</li>
              </ul>
            <h6 class="mb-2">Roles</h6>
            <ul>
              <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
            </ul>
          </b-card-text>
        </b-card-body>
      </b-card>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'Profile',
  props: [
    'currentUser'
  ],
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>