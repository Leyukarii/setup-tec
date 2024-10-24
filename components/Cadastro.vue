<template>
  <section class="flex flex-col py-8 md:py-36">
    <div class="flex flex-col items-center w-full">
      <h1 class="text-3xl md:text-4xl mb-4 text-center text-[#044c8c]">
        {{ userStore.currentUser.id ? "Edição de Usuário" : "Cadastro de Usuário" }}
      </h1>
      <form class="grid gap-4 bg-white p-8 rounded-lg shadow-md w-full max-w-sm mx-auto" 
            @submit.prevent="userStore.currentUser.id ? updateUser() : addUser()">
        <label class="mb-1 text-[#626569]">Nome Completo</label>
        <input class="rounded-md border p-4 shadow-md transition-all duration-300 text-base font-sans mb-4 text-[#626569] 
              focus:outline-none focus:border-[#008edc] focus:shadow-lg hover:shadow-lg hover:border-[#008edc]"
               type="text" v-model="userStore.currentUser.name" name="name" id="name">

        <label class="mb-1 text-[#626569]">E-mail</label>
        <input class="rounded-md border p-4 shadow-md transition-all duration-300 text-base font-sans mb-4 text-[#626569] 
              focus:outline-none focus:border-[#008edc] focus:shadow-lg hover:shadow-lg hover:border-[#008edc]"
               type="email" v-model="userStore.currentUser.email" name="email" id="email">

        <label class="mb-1 text-[#626569]">Senha</label>
        <input class="rounded-md border p-4 shadow-md transition-all duration-300 text-base font-sans mb-4 text-[#626569] 
        focus:outline-none focus:border-[#008edc] focus:shadow-lg hover:shadow-lg hover:border-[#008edc]"
               type="password" v-model="userStore.currentUser.password" name="password" id="password">

        <button class="w-full max-w-xs mx-auto block px-8 py-2 bg-[#006eb6] rounded-md text-white text-center text-base shadow-lg transition-all duration-300 hover:bg-[#008edc] hover:scale-110 focus:outline-none">
          {{ userStore.currentUser.id ? "Atualizar" : "Cadastrar" }}
        </button>
      </form>

      <button class="w-full max-w-xs mx-auto block px-8 py-2 bg-[#006eb6] rounded-md text-white text-center text-base shadow-lg transition-all duration-300 hover:bg-[#008edc] hover:scale-110 focus:outline-none font-sans cursor-pointer mt-5" 
              @click="toggleUserList">
        Listar Usuários
      </button>

      <div v-if="showUserList && userStore.users.length" class="w-full max-w-md mx-auto">
        <h1 class="text-3xl mb-4 mt-5 text-center text-[#044c8c]">Usuários Cadastrados</h1>
        <ul class="list-none p-0 m-0 text-[#044c8c]"> 
          <li class="bg-white p-2 mb-2 text-[#626569] rounded-lg shadow-md"
              v-for="user in userStore.users" :key="user.id">
            <div class="flex justify-between items-center w-full">
              <span>{{ user.name }} - {{ user.email }}</span>
              <div class="flex gap-2">
                <button class="ml-2 px-2.5 py-1.5 border-none rounded-md bg-[#006eb6] text-white cursor-pointer hover:bg-[#008edc]" @click="editUser(user.id)">
                  Editar
                </button>
                <button class="ml-2 px-2.5 py-1.5 border-none rounded-md bg-[#006eb6] text-white cursor-pointer hover:bg-[#008edc]" @click="deleteUser(user.id)">
                  Deletar
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '~/stores/useUserStore';

const userStore = useUserStore();
const showUserList = ref(false);

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
  showUserList.value = !showUserList.value;
};

onMounted(() => {
  userStore.fetchUsers();
});
</script>