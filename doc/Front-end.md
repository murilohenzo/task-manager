# TaskManagerFrontEnd

Este documento projeto foi desenvolvido com [Angular CLI](https://github.com/angular/angular-cli) versão 15.2.3.

## Configurando o navegador Chrome

1. **Abra o menu com o atalho `windows + r"**
2. **Rode o comando**:
   ```sh
   chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
   ```

## Rodando o U-Task Manager localmente

1. **Acesse a pasta task-manager-front-end**:
   ```sh
   git clone https://github.com/murilohenzo/task-manager
   cd task-manager-front-end
   ```
2. **Inicie o projeto em ambiente local**:
   ```sh
   ng s -o
   ```
3. **Acesse a aba aberta no navegador. O projeto estará disponível na url `http://localhost:4200/`.**

## Navegando no front-end

1. **Tela inicial**

   - Apresentação da aplicação;
   - Exibição do botão de criar conta;
   - Exibição do botão de realizar o login;
   - Tela inicial versão web:
     ![Tela inicial Web](/doc/assets/img-front-end-doc/image.png)
   - Tela inicial versão mobile:
     ![Tela inicial mobile](/doc/assets/img-front-end-doc/image-1.png)

2. **Tela de criação de usuário**

   - Apresentação do formulário de criação de usuário:
     ![Tela de criação de usuário web](/doc/assets/img-front-end-doc/image-2.png)
     ![Tela de criação de usuário mobile](/doc/assets/img-front-end-doc/image-3.png)
   - Validação de obrigatoriedade dos campos:
     ![Web](/doc/assets/img-front-end-doc/image-4.png)
     ![Mobile](/doc/assets/img-front-end-doc/image-5.png)
   - Regras de validação dos campos:
     ![Web](/doc/assets/img-front-end-doc/image-6.png)
     ![Mobile](/doc/assets/img-front-end-doc/image-7.png)
   - Formulário preenchido corretamente:
     ![Web](/doc/assets/img-front-end-doc/image-8.png)
     ![Mobile](/doc/assets/img-front-end-doc/image-9.png)
   - Feedback de criação de usuário realizada com sucesso:
     ![Criação de usuário realizada com sucesso web](/doc/assets/img-front-end-doc/image-13.png)
     ![Criação de usuário realizada com sucesso mobile](/doc/assets/img-front-end-doc/image-16.png)
   - Feedback de erro na requisição de criação de login:
     ![Web](/doc/assets/img-front-end-doc/image-14.png)
     ![Mobile](/doc/assets/img-front-end-doc/image-15.png)
   - Requisição realizada ao back-end:

     ![Request url](/doc/assets/img-front-end-doc/image-10.png)
     ![Request payload](/doc/assets/img-front-end-doc/image-11.png)
     ![Request response](/doc/assets/img-front-end-doc/image-12.png)

   - Serviços utilizados na tela:
     - `/user/signup` para criação do usuário.

3. **Tela de login**

   - Apresentação do formulário de login:
     ![Formulário de login web](/doc/assets/img-front-end-doc/image-17.png)
     ![Formulário de login mobile](/doc/assets/img-front-end-doc/image-18.png)
   - Validação de obrigatoriedade dos campos e botão "Acessar" desabilitado:
     ![Validação dos campos de login web](/doc/assets/img-front-end-doc/image-19.png)
     ![Validação dos campos de login mobile](/doc/assets/img-front-end-doc/image-20.png)
   - Formulário preenchido corretamente:
     ![Web](/doc/assets/img-front-end-doc/image-21.png)
     ![Mobile](/doc/assets/img-front-end-doc/image-22.png)
   - Página inicial após login realizado com sucesso e não apresentação dos botões de cadastro e login:
     ![Web](/doc/assets/img-front-end-doc/image-23.png)
     ![Mobile](/doc/assets/img-front-end-doc/image-24.png)
   - Requisição realizada para o login ao back-end:

     ![Request url](/doc/assets/img-front-end-doc/image-25.png)
     ![Request payload](/doc/assets/img-front-end-doc/image-26.png)
     ![Request response](/doc/assets/img-front-end-doc/image-27.png)

   - Serviços utilizados na tela:
     - `/login` para realização do login;
     - `/user/{{username}}` para obtenção dos dados do usuário para preenchimento na tela.

4. **Tela inicial de dashboard de tasks do usuário**

   - Apresentação da tela inicial de tasks:
     ![Tela inicial de tasks web](/doc/assets/img-front-end-doc/image-28.png)
     ![Tela inicial de tasks mobile](/doc/assets/img-front-end-doc/image-29.png)
   - Requisição reaizada ao back para exibição de tasks do usuário:

     ![Request url](/doc/assets/img-front-end-doc/image-30.png)
     ![Request response](/doc/assets/img-front-end-doc/image-31.png)

   - Serviços utilizados na tela:
     - `/tasks/{{userReferenceId}}`

5. **Criação de task**

   - Formulário de criação de task:
     ![Formulário de criação de task web](/doc/assets/img-front-end-doc/image-32.png)
     ![Formulário de criação de task mobile](/doc/assets/img-front-end-doc/image-33.png)
   - Formulário preenchido:
     ![Web](/doc/assets/img-front-end-doc/image-34.png)
     ![Mobile](/doc/assets/img-front-end-doc/image-35.png)
   - Criação de task realizada com sucesso:
     ![Web](/doc/assets/img-front-end-doc/image-39.png)
     ![Mobile](/doc/assets/img-front-end-doc/image-40.png)
   - Requisição realizada ao back-end para criação da task:

     ![Request URL](/doc/assets/img-front-end-doc/image-36.png)
     ![Request payload](/doc/assets/img-front-end-doc/image-37.png)
     ![Request response](/doc/assets/img-front-end-doc/image-38.png)

   - Serviços utilizados na tela:
     - `/tasks`

6. **Edição de task**

   - Os campos apresentados no card de task também são campos de um formulário. Portanto, são editáveis. Como exemplo de edição, editaremos o status da task, que atualmente está "não feito", conforme a seguinte /doc/assets/img-front-end-doc/imagem:
     ![Campo editável web](/doc/assets/img-front-end-doc/image-41.png)
     ![Campo editável mobile](/doc/assets/img-front-end-doc/image-42.png)
   - Campo de status após edição:
     ![Campo editado web](/doc/assets/img-front-end-doc/image-43.png)
     ![Campo editado mobile](/doc/assets/img-front-end-doc/image-44.png)
   - Requisição realizada ao back-end para edição da task:

     ![Request URL](/doc/assets/img-front-end-doc/image-45.png)
     ![Request payload](/doc/assets/img-front-end-doc/image-46.png)
     ![Request response](/doc/assets/img-front-end-doc/image-47.png)

   - Serviços utilizados na tela:
     - `/tasks/{{taskId}}`

7. **Remoção de task**

   - No card da task, há um botão de lixeira para realização da remoção da task selecionada.
   - Modal de confirmação da remoção da task:
     ![Modal de remoção web](/doc/assets/img-front-end-doc/image-48.png)
     ![Modal de remoção mobile](/doc/assets/img-front-end-doc/image-49.png)
   - Feedback de remoção da modal:
     ![Web](/doc/assets/img-front-end-doc/image-50.png)
   - Requisição realizada ao back-end para remoção da task:

     ![Request url](/doc/assets/img-front-end-doc/image-51.png)
     ![Request response](/doc/assets/img-front-end-doc/image-52.png)

   - Serviços utilizados na tela:
     - `/tasks/{{taskId}}`
