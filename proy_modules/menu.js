//Esta función muestra un menú en la consola con opciones numeradas.
const mostrarMenu = () =>{
//Muestra una serie de opciones, del 1 al 6, cada una seguida de una descripción
        return new Promise( resolve => {
            console.log('\n')
            console.log(`============================`.green)
            console.log(`    seleccione una opcion   `.green)
            console.log(`============================\n`.green)
            console.log(`${'1.'.green} Crear nuevo Producto ` )
            console.log(`${'2.'.green} Listar Productos ` )
            console.log(`${'3.'.green} Listar clientes ` )
            console.log(`${'4.'.green} Listar Pedidos ` )
            console.log(`${'5.'.green} Enviar pedidos ` )
            console.log(`${'6.'.green} Borrar pedido ` )
            console.log(`${'0.'.green} Salir\n` )
//Luego, crea una interfaz de lectura (readline) para capturar la selección del usuario
//Cuando el usuario ingresa una opción, la función resuelve una promesa con el valor de la opción seleccionada
            const readLine = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });

            readLine.question('Selecione una opcion:', (opt) =>{
                readLine.close();
                resolve(opt)
            } )
        } )
    }
//Esta función permite al usuario pausar la ejecución del programa hasta que presione la tecla "ENTER"
    const pausa = () =>{
        return new Promise(resolve =>{
            const readLine = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
//También utiliza readline para esperar la entrada del usuario
//Después de que el usuario presiona "ENTER", la función resuelve la promesa, lo que permite que el programa continúe.
            readLine.question(`\nPresione ${'ENTER'.yellow} para continuar\n`, (opt) =>{
                readLine.close();
                resolve()
            } )
        })
    }

    module.exports = {
        mostrarMenu,
        pausa
    }