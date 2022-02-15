# Data syncing

## SWR (Stale While Revalidate)


## Fake Api - Mirage Js

A tipagem `<Partial<T>>` indica que o model precisa conter todos os campos em `<T>`, mas não somente eles.

```javascript
  models: {
    user: Model.extend<Partial<User>>({})
  }
```

### Faker - Factories e seeds

As `factories` preparam modelos de dados fictícios para serem gerados de forma automática pelo faker, e as `seeds` criam uma lista com o modelo da factory recebido.

<details><summary>Exemplo</summary>

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
    server.createList('user', 200); // Recebe como parâmetro o nome da factory criada acima e a quantidade de registros desejados
  },

```

</details>

## React Query