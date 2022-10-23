languages and framework in tis project:
PostgreSQL, Node js, Angular.
Technologies: data edo, sequlize, postman,

the archtecture in that project from own staty according best practices in google :

server side:
according design pattern 3 layer model 
Config  Configuration files and db config)
Dal ———
        SequlizeDal- (query DB)
        Sequlize models
        Sequlize migration
        Sequlize seeders
Service  (Buisness logic)
API ———
        Controller
        Routes
App          (Express- middleware’s(cors…))
Server.      (Create the server)
Env (environment variables)

Api (in microservices_


crud opertion run by postman

client side:
