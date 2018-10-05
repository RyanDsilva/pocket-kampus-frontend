<template>
    <div id="add-submission">
    <v-container class="wrapper" grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center">
          <h2 class="new-header">Add New Submission</h2>
          <v-form ref="form" lazy-validation>
            <v-text-field v-model="submission.title" label="Title" required></v-text-field>
            <v-textarea v-model="submission.subject" label="Subject"></v-textarea>
             <div class="subheading mb-2">Due Date:</div>
            <v-date-picker v-model="submission.date" reactive required></v-date-picker>
            <div class="my-2 mx-auto">
              <v-btn @click="submit" color="indigo" dark>Add New Submission</v-btn>
            </div>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script>
export default {
  name: 'submission',
  data: () => ({
    submission: {
      title: '',
      subject: '',
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
