<template>
  <div id="app">
      <div id="header-style">
        <menu-header></menu-header>
      </div>
      <div id="body-style">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm input-style"><h1>Bem-vindo ao Usuário!</h1></div>
            </div>
            <div class="row">
                <div class="col-sm"></div>
                <div class="col-sm input-style">{{session.id}}</div>
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
  </div>
</template>

<script>
import axios from "axios";
import Header from '../../components/Header'

export default {
  name: 'app',
    beforeCreate: function () {
        if (!this.$session.exists()) {
            window.location.href = "/";
        }
    },
    components: {
      'menu-header': Header
    },
    data(){
      return{
       session: this.$session.get("user")
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
      },

  }
}


</script>



<style>
#body-style {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
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
