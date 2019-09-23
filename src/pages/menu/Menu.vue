<template>
  <div id="app">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm input-style"><img src="../../assets/test_pattern.svg" alt="test" width="384"></div>
            </div>
            <div class="row">
                <div class="col-sm input-style"><h1>Bem-vindo ao Systema!</h1></div>
            </div>
            <div class="row">
                <div class="col-sm"></div>
                <div class="col-sm input-style">{{session}}</div>
                <div class="col-sm"></div>
            </div>
            <div class="row">
                <div class="col-sm"></div>
                <div class="col-sm input-style"></div>
                <div class="col-sm"></div>
            </div>
            <div class="row">
                <div class="col-sm"></div>
                <div class="col-sm input-style"></div>
                <div class="col-sm"></div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'app',
    data(){
      return{
       session: this.$session.get("response")
      }
    },
  methods:{
      submit : function () {
          axios.post('http://192.168.0.147:8084/login', {
              login: this.login,
              password: this.password
          })
              .then(function (response) {
                  alert(response)
              })
              .catch(function (error) {
                  alert(error)
              });
      }
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
    .input-style{
        margin: 1.5vh;
    }

</style>
