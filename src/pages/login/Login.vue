<template>
  <div id="app">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm margin-style"><img src="../../assets/test_pattern.svg" alt="test" width="384"></div>
            </div>
            <div class="row">
                <div class="col-sm margin-style"><h1>Bem-vindo ao Systema!</h1></div>
            </div>
            <div class="row">
                <div class="col-sm"></div>
                <div class="col-sm margin-style">
                    <input v-model="login" class="form-control input-style" type="text" id="login" placeholder="Login" /> </div>
                <div class="col-sm"></div>
            </div>
            <div class="row">
                <div class="col-sm"></div>
                <div class="col-sm margin-style"><label for="password" class="">Senha</label><input v-model="password" class="form-control input-style" type="text" id="password" placeholder="Senha" /></div>
                <div class="col-sm"></div>
            </div>
            <div class="row">
                <div class="col-sm"></div>
                <div class="col-sm margin-style"><button class="btn btn-success submit-button" v-on:click="submit()">Entrar</button></div>
                <div class="col-sm"></div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'app',
    beforeCreate: function () {
        if (this.$session.exists()) {
            window.location.href = "/menu";
        }
    },
    data(){
      return{
       login: '',
       password: '',
      }
    },
  methods:{
      submit : function () {

          let self = this;
          axios.post('http://192.168.0.38:8084/login', {
              login: self.login,
              password: self.password
          })
              .then(function (response) {
                  self.$session.start();
                  self.$session.set("user", response.data);
                 window.location.href="/menu"
              })
              .catch(function (error) {
                  alert(error)
              });
      }
  },

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
  color: #fff;
}
    .margin-style{
        margin: 1.5vh;
    }

    .input-style{
        width: 70%;
        display: inline-block;
        margin: 0 auto;


    }

    .submit-button{
        width: 50%;
        height: 100%;
    }
</style>
