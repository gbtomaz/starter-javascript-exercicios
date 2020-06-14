            /*                    Módulo 01 | Exercício 4
 
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

function experiencia(anos) { 
     // código aqui
    }
    var anosEstudo = 7;
    experiencia(anosEstudo);

    // De 0-1 ano: Iniciante
    // De 1-3 anos: Intermediário
    // De 3-6 anos: Avançado
    // De 7 acima: Jedi Master
  */

   // Nesse exercício apenas coloquei o if dentro da função, o console.log ficou de fora para ser chamado junto com a função na linha 33 levando em consideração a variável anosEstudos da linha 31.

 function experiencia(anos) { 
        if(anos <= 1){
          return 'Iniciante'  
        } else if(anos > 1 && anos <= 3){
          return 'Intermediário'
        } else if(anos > 3 && anos <= 6){
          return 'Avançado'  
        } else if(anos >= 7){
          return 'Jedi Master'  
        }
 }
  
 var anosEstudo = 7;
 
 console.log(experiencia(anosEstudo));
