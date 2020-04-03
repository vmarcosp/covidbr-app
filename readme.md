<div style="display: flex;">
  <img src="https://api.netlify.com/api/v1/badges/186f33aa-e78e-4516-bbb0-4a44e08eeafc/deploy-status">
  <img src="./badges/badge-branches.svg">
  <img src="./badges/badge-functions.svg">
  <img src="./badges/badge-lines.svg">
  <img src="./badges/badge-statements.svg">
</div>

<div align="center">
  <br />
  <br />
  <br />
  

 <p align="center">
  <a href="https://covidbr.netlify.com/" target="blank">
    <img src="public/logo.svg" width="220" alt="COVIDBR Logo" />
  </a>
  </p>
  <br />
  <br />
  <br />
</div>

## Descrição
Aplicativo de tracking dos casos de corona vírus no Brasil.

## Projetos relacionados
Essa app é uma parte do projeto de tracking de informações sobre o COVID-19 no Brasil. Ele utiliza uma API GraphQL para buscar os dados sobre o novo corona vírus no Brasil
  - [COVIDBR API](https://github.com/vmarcosp/covidbr-api)

## Up and Running

### Configurações
Para rodar o projeto localmente, basta seguir os passos descritos abaixo:
- Clonar o repositório da [API](https://github.com/vmarcosp/covidbr-api) e seguir os passos para rodar a api localmente
descritos [aqui](https://github.com/vmarcosp/covidbr-api/blob/master/readme.md#configura%C3%A7%C3%B5es)
- Fazer uma cópia do arquivo `.env.sample` e renomear para `.env`
- Alterar o valor de API_URL para `http://localhost:<PORTA_CONFIGURADA>`
  - > Obs.: O valor `<PORTA_CONFIGURADA>` é a porta escolhida no arquivo de configuração `.env` da api, descrito [aqui](https://github.com/vmarcosp/covidbr-api/blob/master/readme.md#configura%C3%A7%C3%B5es)
 
### Rodando a aplicação
Basta abrir o terminal na pasta do projeto e rodar:
```sh
yarn dev # ou npm run dev
```

## Agradecimentos

Esse projeto só foi possível graças as pessoas citadas abaixo:
- [Wesley Cota](https://github.com/wcota) - Por fornecer os dados municipais e estaduais
- [Iago Laguna](https://github.com/iagolaguna) - Contribiu no desenvolvimento da API
- [Leonardo Habitzreuter](https://github.com/leonardohabitzreuter) - Contribiu no desenvolvimento da API
- [Rebecca Gonzalez](https://dribbble.com/rebeccagonzalez) - Desenvolveu todo design do aplicativo web
- Grupo de Tratamento de Dados do COVID-19 no Telegram - Que mantém os dados atualizados diariamente, independente da plataforma IVIS do Ministério da Saúde


## License

[WTFPL licensed](LICENSE).

