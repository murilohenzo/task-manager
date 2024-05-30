## Task Manager

Bem-vindo ao projeto de microserviços configurado com Docker Compose. Este guia irá ajudá-lo a configurar e iniciar todos os serviços necessários para rodar a aplicação.

### Visão Geral da Arquitetura

Este projeto implementa uma arquitetura de microsserviços para um gerenciador de tarefas (Task Manager). A arquitetura inclui os seguintes componentes:

- **Keycloak**: Servidor de autorização que gerencia autenticação e autorização.
- **Gateway**: É ponto de entrada principal da aplicação, direcionando solicitações dos clientes para os microsserviços correspondentes. Ele age como intermediário, agregando respostas e gerenciando autenticação, autorização e políticas de segurança. Essa função centralizada garante o controle seguro do tráfego na arquitetura de microsserviços.
- **Microserviço de Usuários (ms-user)**: Gerencia informações dos usuários.
- **Microserviço de Tarefas (ms-task)**: Gerencia informações das tarefas.

## Índice

1. [Registros de Decisão de Arquitetura ](./doc/ADRs.md)
2. [Infraestrutura como codigo](./doc/IAC.md)
3. [Configurando Keycloak](./doc/Keycloak.md)
4. [Configurando Gateway](./doc/Gateway.md)
