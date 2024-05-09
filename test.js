// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let output = sum(14, 9);
    expect(output).toBe(35)


});

test("type of the output", function() {
   
let output =sum (8,27)
    // Uso la función como debe ser usada
   

    // Hago mi comparación (la prueba)
    expect(typeof output).toBe('number');
})

