# Conversor De Moedas

Uma aplicação para converter a moeda de valores monetários.

## Definição do problema

Precisamos de um sistema que faça a conversão de valores entre moedas. A ideia é partir de uma solução simples como algo baseado em linha de comando e evoluir até termos uma API com persistência em banco de dados.

Ao desenvolver sistemas, é importante considerar padrões de dados estabelecidos. Neste caso, um padrão importante é o [ISO-4217]([url](https://en.wikipedia.org/wiki/ISO_4217#Active_codes_(List_One))), que estabelece como representar moedas usando siglas de três caracteres.

## Etapas do projeto

O objetivo do conversor de moedas é ser um projeto que permita adquirir e aplicar novos conhecimentos gradualmente. A proposta é evoluir o projeto ao longo de cinco semanas. 

> Se possível, recomendamos investir um tempo para tentar aprender testes automatizados. Eles ajudarão ao longo de todas as etapas, validando cada incremento da solução e evitando alteração de comportamento sem previsibilidade.

> _"Acceptance tests are critical in an agile environment because they answer the questions, “How do I know when I am done?” for developers and “Did I get what I wanted?” for users."_
>
> Humble, Jez; Farley, David. Continuous Delivery (Addison-Wesley Signature Series (Fowler)) (p. 85). Kindle Edition.

### Semana 1: Resolver o problema de negócio fundamental
Nesta primeira etapa, a solução pode ser em linha de comando ou baseada em arquivo. Para fins de simplificação, podemos suportar uma quantidade limitada de moedas.

Requisitos: https://github.com/yrachid/currency-conversion/issues/1

### Semana 2: Utilizar Express para desenvolver um endpoint
Transformar o conversor desenvolvido na semana 1 em uma api web, expondo um endpoint que realize a mesma operação proposta na etapa anterior.

### Semana 3: Utilizar Postgres para desenvolver uma persistência de dados
Persistir as taxas de câmbio em uma tabela no Postgres. Talvez versionar as taxas de câmbio por data, permitindo conversões retroativas.

### Semana 4: Resolver o problema utilizando uma API externa
Consumir uma API real que forneça taxas de câmbio atualizadas e utilizar isso na resolução do problema. Sugestões:
- [Frankfurter](https://www.frankfurter.app/docs/)
- [Lista de outras APIs públicas de taxa de câmbio](https://github.com/public-apis/public-apis#currency-exchange)

### Semana 5: Dockerizar a aplicação
Dockerizar a aplicação permitirá entender as vantagens trazidas pelos containers para os projetos de software modernos. Também facilitará o entendimento do papel dos containers na infraestrutura da Creditas.


## Material de Apoio

* [Como lidar com valores monetários em Javascript (ou em qualquer outra linguagem)]([url](https://www-honeybadger-io.translate.goog/blog/currency-money-calculations-in-javascript/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=en-US&_x_tr_pto=wapp)https://www-honeybadger-io.translate.goog/blog/currency-money-calculations-in-javascript/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=en-US&_x_tr_pto=wapp)
