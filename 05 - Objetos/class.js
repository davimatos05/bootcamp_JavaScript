class carro {
    modelo;
    ano;

    constructor(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
    };
};

function qualEmelhor(carro1, carro2) {
    if (carro1.ano > carro2.ano) {
        console.log(`Comparando o modelo dos carros pelo ano o carro ${carro1.modelo} é melhor que o ${carro2.modelo}`);
    } else if (carro1.ano < carro2.ano) {
        console.log(`Comparando o modelo dos carros pelo ano o carro ${carro2.modelo} é melhor que o ${carro1.modelo}`);
    } else {
        console.log(`Os Anos são iguais então os modelos tem a mesma capacidade`);
    }
};

const Uno = new carro('Fiat Uno', 2003)
const Sevete = new carro('Sevete', 2003)

qualEmelhor(Uno, Sevete);




