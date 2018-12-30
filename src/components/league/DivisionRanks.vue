<template>
  <li class="division">
    <table>
      <thead>
        <th>#</th>
        <th>Nom de l’équipe</th>
        <th>Joués</th>
        <th>Gagnés</th>
        <th>Nuls</th>
        <th>Perdus</th>
        <th>Points</th>
      </thead>
      <tbody>
        <tr v-for="team in sortedTeams" v-bind:key="team.id">
          <td>{{ team.rank }}</td>
          <td>{{ team.name }}</td>
          <td>{{ team.played }}</td>
          <td>{{ team.won }}</td>
          <td>{{ team.draw }}</td>
          <td>{{ team.lost }}</td>
          <td>{{ team.played }}</td>
        </tr>
      </tbody>
    </table>
  </li>
</template>

<script>
export default {
  name: 'DivisionRanks',
  props: ['division'],
  computed: {
    sortedTeams () {
      return this.division.teams.slice().sort(function (a, b) {
        return a.rank - b.rank
      })
    }
  },
  methods: {
    lostGames (played, won) {
      return played - won
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/app.scss';

  li {
    list-style-type: none;
  }

  li + li {
    margin-top: 2em;
  }
</style>
