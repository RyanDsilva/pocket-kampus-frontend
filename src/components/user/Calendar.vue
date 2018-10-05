<template>
  <responsive-calendar force-monday-first="true" max-size="l" :events="events"></responsive-calendar>
</template>

<script>
var today = new Date()

export default {
  name: 'calendar',
  data: () => {
    return {
      events: [
        {
          dateStart: new Date(today.getTime() + 21.5 * 60 * 60 * 1000),
          dateEnd: new Date(today.getTime() + 22.5 * 60 * 60 * 1000),
          styleClass: 'optional css class',
          summary: 'Here a summary',
          description: 'The description',
          location: 'Location'
        }
      ]
    }
  }
}
</script>

<style>
</style>
