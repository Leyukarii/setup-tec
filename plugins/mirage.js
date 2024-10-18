import { createServer } from 'miragejs';

function loadUsersFromLocalStorage() {
  if (process.client) {
    let storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  }
  return [];
}

function saveUsersToLocalStorage(users) {
  if (process.client) {
    localStorage.setItem('users', JSON.stringify(users));
  }
}

export default function () {
  if (process.client) {
    createServer({
      routes() {
        this.namespace = 'api';

        let users = loadUsersFromLocalStorage();

        //listar usuarios
        this.get('/users', () => {
          return { users };
        });

        //add novo usuario
        this.post('/users', (schema, request) => {
          let newUser = JSON.parse(request.requestBody);
          console.log('Requisição para adicionar:', newUser);

          if (newUser.name && newUser.email) {
            newUser.id = Math.random().toString(36).substr(2, 9);
            users.push(newUser);
            saveUsersToLocalStorage(users);
            console.log('Novo usuário adicionado:', newUser);
            return newUser;
          } else {
            return new Response(
              JSON.stringify({ error: 'Nome e email são obrigatórios' }),
              { status: 400 },
            );
          }
        });

        //atualizar usuario
        this.put('/users/:id', (schema, request) => {
          let userId = request.params.id;
          let updatedUser = JSON.parse(request.requestBody);
          users = users.map((user) =>
            user.id === userId ? updatedUser : user,
          );
          saveUsersToLocalStorage(users);
          return updatedUser;
        });

        //excluir usuário
        this.delete('/users/:id', (schema, request) => {
          let userId = request.params.id;
          users = users.filter((user) => user.id !== userId);
          saveUsersToLocalStorage(users);
          return {};
        });
      },
    });
  }
}
