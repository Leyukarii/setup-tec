import { defineStore } from "pinia";
import axios from 'axios';

interface User {
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

  actions: {
    async fetchUsers() {
      try {
        const response = await axios.get('api/users');
        this.users = response.data.users;
        console.log('Usuários carregados:', this.users);
      } catch (error) {
        console.error('Erro ao carregar usuários:', error);
      }
    },

    async addUser() {
      try {
        const response = await axios.post('/api/users', this.currentUser);
        console.log('Usuário adicionado com sucesso:', response.data);
        this.users.push(response.data); 
        this.clearForm(); 
      } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
      }
    },

    async editUser(userId: string) {
      const user = this.users.find((u: User) => u.id === userId); 
      if (user) {
        this.currentUser = { ...user };
      } else {
        console.error('Usuário não encontrado');
      }
    },

    async updateUser() {
      const response = await axios.put(`/api/users/${this.currentUser.id}`, this.currentUser);
      const index = this.users.findIndex((u: User) => u.id === this.currentUser.id); 
      if (index !== -1) {
        this.users[index] = response.data;
      }
      this.clearForm();
    },

    async deleteUser(userId: string) {
      await axios.delete(`/api/users/${userId}`);
      this.users = this.users.filter((u: User) => u.id !== userId); 
    },

    clearForm() {
      this.currentUser = {
        id: '',
        name: '',
        email: '',
        password: '',
      };
    }
  },
});
