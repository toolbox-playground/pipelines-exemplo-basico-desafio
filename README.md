# Fluxo de Trabalho do GitHub Actions

![Toolbox Playground](img/toolbox-playground.png)

## O que é o Fluxo de Trabalho do GitHub Actions

Um repositório com um exemplo de arquivo de fluxo de trabalho a ser usado no GitHub Actions.

O arquivo [.github/workflows/main.yml](.github/workflows/main.yml) é um arquivo de configuração usado no GitHub Actions. Ele define o processo de integração contínua para um repositório no GitHub.

O GitHub Actions é uma ferramenta de integração e entrega contínua (CI/CD) fornecida pelo GitHub. Ele permite automatizar a compilação, teste e implantação de um aplicativo sempre que houver uma alteração no repositório.

O arquivo [.github/workflows/main.yml](.github/workflows/main.yml) contém a definição de estágios e jobs que serão executados durante o processo de integração contínua. Cada estágio representa uma etapa do processo, como compilação, teste ou implantação, e cada job representa uma tarefa específica a ser executada dentro desse estágio.

No arquivo, você pode definir os jobs necessários para compilar o aplicativo, como instalar dependências, compilar o código-fonte e executar testes. Você também pode configurar a implantação do aplicativo em um ambiente de produção ou teste.

O arquivo [.github/workflows/main.yml](.github/workflows/main.yml) é escrito em YAML, uma linguagem de marcação fácil de ler e escrever. Ele permite definir as etapas e tarefas de maneira clara e organizada.

Ao adicionar ou modificar o arquivo [.github/workflows/main.yml](.github/workflows/main.yml) em um repositório do GitHub, o GitHub Actions usará essa configuração para automatizar o processo de integração contínua, executando os jobs definidos no arquivo sempre que houver uma alteração no repositório. Isso ajuda a garantir que o código seja compilado e testado de forma consistente e confiável.

Vamos analisar cada linha de código no arquivo [.github/workflows/main.yml](.github/workflows/main.yml) fornecido e entender o que ela faz:

- `name`: O nome do fluxo de trabalho. Isso é exibido na interface do GitHub Actions.

- `on`: O evento que aciona o fluxo de trabalho. Neste caso, está definido como `push`, o que significa que o fluxo de trabalho será acionado sempre que houver um push no repositório.

- `paths-ignore`: Define os arquivos que devem ser ignorados pelo fluxo de trabalho. No exemplo fornecido, os arquivos README.md e .gitignore são especificados para serem ignorados. Isso significa que, quando ocorrer um push no repositório, o fluxo de trabalho não será acionado se apenas esses arquivos forem modificados.

- `jobs`: Cada job é definido como uma seção separada no arquivo YAML. Os jobs são executados em paralelo dentro de cada estágio.

- Job `build`: Este job é responsável por compilar o projeto. Ele usa o `ubuntu-latest` como ambiente virtual para executar os comandos.

    `runs-on`: O ambiente virtual no qual o job será executado. Neste caso, está definido como `ubuntu-latest`.

    Os comandos executados neste job são:

    `cd app`: Navegar para o diretório "app".
    `npm install`: Instalar as dependências do projeto usando o npm.

- Job `test`: Este job é responsável por executar os testes do projeto. Semelhante ao job `build`, ele usa o `ubuntu-latest` como ambiente virtual.

    `runs-on`: O ambiente virtual no qual o job será executado. Neste caso, está definido como `ubuntu-latest`.

    Os comandos executados neste job são:

    `cd app`: Navegar para o diretório "app".
    `npm install`: Instalar as dependências do projeto usando o npm.

    `cd app`: Navegar para o diretório "app".
    `npm test`: Executar os testes do projeto usando o npm.

O arquivo `main.yml` deve ser sempre salvo na pasta `.github\workflows`, conforme está neste repositório.

Essas são as explicações para cada linha do código YAML fornecido. Cada linha desempenha um papel específico na definição do processo de integração contínua e na execução dos jobs necessários para compilar e testar o aplicativo.


## SonarCloud

Criar conta no sonar cloud e logar no github actions, desativar a analise automatica

Para utilizar o SonarCloud, é necessário seguir alguns passos específicos que envolvem a criação e configuração do projeto. Aqui está um resumo do processo:

