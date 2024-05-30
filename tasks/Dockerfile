# Usar a versão mais recente do Node.js
FROM node:20-alpine as builder

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /usr/app

# Copiar package.json e package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Instalar dependências do projeto
RUN npm install

# Copiar o restante do código fonte
COPY . .

# Atualizar pacotes e adicionar certificados
RUN apk update && \
    apk add --no-cache ca-certificates curl openssl && \
    update-ca-certificates

# Expor a porta que a aplicação irá rodar
EXPOSE 3005

# Comando para iniciar a aplicação
CMD ["./wait-for.sh", "tasks_db", "3306", "npm", "start"]
