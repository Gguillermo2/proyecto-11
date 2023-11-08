//En esta línea, estás importando un módulo llamado colors. Este módulo es una librería para colorear la salida en la consola. Te permite agregar colores y estilos a los textos 
const colors = require('colors')
//Aquí estás importando dos funciones, mostrarMenu y pausa, desde un módulo ubicado en el archivo menu.js.
        const{ mostrarMenu, pausa } = require('./proy_modules/menu')

        const main = async() =>{
            console.clear();
            console.log(`///////////////////////////`)
            console.log(`//     Menu Principal    //`)
            console.log(`///////////////////////////`)
        
        let option = '';
        
            do {
                do {
                    option = await mostrarMenu();
                }while(!(option >=0 && option <= 6))
            
                if (option !== '0'){
                    console.log(`\nSe ejecuta el proceso ${option}`)
                    await pausa();
                }
            } while( option!== '0' );
        }
//se llama para iniciar la ejecución de la aplicación
        main();