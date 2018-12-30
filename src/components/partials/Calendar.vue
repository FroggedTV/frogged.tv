<template>
  <div class="calendar">
    <div class="calendar__header">Programme du 4 au 11 juin 2018</div>
  </div>
</template>

<script>
export default {
  name: 'calendar'
}
</script>

<style>
  .calendar {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(2, 7fr);
    /* grid-template-rows: 50vh 30vh repeat(7, minmax(20vh, 1fr)); */
  }
</style>
