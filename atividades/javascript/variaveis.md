![](https://www.luiztools.com.br/wp-content/uploads/2018/09/javascript.png)
# <span style="color: #FFF700"> Guia de fundamentos em JavaScript </span>

### Variáveis :astonished:
Uma variável é um espaço na memória do computador reservada para guardar temporariamente um determinado valor.

#### Tipos de Variáveis :scream:
Em JavaScript, temos três tipos de variáveis: var, let e const.

![imagem variaveis](https://miro.medium.com/max/724/1*sdWPymqzx1Hr6hXp1FfN_Q.png)

###### <span style="color:blue">:star2: Var  </span>

Foi o primeiro tipo de variável do javascript. As var são acessíveis de qualquer parte do arquivo. Uma vez declarada e não iniciada seu valor passa a ser por padrão _undefined_.

```javascript
var num = 1
```
Deve-se tomar muito cuidado ao utilizar variáveis como var , pois, seus valores podem ser reatribuidos a qualquer momento dentro do script, gerando erros inesperados para programadores e usuários.
___
###### <span style="color:blue">:collision: Let  </span>
O tipo de variável let foi adicionada no ECMAScript 6 para disponibilizar variáveis de escopo de bloco. As variáveis declaradas como let só podem ser acessadas dentro do bloco de código em que foi declarada.

```javascript
let num = 1
```
Atualmente, é preferível o uso de let ao invés do uso de var. Pode se declarar let com nomes iguais em blocos de código diferentes.

___
###### <span style="color:blue">:rocket: Const </span>
Também adicionada no ECMAScript 6, as consts são acessíveis em qualquer parte do código. As consts devem ser iniciadas logo após serem declaradas.

```javascript
const num = 1
```
As consts, após terem um valor atribuído, não permitem que seu valor seja atribuído. Dessa forma, garantimos que as variáveis sejam sempre inicializadas e seu valor seja sempre mantido, evitando surpresas nas saídas de dados.
___

:loudspeaker: **Olhe o arquivo "variaveis.js" para mais exemplos.** :+1:
