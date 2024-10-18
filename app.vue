<template>
  <div id="app">
    <Header />
    <Cadastro />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Cadastro from "@/components/Cadastro.vue";

export default{
  components: {
    Header,
    Cadastro
  }
};

</script>

<style>
*{
  box-sizing: border-box;
}
body,
ul,
li,
h1,
h2,
p{
  padding: 0px;
  margin: 0px;
  color: #044c8c;
}

ul{
  list-style: none;
}

body{
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  color:#004d8e;
  background: url('./assets/pattern.svg') repeat top;
}

a{
  color: #004d8e;
  text-decoration: none;
}

img{
  max-width: 100%;
  display: block;
}

.btn{
  display: block;
  padding: 10px 30px;
  background: #006eb6;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  cursor: pointer;
}

.btn:hover{
  background: #008edc;
  transform: scale(1.1);
}

label{
  margin-bottom: 5px;
  color: #626569;
}

input,
textarea{
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
  color: #626569;
}

input:hover,
input:focus,
textarea:hover
textarea:focus{
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #008edc;
}
</style>