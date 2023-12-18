class personagem{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo
    }
    
       atacar(){
       switch (this.tipo) {
       case "guerreiro" :
             let ataque = "espada";
             console.log (`O ${this.tipo} atacou usando uma ${ataque}`);
            break;
       case "monge" :
       		 console.log (`O ${this.tipo} atacou usando uma arte marcial`); break;
       case "mago" :
             console.log (`O ${this.tipo} atacou usando uma magia`); break;
       case "ninja" :
             console.log (`O ${this.tipo} atacou usando uma shuriken`)};
       };
              
       };
      
        const heroi = new personagem("jaspion", 15, "ninja")
        console.log (heroi)
        return (heroi.atacar())