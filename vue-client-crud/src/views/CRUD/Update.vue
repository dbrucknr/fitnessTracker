<template>
    <b-jumbotron>
        <b-card-group deck>
            <b-card
                header="Selected Workout:"
            >
                <h1>{{ currentWorkout.title }}</h1>
                <b-card-text>
                    {{ currentWorkout.description }}
                </b-card-text>
            </b-card>
        </b-card-group>
        <b-card class="mt-5">
            <b-form @submit.prevent="updateWorkout(id)">
                <b-form-group
                    id="workout-title"
                    label="Title"
                    label-for="title-input"
                    description="Udate the title for your workout."
                >
                    <!-- V-Models are causing an error -->
                    <b-form-input
                        id="title-input"
                        v-model="currentWorkout.title"
                        type="text"
                        placeholder="Enter a new title"
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group
                    id="workout-description"
                    label="Description"
                    label-for="description-input"
                    description="Update the description of your workout."
                >
                    <b-form-textarea
                        id="description-input"
                        v-model="currentWorkout.description"
                        type="text"
                        placeholder="Enter a new description"
                    >
                    </b-form-textarea>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button variant="danger" href="#" @click="deleteWorkout()">Delete</b-button>
            </b-form>
        </b-card>
    </b-jumbotron>
</template>

<script>
import dataServices from "../../services/dataServices"

export default {
    name: 'Update',
    created() {
        this.getWorkout(this.id);
    },
    data() {
        return {
            currentWorkout: {},
            message: '',
            id: this.$route.params.id
        }
    },
    methods: {
        getWorkout(id) {
            dataServices.get(id)
                .then(response => {
                    this.currentWorkout = response.data;
                })
                .catch(error => {
                    console.log(error);
                }
            );
        },
        updateWorkout(id) {
            const data = {
                id: this.currentWorkout.id,
                title: this.currentWorkout.title,
                description: this.currentWorkout.description,
                published: true
            };
            dataServices.update(id, data)
                .then(response => {
                    console.log(response);
                    this.message = "Workout was successfully updated!";
                    this.$router.push('/');
                })
                .catch(error => {
                    console.log(error);
                }
            );
        },
        deleteWorkout() {
            dataServices.delete(this.currentWorkout.id)
                .then(response => {
                console.log(response.data);
                this.$router.push({ name: "Index" });
                })
                .catch(error => {
                    console.log(error);
                }
            );
        }
    }
}
</script>