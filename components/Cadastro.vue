<template>
  <section class="flex justify-center py-16">
    <div class="w-full max-w-lg">
      <h1 class="text-2xl font-bold mb-6 text-center">{{ userStore.currentUser.id ? "Editar Usuário" : "Cadastro de Usuário" }}</h1>
      <form @submit.prevent="userStore.currentUser.id ? updateUser() : addUser()"
        class="grid gap-4 bg-white p-8 rounded-lg shadow-lg">
        <label class="block text-gray-600">Nome Completo</label>
        <input type="text" v-model="userStore.currentUser.name" class="w-full p-4 rounded-lg border border-gray-300 shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        name="name" id="name">

        <label class="block text-gray-600">E-mail</label>
        <input type="email" v-model="userStore.currentUser.email" class="w-full p-4 rounded-lg border border-gray-300 shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none" 
        name="email" id="email">

        <label class="block text-gray-600">Senha</label>
        <input type="password" v-model="userStore.currentUser.password" class="w-full p-4 rounded-lg border border-gray-300 shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none" 
        name="password" id="password">
        <button class="w-64 mx-auto bg-blue-700 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-all shadow-md">
          {{ userStore.currentUser.id ? "Atualizar" : "Cadastrar" }}
        </button>
      </form>
      <div class="flex justify-center">
        <button class="w-64 mx-auto bg-blue-700 text-white py-3 px-4 rounded-lg mt-8 hover:bg-blue-600 transition-all shadow-md" @click="toggleUserList">Listar Usuários</button>
      </div>
       <div v-if="showUsers && userStore.users.length" class="mt-8">
        <h1 class="text-2xl font-bold mb-4 text-center">Usuários Cadastrados</h1>        
        <ul class="space-y-4">
          <li v-for="user in userStore.users" :key="user.id" class="bg-white p-4 rounded-lg shadow-md">
            <div class="flex justify-between items-center">
              <span>{{ user.name }} - {{ user.email }}</span>
              <div class="flex gap-4">
                <button class="bg-blue-700 text-white py-1 px-4 rounded-lg hover:bg-blue-600 transition-all" @click="editUser(user.id)">Editar</button>
                <button class="bg-blue-700 text-white py-1 px-4 rounded-lg hover:bg-blue-600 transition-all" @click="deleteUser(user.id)">Deletar</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '~/stores/useUserStore';

const userStore = useUserStore();
const showUsers = ref(false); 

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

const toggleUserList = () => {
  if (!showUsers.value) {
    userStore.fetchUsers();
  }
  showUsers.value = !showUsers.value;
};

</script>

<style>
</style>