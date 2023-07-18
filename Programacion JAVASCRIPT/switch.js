let numero = 1;

switch (numero) {
    case 1:
        console.log("soy uno");
        break;  //se usa para no continuar mirando los casos
    case 10:
        console.log("soy un 10");
        break;
    case 100:
        console.log("soy un 100");
        break
    default:
        console.log("no soy nada");
}

const country = "Irlanda";
switch (country) {
  case "Francia":
  case "Espana":
  case "Irlanda":
  case "Polonia":
    console.log("Este pais esta en Europa.");
    break;
  case "Estados Unidos":
  default:
    console.log("Este pais no esta en Europa.");
}