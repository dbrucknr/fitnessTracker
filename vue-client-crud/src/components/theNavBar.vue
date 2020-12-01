<template>
    <div>
    <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#" @click="$router.push('/')">Home</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav v-if="currentUser">
                <b-nav-item href="#" @click="$router.push('/create')">Create Workout</b-nav-item>
                <b-nav-item href="#" @click="$router.push('/about')">About</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav v-else>
                <b-nav-item v-if="!currentUser" href="#" @click="$router.push('/register')">Sign Up</b-nav-item>
                <b-nav-item v-if="!currentUser" href="#" @click="$router.push('/login')">Login</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown right v-if="currentUser">
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em>{{ currentUser.username }}</em>
                    </template>
                        <b-dropdown-item href="#" @click="$router.push('/profile')">Profile</b-dropdown-item>
                        <b-dropdown-item @click="logOut()">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'theNavBar',
    props: [
        'currentUser'
    ],
    computed: {
    //     currentUser() {
    //         return this.$store.state.auth.user;
    //     },
    //     showAdminBoard() {
    //     if (this.currentUser && this.currentUser.roles) {
    //         return this.currentUser.roles.includes('ROLE_ADMIN');
    //     }

    //     return false;
    //     },
    //     showModeratorBoard() {
    //     if (this.currentUser && this.currentUser.roles) {
    //         return this.currentUser.roles.includes('ROLE_MODERATOR');
    //     }

    //     return false;
    //     }
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        }
    }
}
</script>