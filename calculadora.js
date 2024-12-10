const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: División por cero no permitida.";
        }
        return num1 / num2;
    } else {
        return "Error: Operación no válida.";
    }
}

function solicitarOperacion() {
    rl.question("Ingrese el primer número: ", (num1Input) => {
        const num1 = parseFloat(num1Input);

        rl.question("Ingrese el segundo número: ", (num2Input) => {
            const num2 = parseFloat(num2Input);

            rl.question("Ingrese la operación que desea realizar (suma, resta, multiplicacion, division): ", (operacion) => {
                operacion = operacion.toLowerCase();

                const resultado = realizarOperacion(num1, num2, operacion);
                console.log(`Resultado: ${resultado}`);

                rl.question("¿Quieres realizar otro cálculo? (si/no): ", (respuesta) => {
                    if (respuesta.toLowerCase() === "si" || respuesta.toLowerCase() === "si") {
                        solicitarOperacion();
                    } else {
                        console.log("Gracias por usar la calculadora. ¡Adiós!");
                        rl.close();
                    }
                });
            });
        });
    });
}

solicitarOperacion();
