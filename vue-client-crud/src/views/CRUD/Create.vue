<template>
    <div>
        <h1>Hello from Create.vue</h1>
        <div class="submit-form">
            <div v-if="!submitted">
            <div class="form-group">
                <label for="title">Title</label>
                <input
                type="text"
                class="form-control"
                id="title"
                required
                v-model="workout.title"
                name="title"
                />
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <input
                class="form-control"
                id="description"
                required
                v-model="workout.description"
                name="description"
                />
            </div>

            <button @click="saveWorkout" class="btn btn-success">Submit</button>
            </div>

            <div v-else>
                <h4>You submitted successfully!</h4>
                <button class="btn btn-success" @click="newWorkout">Add Another</button>
            </div>
        </div>
    </div>
</template>

<script>
import dataServices from "../../services/dataServices"

export default {
    name: 'Create',
    data() {
        return {
            workout: {
                id: null,
                title: "",
                description: "",
                published: false
            },
            submitted: false
        };
    },
    methods: {
        saveWorkout() {
            const data = {
                title: this.workout.title,
                description: this.workout.description
            };
            dataServices.create(data)
                .then(response => {
                    this.workout.id = response.data.id;
                    this.submitted = true;
                })
                .catch(error => {
                    console.log(`Error: ${error}`);
                }
            );
        },
        newWorkout() {
            this.submitted = false;
            this.tutorial = {};
        }

    }
}
</script>