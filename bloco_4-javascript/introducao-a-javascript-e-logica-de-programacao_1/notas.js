let nota = 100;

switch (true) {
    case (nota >= 90 && nota <= 100):
        console.log("A");
        break;
    case (nota >= 80 && nota < 90):
        console.log("B");
        break;
    case (nota >= 70 && nota < 80):
        console.log("C");
        break;
    case (nota >= 60 && nota < 70):
        console.log("D");
        break;
    case (nota >= 50 && nota < 60):
        console.log("E");
        break;
    case (nota < 50):
        console.log("F");
        break;

    default:
        console.log("Nota inválida!")
}