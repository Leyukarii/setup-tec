<template>
  <section class="cadastro">
    <div class="container">
      <h1>{{ userStore.currentUser.id ? "Editar Usuário" : "Cadastre-se!" }}</h1>
      <form @submit.prevent="userStore.currentUser.id ? updateUser() : addUser()">
        <label>Nome Completo</label>
        <input type="text" v-model="userStore.currentUser.name" name="name" id="name">

        <label>E-mail</label>
        <input type="email" v-model="userStore.currentUser.email" name="email" id="email">

        <label>Senha</label>
        <input type="password" v-model="userStore.currentUser.password" name="password" id="password">
        <button class="btn">{{ userStore.currentUser.id ? "Atualizar" : "Cadastrar" }}</button>
      </form>

      <div v-if="userStore.users.length">
        <h1>Usuários Cadastrados</h1>
        <ul>
          <li v-for="user in userStore.users" :key="user.id" class="user-item">
            <div class="user-info">
              <span>{{ user.name }} - {{ user.email }}</span>
              <div class="actions">
                <button class="btn_2" @click="editUser(user.id)">Editar</button>
                <button class="btn_2" @click="deleteUser(user.id)">Deletar</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useUserStore } from '~/stores/useUserStore';

const userStore = useUserStore();

const addUser = () => {
  userStore.addUser();
};

const updateUser = () => {
  userStore.updateUser();
};

const editUser = (userId) => {
  userStore.editUser(userId);
};

const deleteUser = (userId) => {
  userStore.deleteUser(userId);
};

onMounted(() => {
  userStore.fetchUsers();
});

</script>

<style scoped>
.cadastro{
  display: flex;
  padding: 150px;
}

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

form{
  display: grid;
  gap: 15px;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.btn{
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

h1{
  font-size: 2rem;
  margin-bottom: 20px;
  margin-top: 30px;
  text-align: center;
}

ul{
  list-style-type: none;
  padding: 0;
}

li{
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  color: #626569;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.actions {
  display: flex;
  gap: 10px;
}
.btn_2 {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #006eb6;
  color: white;
  cursor: pointer;
}

.btn_2:hover {
  background-color: #008edc;
}
</style>