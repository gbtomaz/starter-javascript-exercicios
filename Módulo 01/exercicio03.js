            /*                    Módulo 01 | Exercício 3
 
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não.

function temHabilidade(skills) {
      // código aqui
    }
    var skills = ["Javascript", "ReactJS", "React Native"];
    
    temHabilidade(skills); 
    
    // true ou false

  */
  // Dica: para verificar se um vetor contém um valor, utilize o método indexOf.
  
  // Nessa função coloquei o If usando o método indexOf na qual consultando a documentação fornecida pelo MDN e testando no código, quando um valor não consta em um array
  // retorno é -1, então bastou colocar a condicional > -1 para true.

 function temHabilidade(skills) {
   
        if (skills.indexOf("Javascript") > -1) {
            console.log(true)
        } else {
            console.log(false)
        }
    }

    // chamando a variável: 

  var skills = ["Javascript", "ReactJS", "React Native"];
  
   // chamando a função com a variável:

  temHabilidade(skills); 
  