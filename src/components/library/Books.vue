<template>
  <div>
    <div class="top"></div>
    <div class="book-cards">
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex v-for="book in books" :key="book.name" xs12 md6 lg3>
            <v-card>
              <v-img src="../../assets/test.jpg"></v-img>
              <v-card-title primary-title>
                <div class="text-xs-center mx-auto">
                  <h3 class="headline mb-1">{{book.name}}</h3>
                  <div class="grey--text">{{book.type}}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn class="mx-auto" :to="book.link" dark color="indigo">Read book</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllBooks',
  data: () => ({
    books: [],
    error: ''
  })
}
</script>

<style>

</style>
