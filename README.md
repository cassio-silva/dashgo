# Data syncing

## Fake Api - Mirage Js e Faker

A tipagem `<Partial<T>>` indica que o model precisa conter todos os campos em `<T>`, mas não somente eles.

```javascript
  models: {
    user: Model.extend<Partial<User>>({})
  }
```

### Faker - Factories e seeds

As `factories` preparam modelos de dados fictícios para serem gerados de forma automática pelo faker, e as `seeds` criam uma lista com o modelo da factory recebido.

```javascript

  factories: {
    user: Factory.extend({
      name(i) {
        return `User ${i + 1}`;
      },
      email() {
        return faker.internet.email().toLocaleLowerCase();
      },
      createAt() {
        return faker.date.recent(10);
      }
    })
  },

  seeds(server) {
    // Recebe como parâmetro o nome da factory criada acima e a quantidade de registros desejados
    server.createList('user', 200); 
  },

```

## React Query

O React Query faz chamadas pra API e automaticamente armazena a resposta em cache, outra função interessante é a de revalidação _on focus_, ou seja sempre que a página receber foco, o React Query realiza uma nova chamada para atualizar os dados, esses recursos são customizáveis e podem ser desabilitados.

Exemplo:

```javascript
const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users');
```
