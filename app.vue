<template>
  <div id="app">
    <Header />
    <Cadastro />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Cadastro from "@/components/Cadastro.vue";
import './index.css';

export default{
  components: { 
    Header,
    Cadastro
  }
};

</script>

<style>
* {
  box-sizing: border-box;
}

body {
  @apply font-sans text-[#004d8e]; 
  background: url('./assets/pattern.svg') repeat top;
}

img {
  @apply max-w-full block;
}
</style>
