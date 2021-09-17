/* Criar uma classe para representar os objetos que utilizamos para representar moradias na tarefa anterior 
(incluindo os campos id, quartos, tipo, alugada e endereço simples)*/
class Moradia{
    constructor (id, quartos, tipo, alugada, endereco, bairro, cidade){
    this.id = id
    this.quartos = quartos
    this.tipo = tipo
    this.alugada = alugada
    this.endereco = endereco
    this.bairro = bairro
    this.cidade = cidade
    }
//um método liberar() que torna seu valor alugada=false
   liberar(){ 
       this.alugada = false
    }
//um método alugar() que torna seu valor alugada=true 
   alugar(){
        this.alugada = true
    }
/*um método exibir() que mostra uma frase como 
Moradia id 1 do tipo casa com 2 quartos localizada na Rua São João, 123 está alugada*/
    exibir(){
       console.log( `Moradia ${this.id}, do tipo ${this.tipo}, com ${this.quartos} quartos, `+
       `localizada na ${this.endereco} Bairro ${this.bairro} - ${this.cidade}. Está alugada? ${this.alugada} `)
    }
    
}
/*construa pelo menos 5 novos objetos Moradia, incluindo algumas alugadas, outras não*/ 
let moradia1 = new Moradia (1, 2 ,"Casa", true, "Rua São João, nº123", "Planalto", "Ariquemes")
let moradia2 = new Moradia (2, 3, "Apartamento", false, "Rua Bahia, nº1081", "São Cristóvão", "Serra")
let moradia3 = new Moradia (3, 5, "Chácara", false, "Rua Quinze de Novembro, nº9132", "São Francisco", "Itacoatiara")
let moradia4 = new Moradia (4, 3, "Casa", false, "Rua São Francisco, nº1288", "Bela Vista", "Dourados")
let moradia5 = new Moradia (5, 2, "Apartamento", true, "Avenida Santa Rita, nº1433 - Andar 2", "São Cristóvão", "Serra")
let moradia6 = new Moradia (6, 1, "Casa", true, "Avenida Um, nº5960", "Boa Vista", "Santa Rita")
let moradia7 = new Moradia (7, 4, "Apartamento", true, "Avenida Rui Barbosa, nº8344 - Andar 12(Cobertura)","São Cristóvão", "Serra")
/*adicione todos os objetos criados a um array */
let objMoradias = []
objMoradias.push(moradia1,moradia2, moradia3, moradia4, moradia5, moradia6, moradia7 )
console.log(``)
console.log(`Testando os métodos`)
console.log(``)
//testando os métodos
    //liberar()
console.log (moradia1)
console.log(``)
console.log(`Liberar`)
moradia1.liberar()
console.log(moradia1)
console.log(``)
    //alugar()
console.log(moradia2)
console.log(``)
console.log(`Alugar`)
moradia2.alugar()
console.log(moradia2)
console.log(``)
    //exibir
console.log(`Exibir`)    
moradia1.exibir()
console.log(``)
/*Execute a função listarDisponiveis(), que criamos na tarefa passada, 
para o seu novo array de objetos Moradia. Lembrando que a função listarDisponiveis()
deve retornar um novo array contendo apenas as moradias liberadas */
function listarDisponiveis(moradias){
    return moradias.filter(estaDisponivel)
  }

function estaDisponivel(moradia){
    return moradia.alugada == false
}
 
const disponiveis = listarDisponiveis(objMoradias)
//testando o filtro 
console.log(`Listar disponíveis`)
console.log(disponiveis)
console.log(``)

/*A partir do array de moradias liberadas criado no exercício 3, 
utilize a repetição forEach para acionar o método exibir() em cada objeto moradia.*/
console.log(`Exibir disponíveis`)
console.log(``)

disponiveis.forEach(dispararDisponiveis)

function dispararDisponiveis(moradia){
    moradia.exibir()
}
