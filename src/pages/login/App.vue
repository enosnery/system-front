<template>
  <div id="app">
    <b-container fluid>
      <b-row class="my-1" v-for=""
      <b-form-input v-model="text" />
      </div>
      <div class="row login-row">
        <input id="password" name="password" class="form-control" type="text" placeholder="Senha">
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95vh;
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .login-container{
    width: 30vw;
  }

  .login-row{

  }
</style>
