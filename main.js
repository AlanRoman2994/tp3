console.log("=== EJERCICIO 1: CÁLCULO DE PRECIO CON IVA ===");

function calcularPrecioConIva() {
    const precio = 300;
    const iva = 21;
    
    // Fórmula: precio + (precio * iva / 100)
    const montoIva = precio * iva / 100;
    const precioTotal = precio + montoIva;
    
    console.log(`Precio del producto: $${precio}`);
    console.log(`IVA (${iva}%): $${montoIva}`);
    console.log(`Precio total a pagar: $${precioTotal}`);
    
    return precioTotal;
}

// Ejecutar ejercicio 1
calcularPrecioConIva();



console.log("\n=== EJERCICIO 2: ÁREA Y PERÍMETRO DE CUADRADO ===");

function calcularCuadrado() {
    const lado = 5; // Variable con el lado del cuadrado
    
    // Cálculos
    const area = lado * lado; // o Math.pow(lado, 2)
    const perimetro = lado * 4;
    
    console.log(`Lado del cuadrado: ${lado} unidades`);
    console.log(`Área del cuadrado: ${area} unidades cuadradas`);
    console.log(`Perímetro del cuadrado: ${perimetro} unidades`);
    
    return {
        lado: lado,
        area: area,
        perimetro: perimetro
    };
}

// Ejecutar ejercicio 2
calcularCuadrado();
