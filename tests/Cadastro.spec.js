import { mount } from '@vue/test-utils';
import Cadastro from '../components/Cadastro.vue';
import { createPinia, setActivePinia } from 'pinia';
import axios from 'axios';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useUserStore } from '~/stores/useUserStore';

vi.mock('axios');

describe('Cadastro.vue', () => {
    let pinia, userStore;

  beforeEach(() => {
    pinia = createPinia();
    setActivePinia(pinia);

    userStore = useUserStore();

    axios.get.mockResolvedValue({
      data: {
        users: [
          { id: 1, name: 'User One', email: 'userone@example.com' },
          { id: 2, name: 'User Two', email: 'usertwo@example.com' },
        ],
      },
    });

    vi.spyOn(userStore, 'addUser').mockImplementation(() => Promise.resolve());
    vi.spyOn(userStore, 'updateUser').mockImplementation(() => Promise.resolve());
  });

  it('Renderiza corretamente', () => {
    const wrapper = mount(Cadastro, {
      global: {
        plugins: [pinia],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('Exibe o título correto', () => {
    const wrapper = mount(Cadastro, {
      global: {
        plugins: [pinia],
      },
    });
    const title = wrapper.find('h1');
    expect(title.text()).toContain('Cadastro de Usuário');
  });

  it('Adiciona um novo usuário ao enviar o formulário', async () => {
    const wrapper = mount(Cadastro, {
      global: {
        plugins: [pinia],
      },
    });
  
    await wrapper.find('input[name="name"]').setValue('Letícia Yamaguti');
    await wrapper.find('input[name="email"]').setValue('leticia@email.com');
    await wrapper.find('input[name="password"]').setValue('senha');
    await wrapper.find('form').trigger('submit.prevent');
  
    expect(userStore.addUser).toHaveBeenCalled();
  });

  it('Atualiza um usuário existente', async () => {
    userStore.currentUser = { id: 1, name: 'Letícia Yamaguti', email: 'leticia@email.com', password: 'senha' };
  
    const wrapper = mount(Cadastro, {
      global: {
        plugins: [pinia],
      },
    });

    await wrapper.find('input[name="name"]').setValue('Letícia Yamaguti');
    await wrapper.find('input[name="email"]').setValue('leticia@email.com');
    await wrapper.find('form').trigger('submit.prevent');

    expect(userStore.updateUser).toHaveBeenCalled();
  });
});