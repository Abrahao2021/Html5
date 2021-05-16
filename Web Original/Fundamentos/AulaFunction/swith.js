const Desidir = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
            console.log("Aprovado com louvor")
            break;
        case 9: case 8: case 6: case 5:
            console.log("Aprovado")
            break;
        case 4:
            console.log("Recuperação")
            break;
        case 3: case 2: case 1:
            console.log("Reprovado");
            break;       
        default:
            console.log("Sem nota")
            break;
    }
}
Desidir(10);
Desidir(8);