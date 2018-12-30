<script>
export default {
  methods: {
    getImagePath (image) {
      return image ? require(`@/assets/${image}`) : ''
    }
  },
  created () {
    this.$store.commit('setHeader', { title: this.properties.title, logo: this.properties.logo })
    this.$store.commit('setCurrentEmission', this.properties)
  }
}
</script>