1. **Criar uma Conta no SonarCloud:**
   - Se você ainda não possui uma conta no SonarCloud, registre-se em [sonarcloud.io](https://sonarcloud.io/).

2. **Criar um Novo Projeto:**
   - Depois de fazer login, vá para a seção de "Projects" e clique em "Create new project".
   - Você pode importar o projeto a partir de um repositório do GitHub, Bitbucket, GitLab ou Azure DevOps.

3. **Configurar o Projeto:**
   - Escolha a organização e o repositório que deseja analisar.
   - Siga as instruções para configurar o projeto, o que pode incluir definir permissões e opções de análise.

4. **Gerar o Token de Análise:**
   - Durante a configuração, você precisará gerar um token de análise que será usado para autenticar o scanner do SonarCloud.

5. **Configurar o Scanner SonarCloud:**
   - O SonarCloud suporta diferentes linguagens de programação e ferramentas de construção (como Maven, Gradle, npm, etc.).
   - Siga as instruções específicas fornecidas para sua ferramenta de construção. Geralmente, isso envolve adicionar o plugin do SonarScanner ao seu build script e configurá-lo com o token de análise gerado anteriormente.

6. **Executar a Análise:**
   - Execute o SonarScanner como parte do seu processo de build.
   - Por exemplo, se você estiver usando Maven, você pode executar `mvn sonar:sonar` no diretório do seu projeto.

7. **Verificar os Resultados no SonarCloud:**
   - Após a análise ser concluída, você pode verificar os resultados no dashboard do SonarCloud. Lá, você encontrará informações sobre qualidade de código, vulnerabilidades, bugs, code smells, cobertura de testes, entre outros.

A sequência de criação do projeto primeiro é necessária porque o SonarCloud precisa das configurações do projeto para executar a análise de forma correta e segura. Isso inclui configurar permissões, definir padrões de qualidade e gerar tokens de autenticação.

## Snyk

https://github.com/snyk/actions/blob/master/node/README.md

Para criar uma conta no Snyk e gerar um token de autenticação, siga os passos abaixo:

### 1. Criar uma Conta no Snyk

1. **Acesse o site do Snyk**:
   Vá para [Snyk](https://snyk.io/).

2. **Inscrever-se**:
   Clique em "Sign Up" no canto superior direito. Você pode se inscrever utilizando sua conta do GitHub, Google, ou com um endereço de e-mail.

3. **Completar o Registro**:
   Siga as instruções para completar o registro. Se você usar GitHub ou Google para se inscrever, você precisará autorizar o Snyk a acessar sua conta.

### 2. Gerar um Token de Autenticação

1. **Acesse seu Painel do Snyk**:
   Após se registrar e fazer login, você será redirecionado para o painel do Snyk.

2. **Acessar Configurações de API**:
   Clique em seu nome de usuário ou avatar no canto superior direito e selecione "Account settings" (Configurações da conta).

3. **Navegar para Configurações de API**:
   No painel de configurações, clique em "API tokens" na seção lateral esquerda.

4. **Gerar um Novo Token**:
   Clique no botão "Generate new API token". Um novo token será gerado e exibido na tela.

5. **Copiar o Token**:
   Copie o token gerado. Este é o token que você usará para configurar o GitHub Actions.

### 3. Adicionar o Token aos Segredos do GitHub

1. **Acessar seu Repositório no GitHub**:
   Vá para o repositório onde você deseja configurar o Snyk.

2. **Ir para Configurações**:
   Clique em "Settings" (Configurações) no menu superior do repositório.

3. **Acessar Segredos e Variáveis**:
   No menu lateral esquerdo, clique em "Secrets and variables" e depois em "Actions".

4. **Adicionar um Novo Segredo**:
   Clique em "New repository secret".

5. **Nomear e Colar o Token**:
   - Nomeie o segredo como `SNYK_TOKEN`.
   - Cole o token que você copiou do Snyk no campo "Value".

6. **Salvar o Segredo**:
   Clique em "Add secret" para salvar.

## Deploy na Cloud Run usando Workload Identifier Federation

Criando o Workload Identifier Federation. Fonte [https://cloud.google.com/blog/products/identity-security/secure-your-use-of-third-party-tools-with-identity-federation](https://cloud.google.com/blog/products/identity-security/secure-your-use-of-third-party-tools-with-identity-federation)

gcloud iam workload-identity-pools create github-toolbox-actions-pool \
--location="global" \
--description="The pool to authenticate GitHub actions." \
--display-name="GitHub Actions Pool"

gcloud iam workload-identity-pools providers create-oidc github-actions-oidc \
--workload-identity-pool="github-toolbox-actions-pool" \
--issuer-uri="https://token.actions.githubusercontent.com/" \
--attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository,attribute.repository_owner=assertion.repository_owner,attribute.branch=assertion.sub.extract('/heads/{branch}/')" \
--location=global \
--attribute-condition="assertion.repository_owner=='toolbox-playground'"

gcloud iam service-accounts add-iam-policy-binding github-actions@toolbox-sandbox-388523.iam.gserviceaccount.com \
  --role="roles/iam.workloadIdentityUser" \
--member="principalSet://iam.googleapis.com/projects/794011605223/locations/global/workloadIdentityPools/github-toolbox-actions-pool/attribute.repository/toolbox-playground/pipelines-exemplo-basico-desafio"

Adicionar no Repository Secret
WORKLOAD_IDENTIFIER_PROVIDER = projects/794011605223/locations/global/workloadIdentityPools/github-toolbox-actions-pool/providers/github-actions-oidc
SERVICE_ACCOUNT = github-actions@toolbox-sandbox-388523.iam.gserviceaccount.com

Action usada [https://github.com/google-github-actions/deploy-cloudrun/tree/v2/](https://github.com/google-github-actions/deploy-cloudrun/tree/v2/)

### Allowing unauthenticated requests

A Cloud Run product recommendation is that CI/CD systems not set or change settings for allowing unauthenticated invocations. New deployments are automatically private services, while deploying a revision of a public (unauthenticated) service will preserve the IAM setting of public (unauthenticated). For more information, see [Controlling access on an individual service.](https://cloud.google.com/run/docs/securing/managing-access)