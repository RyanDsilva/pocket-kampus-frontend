<template>
<v-container>
    <div id="page-heading">
          <h1>Subject Name</h1>
          <br>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sequi explicabo nobis iste rerum maiores ipsum esse facilis atque doloribus exercitationem nihil, non at laudantium tenetur optio dicta amet mollitia. Illum, alias fugit culpa nemo veritatis ex possimus iusto placeat quae est sit neque dolores repellendus iure impedit, atque qui. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sequi explicabo nobis iste rerum maiores ipsum esse facilis atque doloribus exercitationem nihil, non at laudantium tenetur optio dicta amet mollitia. Illum, alias fugit culpa nemo veritatis ex possimus iusto placeat quae est sit neque dolores repellendus iure impedit, atque qui.</p>
        </div>
        <v-container class="wrapper" grid-list-md>
            <v-layout row wrap>
         <v-flex sm12 lg6 align-center>
          <v-card raised class="text-xs-center">
            <v-toolbar color="indigo" dark>
              <h3 class="mx-auto">Lectures</h3>
            </v-toolbar>
            <v-card-text>
              <v-list>
                <v-list-tile ripple v-for="subject in subjects" :key="subject.title">
                  <v-list-tile-content>
                    <v-list-tile-title>{{subject.Name}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{subject.teacher}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
            <v-btn to="/lecture/create" absolute dark fab bottom right color="indigo">
              <v-icon>add</v-icon>
              </v-btn>
          </v-card>
          </v-flex>
          <v-flex sm12 lg6 align-center>
          <v-card raised class="text-xs-center">
            <v-toolbar color="indigo" dark>
              <h3 class="mx-auto">Submissions</h3>
            </v-toolbar>
            <v-card-text>
              <v-list>
                <v-list-tile ripple v-for="subject in subjects" :key="subject.title">
                  <v-list-tile-content>
                    <v-list-tile-title>{{subject.Name}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{subject.teacher}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
            <v-btn to="/submissions" absolute dark fab bottom right color="indigo">
              <v-icon>add</v-icon>
              </v-btn>
          </v-card>
          </v-flex>
            </v-layout>
        </v-container>
</v-container>
</template>

<script>
export default {

}
</script>

<style>
.container{
    text-align: center;
}
</style>
