# IAC (Infra-As-Code)

Este projeto configura um ambiente de microserviços usando Docker Compose. Ele inclui serviços como Traefik, Keycloak, RabbitMQ e bancos de dados PostgreSQL e MySQL.

## Índice

1. [Página Inicial](#página-inicial)
2. [Requisitos](#requisitos)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Passos para Iniciar a Aplicação](#passos-para-iniciar-a-aplicação)
5. [Acessando os Serviços](#acessando-os-serviços)
6. [Configurando Keycloak](#configurando-keycloak)
7. [Inicializando o Serviço de Gateway](#inicializando-o-serviço-de-gateway)
8. [Serviços Incluídos](#serviços-incluídos)
9. [Volumes](#volumes)
10. [Notas](#notas)
11. [Troubleshooting](#troubleshooting)
12. [Licença](#licença)

## Página Inicial

Bem-vindo ao projeto de microserviços configurado com Docker Compose. Este guia irá ajudá-lo a configurar e iniciar todos os serviços necessários para rodar a aplicação.

Este fluxo de Docker Compose representa a infraestrutura como código (IaC), permitindo a definição e provisionamento da infraestrutura de maneira declarativa e automatizada.

## Requisitos

- Docker: [Instalar Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Instalar Docker Compose](https://docs.docker.com/compose/install/)

## Estrutura do Projeto

- `docker-compose.yml`: Arquivo de configuração para os serviços Docker.
- `prometheus/`: Diretório para configuração do Prometheus (comentado por padrão).
- `custom-storage-provider/`: Diretório contendo o JAR customizado para o Keycloak.

## Passos para Iniciar a Aplicação

1. **Clone o repositório**:
   ```sh
   git clone https://github.com/murilohenzo/task-manager
   cd task-manager
   ```

2. **Inicie os serviços**:
   ```sh
   docker-compose up -d
   ```

## Acessando os Serviços

- Traefik Dashboard: [http://localhost:8080](http://localhost:8080)
- Keycloak: [http://keycloak.localhost](http://keycloak.localhost)
- RabbitMQ: [http://rabbitmq.localhost](http://rabbitmq.localhost)

## Configurando Keycloak

1. Acesse o Keycloak em [http://keycloak.localhost:8081](http://keycloak.localhost:8081).
2. Use as credenciais padrão:
   - **Usuário**: `admin`
   - **Senha**: `admin`
3. Configure seu realm e clientes conforme necessário.

## Inicializando o Serviço de Gateway

1. Após a configuração inicial dos outros serviços, descomente o serviço `gateway` no `docker-compose.yml`.
2. Inicie o serviço `gateway`:
   ```sh
   docker-compose up -d gateway
   ```

## Serviços Incluídos

- **Traefik**: Proxy reverso e roteador de tráfego.
  - Portas: `80`, `443`, `8080`, `15672`
- **Keycloak**: Servidor de identidade e acesso.
  - Porta: `8081`
- **RabbitMQ**: Mensageria para comunicação entre microserviços.
  - Porta: `5672`
- **PostgreSQL** (keycloak_db): Banco de dados para Keycloak.
  - Porta: `5432`
- **MySQL** (users_db e tasks_db): Bancos de dados para armazenamento de usuários e tarefas.
  - users_db Porta: `3306`
  - tasks_db Porta: `3307`

## Volumes

- `postgres_data`: Armazena dados do PostgreSQL.
- `mysql_data`: Armazena dados dos bancos de dados MySQL.

## Notas

- Certifique-se de que as portas necessárias (80, 443, 8080, 15672, 5432, 3306, 3307) estão livres em seu sistema.
- As credenciais padrão para os bancos de dados e Keycloak estão configuradas no `docker-compose.yml`. Altere-as conforme necessário para produção.

## Troubleshooting

- Verifique os logs dos contêineres para resolver problemas:
  ```sh
  docker-compose logs -f <nome-do-servico>
  ```

- Reinicie um serviço específico se necessário:
  ```sh
  docker-compose restart <nome-do-servico>
  ```

## Licença

Este projeto está licenciado sob a licença Apache. Consulte o arquivo `LICENSE` para obter mais informações.
