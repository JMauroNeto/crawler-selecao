# crawler-selecao  

Projeto desenvolvido para seleção de uma empresa. Consiste em um crawler simples em TypeScript, que pega as informações de uma API a partir de uma url passada na chamada do arquivo index.ts

## Configuração
Colocar no arquivo ".env" as variáveis de ambiente necessárias para o funcionamento, são elas:
- TOKEN: String que consiste em "Bearer jwt_token"
- API_URL: URL da api do site em questão

## Uso:
- Abrir o terminal
- Clonar o repositório com o comando `git clone https://github.com/JMauroNeto/crawler-selecao.git`
- Ir para a pasta "crawler-selecao": `cd crawler-selecao`
- Instalar os módulos do projeto: `npm i`
- Rodar o projeto com: `npm start {URL_DO_PRODUTO}`
