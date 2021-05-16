function Intervalo() {
    this.valor = 0
    setInterval(function(){
        this.valor++
        console.log(this.valor)
    }.bind(this), 1000);

}
new Intervalo