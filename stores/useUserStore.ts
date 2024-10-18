import { defineStore } from "pinia";
import axios from 'axios';

interface User{
  id: string; 
  name: string;
  email: string;
  password: string;
}

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
    currentUser: {
      id: '',
      name: '',
      email: '',
      password: '',
    } as User,
  }),

  actions:{
    async fetchUsers(){
      const response = await axios.get('api/users');
      this.users = response.data.users;
    },

    async addUser(){
      try {
        const response = await axios.post('/api/users', this.currentUser);
        console.log('Usuário adicionado com sucesso:', response.data); // Log para depuração
        this.users.push(response.data); // Adiciona o usuário à lista de usuários
        this.clearForm(); // Limpa o formulário após o cadastro
      } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
      }
    },

    async editUser(userId: string){
      const user = this.users.find(u => u.id === userId);
      if (user) {
        this.currentUser = { ...user };
      }
    },

    async updateUser(){
      const response = await axios.put(`/api/users/${this.currentUser.id}`, this.currentUser);
      const index = this.users.findIndex(u => u.id === this.currentUser.id);
      if (index !== -1) {
        this.users[index] = response.data;
      }
        this.clearForm();
    },

    async deleteUser(userId: string){
      await axios.delete(`/api/users/${userId}`);
      this.users = this.users.filter(u => u.id !== userId);
    },

    clearForm(){
      this.currentUser = {
        id: '',
        name: '',
        email: '',
        password: '',
      };
    },
  },
});