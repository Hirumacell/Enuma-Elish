# Intro 
Testing 2 apiin nest with a rabbitmq and one local database 

# Cmd

```bash
docker run -d --hostname rabbitmq --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

- http://localhost:15672
- log 
    - guest
    - guest

Run with :

```bash
npm run start:dev
```