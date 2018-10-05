<template>
<v-container>
    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 mx-auto align-center flexbox>
                <span class="headline">MEP</span>
              </v-flex>
            </v-layout>
          </v-container>
        <v-card-title>
          <div class="px-4">
            <span class="grey--text">Timing</span><br>
            <span>8:45am-9:45am</span><br>
            <span class="grey--text">Description</span><br>
            <span>Lorem ipsum dolor sit amet, porta amet quis condimentum, in sit, leo in ipsum. Nunc diam egestas condimentum nulla molestie enim, lacus purus sapien aliquam neque eu semper. Malesuada ut illo nascetur wisi velit, mauris nisl suscipit libero ante sit, in accumsan amet tortor, faucibus non sodales hymenaeos. Gravida dignissim iaculis. Integer ultrices rhoncus donec diam, ante aenean augue leo duis vivamus nibh, risus in porttitor luctus, elit tellus justo tellus ut ligula. Proin feugiat dui neque urna, nulla sollicitudin mauris, ligula orci magna non neque tortor, feugiat ultrices sociosqu laborum tincidunt feugiat, eu class commodi.</span>

          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Present</v-btn>
          <v-btn flat color="orange">Absent</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name: 'infolectures'
}
</script>

<style scoped lang="scss">
.btn{
  position: absolute;
  }
</style>
