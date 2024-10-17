<template>
  <section class="cadastro">
    <h1>Cadastre-se!</h1>
    <form>
      <label>Nome Completo</label>
      <input type="text" name="nome" id="nome">
      <label>E-mail</label>
      <input type="email" name="email" id="email">
      <label>Senha</label>
      <input type="password" name="senha" id="senha">
      <button class="btn">Cadastrar</button>
    </form>
  </section>
</template>

<script>
export default{
  name: "Cadastro"

};

</script>

<style scoped>
.cadastro{
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

form{
  display: grid;
}

.btn{
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

label{
  margin-bottom: 5px;
}
</style>