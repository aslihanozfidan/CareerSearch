<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>                                                    

<script>
export default {
  name: 'app'  
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}

#app h3 {
  text-align: center;
  font-size: 18px;
  padding-top: 20px;
  color: #606060;
}

header {
  width: 100%;
  height: 48px;
}
</style>
