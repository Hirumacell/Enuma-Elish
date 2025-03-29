# Intro 
Testing 2 api in nest with a rabbitmq and one local database 

# Cmd Docker

## Cmd
lancer le docker
```bash
docker-compose up --build
```

tout couper 
```bash
docker-compose down -v
```

## Modifs

main.ts / user.module.ts 
- urls: ['amqp://rabbitmq:5672'], si Docker
- urls: ['amqp://localhost:5672'], si local

app.module.ts (pour les deux)
- host: 'postgres', si Docker
- host: 'localhost', si local

# Cmd [local]

```bash
<docker run -d --hostname rabbitmq --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management>
```

- http://localhost:15672
- log 
    - guest
    - guest

Run with :

```bash
npm run start:dev
```

# JSON Objects 

## http://localhost:3000/users/with-animal - POST

```json
{
  "nom": "Hiru",
  "email": "testing.rabbit@mq.com",
  "animal": {
    "nom": "malosse",
    "age": 25,
    "espece": "doggo"
  }
}
```
