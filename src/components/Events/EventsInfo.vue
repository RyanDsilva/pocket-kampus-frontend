<template>
  <div id="event-info">
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 lg7>
          <v-img class="poster" src="../../assets/test.jpg" width="100%" height="400"></v-img>
        </v-flex>
        <v-flex xs12 sm6 lg5 class="text-xs-center my-auto">
          <div class="header">{{event.name}}</div>
          <small class="font-weight-light grey--text ">{{event.type}}</small>
          <hr class="my-2">
          <div class="display-1 font-weight-light grey--text "></div>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="my-1">
        <v-flex xs12>
          <h3>Event Description:</h3>
          <p class="description">{{event.description}}</p>
          <div class="date">
            <strong>Date: </strong>
            {{event.date.substring(0,10)}}
          </div>
          <div class="time">
            <strong>Duration: </strong>
            {{event.duration}}
          </div>
          <div class="register text-xs-center my-1">
            <v-btn :to="event.link" color="indigo" dark class="register-btn">Register</v-btn>
            <v-btn :to="event.edit" color="indigo" dark class="register-btn mx-2">Edit Event</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EventInfo',
  data: () => ({
    event: {},
    error: ''
  }),
  created () {
    axios
      // eslint-disable-next-line
      .get('/event/' + this.$route.params.id)
      .then(res => {
        const data = res.data
        this.event = data
        // eslint-disable-next-line
        this.event.link = '/event/' + this.$route.params.id + '/register'
        // eslint-disable-next-line
        this.event.edit = '/event/' + this.$route.params.id + '/edit'
      })
      .catch(err => {
        this.error = err.message
      })
  }
}
</script>

<style scoped>s
#event-info {
  font-size: 1.2em;
}
.header {
  font-size: 3em;
  font-weight: 700;
  color: #39499f;
}
</style>
