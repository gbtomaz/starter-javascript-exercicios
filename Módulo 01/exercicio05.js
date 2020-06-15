            /*                    Módulo 01 | Exercício 5
 
Dado o seguinte vetor de objetos:

var usuarios = [  
    {    nome: "Diego",    
         habilidades: ["Javascript", "ReactJS", "Redux"]  },  
    {    nome: "Gabriel",    
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]  }];
    
 Escreva uma função que produza o seguinte resultado:
  
 O Diego possui as habilidades: Javascript, ReactJS, Redux
 O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
  
 Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um arraycom um separador utilize o join.
 */


 // aqui declarei o vetor
var usuarios = [  
    {    nome: "Diego",    
         habilidades: ["Javascript", "ReactJS", "Redux"]  },  
    {    nome: "Gabriel",    
         habilidades: ["VueJS", "Ruby on Rails", "Elixir"]  }
        ];
// aqui criamos a função com o for...of e na hora de chamar o atributo habilidades, foi necessário o join para que ele trouxesse cada habilidade um ao lado do outro.
function habilidades(nomes){

    for(let nome of nomes){
        console.log("O "+ nome.nome +" possui as habilidades: "+ nome.habilidades.join(', '));
    }

}        

habilidades(usuarios);