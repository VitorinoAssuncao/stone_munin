# Desafio da Empresa Pública, em parceria com a empresa ProWay.

Esse pequeno sistema foi desenvolvido com o objetivo de permitir que pessoas cadastradas possam lançar as pontuações de suas partidas de basquete, e ao final tenham acesso a uma listagem conforme o rank das partidas cadastradas.

Para tal foram selecionadas as seguintes técnologias:

* [Javascript-React](https://pt-br.reactjs.org) Como uma das principais linguagens no ramo do frontend, JS traz uma grande performance, assim como bibliotecas e frameworks renomados e modernos, neste caso foi selecionado a biblioteca React com o objetivo de trazer seu dinamismo e modularidade ao projeto.

* [CSS - Bootstrap/Reactstrap](https://getbootstrap.com) Alinhando belas e dinâmicas interfaces, com uma programação ágil e agrádavel, o Bootstrap (e o componente Reactstrap) foram escolhidos para trazer uma identidade visual agradável e elegante ao design da pagina em questão.

* [Deploy - Heroku](heroku.com) Atualmente esse projeto se encontra para acesso na rede através do endereço abaixo:
 ```cddmonitor.herokuapp.com```

Como foi utilizada a opção de conta de desenvolvimento por Hobby (gratuita), isso faz com que possa ter algumas limitações (até 20 acessos simultaneos, 600 Minutos de conexão por dia).

## Requisitos para rodar o projeto de forma Local:

Para rodar o projeto de forma local é necessário se possuir o node.js instalado na maquina.

Como demais dependências são tratadas diretamente através de requisições online (como via cdd para os arquivos referentes ao bootstrap e icones, e a api de backend que está hospedada no heroku), apenas a estrutura necessaria para se rodar uma aplicação react é necessária.

Para se baixar o arquivo diretamente do git pode se utilizar o comando abaixo:

 ``` git clone https://github.com/VitorinoAssuncao/stone_munin.git ```

GitHub CLI
 
 ``` gh repo clone VitorinoAssuncao/stone_munin ```

Ou simplesmente acessando  a pagina e selecionando a opção de preferencia para download.

### Instalando os requisitos e acessando o ambiente virtual:


Para se instalar os componentes necessários e iniciar a aplicação basta realizar o comando abaixo a partir de um terminal dentro do projeto baixado:

 ```npm start```
