<template>
  <v-container>
    <full-calendar :events="events" :config="config"></full-calendar>
  </v-container>
</template>

<script>
export default {
  name: 'calendar',
  // eslint-disable-next-line
  data() {
    return {
      events: [
        {
          title: 'KJ Hack',
          start: '2018-10-06'
        }
      ],
      config: {
        defaultView: 'month'
      }
    }
  }
}
</script>

<style>
</style>
