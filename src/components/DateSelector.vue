<template>

  <div id="app-date-selector">
    <span>{{ year }}</span>
    <span>{{ month }}</span>
  </div>


</template>

<script>


export default {
  name: 'app-date-selector',
  
  

  data() {
    return {
      // year: this.$route.params.year,
      // month: this.$route.params.month
      year: 0,
      month: 0
    }
  },
  watch: {
    '$route': () => {
      // this.year = this.$route.params.year,
      // this.month = this.$route.params.month
    }
  },
  created() {

  }
}
  

</script>


<style scoped lang="scss">
  #app-date-selector {
    // width: 100%;
    // height: 100%;
    // background: #55f;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
  }
</style>
