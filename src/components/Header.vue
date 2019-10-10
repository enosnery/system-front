<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarNav" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
     <div class="collapse navbar-collapse" id="navBarNav">
         <a class="navbar-brand" href="/menu">
             <img src="../assets/test_pattern.svg" alt="Logo" width="42">
             <span id="brand-name">Systema</span>
         </a>
         <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
             <li class="nav-item dropdown box-menu">
                <a class="nav-link dropdown-toggle" id="cadastroDropdown" role="button" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cadastros</a>
                 <div class="dropdown-menu bg-dark box-menu" aria-labelledby="cadastroDropdown" >
                     <a class="dropdown-item item-menu" href="/users">Usuários</a>
                     <a class="dropdown-item item-menu" href="/user/products">Produtos</a>
                     <a class="dropdown-item item-menu" href="/user/supplier">Fornecedores</a>
                 </div>
             </li>
         </ul>
         <div class="d-flex justify-content-end">
             <span class="navbar-text">
                 <a class="nav-link" v-on:click="logout"><i class="fas fa-sign-out-alt"></i></a>
             </span>
         </div>
     </div>

    </nav>
</template>

<script>
    export default {
        name: 'custom-header',
        methods:{
            logout: function() {
                this.$session.destroy();
                window.location.href = "/";

            }
        }
    }
</script>
<style>
    a{
        color: inherit;
    }
    .nav-link:hover{
        text-decoration: none;
        cursor: pointer;
        border-radius: 20px;
        background-color: slategrey;
    }
    .item-menu{
        color: inherit;
        text-decoration: none;
        cursor: pointer;
        border-radius: 20px;
    }

    .item-menu:hover{
        color: white;
        background-color: slategrey;
    }

    .box-menu{
        color: white;
        border-radius: 20px;
    }

    .navbar-brand{
        color: black;
    }
    .navbar-brand:hover{
        text-decoration: none;
        cursor: pointer;
    }
    #brand-name{
        margin: 5px 0 5px 0;
        padding: 10px 10px 10px 10px;
    }

</style>
