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
