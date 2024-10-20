<template>
  <div id="app">
    <Header />
    <Cadastro />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Cadastro from "@/components/Cadastro.vue";
import './assets/tailwind.css';

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
li,

p{
  padding: 0px;
  margin: 0px;
  color: #044c8c;
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



</style>