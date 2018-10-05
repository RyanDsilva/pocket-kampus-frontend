<template>
    <div id="add-reminder">
    <v-container class="wrapper" grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center">
          <h2 class="new-header">Add New Reminder</h2>
          <v-form ref="form" lazy-validation>
            <v-textarea v-model="reminder.subject" label="Subject" required></v-textarea>
            <v-textarea v-model="reminder.description" label="Reminder Description"></v-textarea>
             <div class="subheading mb-2">Due Date:</div>
            <v-date-picker v-model="reminder.date" reactive required></v-date-picker>
            <div class="my-2 mx-auto">
              <v-btn @click="submit" color="indigo" dark>Add New Reminder</v-btn>
            </div>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script>
export default {
  name: 'reminder',
  data: () => ({
    reminder: {
      subject: '',
      description: '',
      duedate: ''
    }
  })
}
</script>

<style>
.wrapper {
  width: 80%;
}
@media (min-width: 992px) {
  .wrapper {
    width: 50%;
  }
}
.new-header {
  color: #39499f;
  font-weight: 300;
}
</style>
