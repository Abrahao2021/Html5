function conta() {
    this.valor = 0
    setInterval(() => {
        this.valor++
        console.log(valor)
    }, 1000);
}
conta()