<template>
    <div>
        <h1>Add a Workout</h1>
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
                <label for="date">Date</label>
                <input
                    type="date"
                    class="form-control"
                    id="date"
                    required
                    v-model="workout.date"
                    name="date"
                />
            </div>
            <div class="form-group">
                <label for="distance">Distance</label>
                <input
                    type="text"
                    class="form-control"
                    id="distance"
                    required
                    v-model="workout.distance"
                    name="distance"
                />
            </div>
            <div class="form-group">
                <label for="hours">Hours</label>
                <input
                    type="text"
                    class="form-control"
                    id="hours"
                    required
                    v-model="workout.hours"
                    name="hours"
                />
            </div>
            <div class="form-group">
                <label for="minutes">Minutes</label>
                <input
                    type="number"
                    class="form-control"
                    id="minutes"
                    required
                    v-model="workout.minutes"
                    name="minutes"
                />
            </div>
            <div class="form-group">
                <label for="seconds">Seconds</label>
                <input
                    type="number"
                    class="form-control"
                    id="seconds"
                    required
                    v-model="workout.seconds"
                    name="seconds"
                />
            </div>
            <div class="form-group">
                <label for="tenths">Tenths</label>
                <input
                    type="number"
                    class="form-control"
                    id="tenths"
                    required
                    v-model="workout.tenths"
                    name="tenths"
                />
            </div>
            <div class="form-group">
                <label for="description">Comments</label>
                <b-form-textarea
                class="form-control"
                id="description"
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
                date: "",
                distance: null,
                hours: null,
                minutes: null,
                seconds: null,
                tenths: null,
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
                date: this.workout.date,
                distance: this.workout.distance,
                hours: this.workout.hours,
                minutes: this.workout.minutes,
                seconds: this.workout.seconds,
                tenths: this.workout.tenths,
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