const conyusu1 = prompt("Ingrese la contraseña:");
const conyusu2 = prompt("Ingrese el nombre de usuario:");

const contrayusu = {
    pizza123: conyusu1,
    pizza: conyusu2
};

const usuycon1 = prompt("Repita su contraseña:");
const usuycon2 = prompt("Repita su nombre de usuario:");

const usuycontra = {
    pizza123: usuycon1,
    pizza: usuycon2
};

switch (true) {
    case contrayusu.pizza123 === usuycontra.pizza123 && contrayusu.pizza === usuycontra.pizza:
        alert("Su nombre de usuario y contraseña son correctos.");
        break;
    case contrayusu.pizza === usuycontra.pizza && contrayusu.pizza123 === usuycontra.pizza123:
        alert("Su nombre de usuario o contraseña no son correctos.");
        break;
    case contrayusu.pizza123 === usuycontra.pizza && contrayusu.pizza123 === usuycontra.pizza:
        alert("Su nombre de usuario o contraseña no son correctos.");
        break;
    case contrayusu.pizza === usuycontra.pizza123:
        alert("Su nombre de usuario o contraseña no son correctos.");
        break;
    case contrayusu.pizza123 === usuycontra.pizza:
        alert("Su nombre de usuario o contraseña no son correctos.");
        break;
    default:
        alert("Su nombre de usuario o contraseña no son correctos.");
}