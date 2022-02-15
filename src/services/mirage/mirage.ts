import { createServer, Factory, Model } from 'miragejs';
import faker from "faker";

type User = {
  name: string;
  email: string;
  created_At: string;
} // A tipagem dos dados foi criado como colunas num banco de dados, por isso o camelCase não foi utilizado

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name(i) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        }
      })
    },

    seeds(server) {
      server.createList('user', 10);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750; // Define um delay para as chamadas no mirage
      
      this.get('/users'); // https://miragejs.com/docs/main-concepts/shorthands/
      this.post('/users');

      this.namespace = '';
      this.passthrough(); // https://miragejs.com/api/classes/server/
    }
  })

  return server;
}