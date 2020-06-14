            /*                    Módulo 01 | Exercício 2
 
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

function pares(x, y) {  
    
    // código aqui
    }    
    pares(32, 321);

            */

 /* aqui criamos a função, primeiros fizemos um laço de repetição FOR para aumentar os números e antes de trazer o resultado, fizemos uma condicional 
 para que só saia no console se o restante da divisão do mesmo por 2 for 0 */
 
function pares(x, y) {

     for(n = x; n <= y; n++){

        if(n % 2 == 0){

            console.log(n);
        }
     }
}            

    // chamando a função:
    
     pares(32, 321);