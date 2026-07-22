//Inicio Gestor de Presupuestos//

console.log("Gestor de Presupuesto cargado correctamente");

const movimientos = [];

//Menú//

function mostrarMenu() {
  return prompt(`
    ==== GESTOR DE PRESUPUESTO ====
    
    1. Registrar Ingreso
    2. Registrar Gasto
    3. Calcular Saldo
    4. Mostrar Historial
    5. Filtrar Movimientos
    6. Mostrar Resumen
    0. Salir

    Seleccione una opción:
    `);
}

//Registro de Ingresos//

function registrarIngreso() {
  const detalleIngreso = prompt("Ingrese la descripción del ingreso");
  let montoIngreso;
    while (true) {
      montoIngreso = Number(
        prompt("Escriba el monto a Ingresar")
      );
    
    if (isNaN(montoIngreso) || montoIngreso <= 0) {
      alert("Debe ingresar un monto válido y mayor que cero");

    } else {
        break;
    }
  }

  const ingreso = {
    tipo: "Ingreso",
    detalle: detalleIngreso,
    monto: montoIngreso,
  };

  movimientos.push(ingreso);
    alert("Ingreso registrado correctamente.");
      console.table(movimientos);
  }

//Registro de Gastos//

function registrarGasto() {
  const detalleGasto = prompt("Ingrese la descripción del Gasto");
  let montoGasto;
    while (true) {
      montoGasto = Number(
        prompt("Escriba el monto del Gasto")
      );
    
    if (isNaN(montoGasto) || montoGasto <= 0) {
      alert("Debe ingresar un monto válido o mayor a cero");

    } else {
        break;
    }
  }

  const gasto = {
    tipo: "Gasto",
    detalle: detalleGasto,
    monto: montoGasto,
  };

  movimientos.push(gasto);
    alert("Gasto registrado correctamente.");
      console.table(movimientos);
  }

//Consulta de Saldo//

function calcularSaldo() {
  console.log("Entró a calcularSaldo");

  let saldo = 0;

  movimientos.forEach(function(movimiento) {
    if (movimiento.tipo === "Ingreso") {
      saldo = saldo + movimiento.monto;
    } else if (movimiento.tipo === "Gasto") {
      saldo = saldo - movimiento.monto;
    }
  });
  console.log(`Saldo Calculado:, $${saldo.toLocaleString("es-CL")}`);
  alert(`Su nuevo saldo es de: $${saldo.toLocaleString("es-CL")}`)
}

//Mostrar el Historial//

function mostrarHistorial() {
  if (movimientos.length === 0) {
    alert("No registra Movimientos");
    return;
  }

  let historial = "";

  movimientos.forEach(function(movimiento) {
    historial = historial + `${movimiento.tipo} - ${movimiento.detalle} - $${movimiento.monto.toLocaleString("es-CL")}\n`;
  });
  alert(historial);
}

//Filtro de Movimientos//

function filtrarMovimientos() {
  if (movimientos.length === 0) {
    alert("No registra Movimientos");
    return;
  }
  
  let opcion = prompt(`===FILTRAR MOVIMIENTOS===
    
  1. Mostrar Ingresos
  2. Mostrar Gastos
  
  Escribe el número de la opción seleccionada:`)

  let movimientosFiltrados;

  if (opcion === "1") {
    movimientosFiltrados = movimientos.filter(function(movimiento) {
      return movimiento.tipo === "Ingreso";
    });
  } else if (opcion === "2") {
    movimientosFiltrados = movimientos.filter(function(movimiento) {
      return movimiento.tipo === "Gasto";
    });
  } else {
    alert("La opción ingresada no es Válida");
    return;
  }
  
  let listaMovimientos = "";

  movimientosFiltrados.forEach(function(movimiento) {
    listaMovimientos = listaMovimientos + `${movimiento.tipo} - ${movimiento.detalle} - $${movimiento.monto.toLocaleString("es-CL")}\n`
  });

  if (opcion === "1") {
    alert(`===INGRESOS===

    ${listaMovimientos}`);

  } else {
    alert(`===GASTOS===
      
    ${listaMovimientos}`);
  }
}

//Mostrar Resumen//

function mostrarResumen() {

  if (movimientos.length === 0) {
      alert("No registra Movimientos");
      return;
    }

  let totalIngresos = 0;
  let totalGastos = 0;

  movimientos.forEach(function(movimiento) {
    if (movimiento.tipo === "Ingreso"){
      totalIngresos = totalIngresos + movimiento.monto;
    } else if (movimiento.tipo === "Gasto") {
      totalGastos = totalGastos + movimiento.monto;
    }
  });

  let saldoFinal = totalIngresos - totalGastos;
  let cantidadMovimientos = movimientos.length;
  
  alert(`===RESUMEN===
  Total de Ingresos: $${totalIngresos.toLocaleString("es-CL")}
  Total de Gastos: $${totalGastos.toLocaleString("es-CL")}
  Saldo Final: $${saldoFinal.toLocaleString("es-CL")}
  Cantidad de Movimientos: ${cantidadMovimientos}`);
}

//Inicio de Aplicación// 

function iniciarAplicacion() {
  
  console.log("Gestor de Presupuesto iniciado correctamente");

  alert("Bienvenido al Gestor de Presupuesto Personal");

  const nombreUsuario = prompt("¿Cuál es tu nombre?");
  alert(`Hola, ${nombreUsuario}. Bienvenido a la aplicación.`);
  console.log("Usuario:", nombreUsuario);

  let opcion = "";

  while (opcion !== "0") {
    opcion = mostrarMenu().trim();
    console.log("Opción Seleccionada:", opcion);

    switch (opcion) {
      case "1":
        registrarIngreso();
        break;
      
      case "2":
        registrarGasto();
        break;
      
      case "3":
        calcularSaldo();
        break;

      case "4":
        mostrarHistorial();
        break;

      case "5":
        filtrarMovimientos();
        break;
      
      case "6":
        mostrarResumen();
        break;
      
      case "0":
        alert("Gracias por utilizar la Aplicación");
        break;
      
      default:
        alert("Opción No Válida. Intente nuevamente");
    }
  }
}

