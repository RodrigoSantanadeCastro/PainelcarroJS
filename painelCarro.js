const painelCarro= (function carro() {
    let value =0;
        function velocimetro(pontos){
            return value +=pontos;
        }
    let tanque=0;
        function abastecer(gasolina){
            return tanque+=gasolina;
        }
    let cambio=0;
        function marcha(num1){
            return cambio+=num1;
        }
   
    return {
        acelerar (){
            return velocimetro (10);
        },
        frear(){
            return velocimetro (-10);
        },
        painel(){
            console.log("velocidade",value,"KM");
            console.log("gasolina atual",tanque,"litros");
            console.log("marcha",cambio);
        },
        abastecimento(){
            return abastecer (5);
        },
        opalabeberao(){
           tanque = tanque-3;
           return tanque;

        },
        passarmarcha(){
            return marcha (1);
        },
        reduzirmarcha(){
            return marcha (-1);
        },

    }
})();
painelCarro.abastecimento();
painelCarro.acelerar();
painelCarro.acelerar();
painelCarro.acelerar();
painelCarro.acelerar();
painelCarro.passarmarcha();
painelCarro.acelerar();
painelCarro.acelerar();
painelCarro.acelerar();
painelCarro.acelerar();
painelCarro.passarmarcha();
painelCarro.acelerar();
painelCarro.acelerar();
painelCarro.acelerar();
painelCarro.acelerar();
painelCarro.passarmarcha();
painelCarro.acelerar();
painelCarro.acelerar();
painelCarro.acelerar();
painelCarro.acelerar();
painelCarro.passarmarcha();
painelCarro.opalabeberao();
painelCarro.frear();
painelCarro.painel();
