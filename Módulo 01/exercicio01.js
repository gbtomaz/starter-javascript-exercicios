            /*                    Módulo 01 | Exercício 1
 
Crie uma função que dado o objeto a seguir:

var endereco = {  rua: "Rua dos pinheiros",  numero: 1293,  bairro: "Centro",  cidade: "São Paulo",  uf: "SP"};

Retorne o seguinte conteúdo: O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.


            */


                // Criando a função:

    function exibeEndereco(entrada) {

        console.log("O usuário mora em "+ entrada.cidade +" / "+ entrada.uf +", no bairro "+ entrada.bairro +', na rua "'+ entrada.rua +'" '+ "com nº "+ entrada.numero +".")

    }

                // Declarando o objeto endereco:
                
    var endereco = {  
                    
        rua: "Rua dos pinheiros",  
        numero: 1293,  
        bairro: "Centro",  
        cidade: "São Paulo",  
        uf: "SP"
    };

                // O resultado virá via console:

        exibeEndereco(endereco)

                
    


    