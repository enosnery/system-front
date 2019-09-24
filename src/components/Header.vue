<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
            <img src="../assets/test_pattern.svg" alt="Logo" width="42">
            <span id="brand-name">Systema</span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </a>
     <div class="collapse navbar-collapse" id="navBarNav">
         <ul class="navbar-nav">
             <li class="nav-item">
                <a class="nav-link" href="/menu">Menu</a>
             </li>
         </ul>
             <span class="navbar-text">
                 <a class="nav-link" v-on:click="logout">Logout</a>
             </span>
     </div>
    </nav>
</template>

<script>
    export default {
        name: 'header',
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
    .nav-link{
        color: black;
        text-decoration: none;
        cursor: pointer;


    }
    .nav-link:hover{
        text-decoration: none;
        cursor: pointer;
        border-radius: 20px;
        background-color: slategrey;
    }

    .navbar-brand{
        color: black;
    }
    .navbar-brand:hover{
        text-decoration: none;
        cursor: pointer;
    }
    #brand-name{
        margin: 5px 0 5px 5px;
        padding: 10px 10px 10px 10px;
    }
    #brand-name:hover{
        background-color: slategrey;
        border-radius: 20px;
    }
</style>
