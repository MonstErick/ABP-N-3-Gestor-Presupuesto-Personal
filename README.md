# 💰 Gestor de Presupuesto Personal


![Pantalla principal](img/ABP3%20Captura.jpg)

## 📖 Descripción

El Gestor de Presupuesto Personal es una aplicación desarrollada en JavaScript que permite registrar ingresos y gastos de manera sencilla, calcular el saldo disponible y consultar un resumen de los movimientos realizados.

El objetivo principal del proyecto es aplicar los conocimientos adquiridos durante el módulo de JavaScript, utilizando estructuras de control, funciones, arreglos, objetos y manipulación de datos mediante ventanas emergentes (`alert` y `prompt`).

---

## 🎯 Objetivos del proyecto

- Registrar ingresos.
- Registrar gastos.
- Calcular el saldo disponible.
- Mostrar el historial de movimientos.
- Filtrar movimientos por tipo.
- Mostrar un resumen financiero.
- Aplicar buenas prácticas de programación en JavaScript.

---

## 🚀 Funcionalidades

✔ Registrar ingresos.

✔ Registrar gastos.

✔ Validación de montos numéricos mayores que cero.

✔ Cálculo automático del saldo.

✔ Historial completo de movimientos.

✔ Filtro por ingresos o gastos.

✔ Resumen financiero.

✔ Formato de moneda chilena utilizando:

```javascript
toLocaleString("es-CL")
```

---

## 🛠 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- Visual Studio Code
- Git
- GitHub

---

## 📂 Estructura del proyecto

```
GestorPresupuesto/
│
├── css/
│   └── style.css
│
├── img/
│   └── background.jpg
│
├── js/
│   └── script.js
│
├── index.html
└── README.md
```

---

## 🧠 Conceptos de JavaScript aplicados

Durante el desarrollo del proyecto se utilizaron diversos conceptos fundamentales:

- Variables (`let` y `const`)
- Funciones
- Objetos
- Arreglos
- Ciclos `while`
- Método `forEach()`
- Método `filter()`
- Condicionales `if`
- Estructura `switch`
- Validación de datos con `isNaN()`
- Manipulación de cadenas mediante Template Literals
- Formato de números utilizando `toLocaleString()`

---

## 💵 Estructura de los movimientos

Cada movimiento se almacena como un objeto con la siguiente estructura:

```javascript
{
    tipo: "Ingreso",
    detalle: "Sueldo",
    monto: 500000
}
```

Todos los movimientos se almacenan dentro de un arreglo:

```javascript
const movimientos = [];
```

---

## 📷 Vista principal

La aplicación cuenta con una interfaz sencilla desarrollada en HTML y CSS que permite iniciar el sistema mediante un botón, mientras que todas las operaciones se realizan utilizando ventanas emergentes (`alert` y `prompt`).

---

## ▶ Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir el archivo `index.html` con Live Server o desde un navegador.
4. Presionar el botón **Iniciar Aplicación**.
5. Comenzar a registrar ingresos y gastos.

---

## 📚 Aprendizajes obtenidos

Este proyecto permitió reforzar conocimientos relacionados con:

- Organización del código mediante funciones.
- Manipulación de arreglos de objetos.
- Validación de datos ingresados por el usuario.
- Desarrollo de lógica de programación.
- Integración de HTML, CSS y JavaScript.
- Uso básico de Git y GitHub para control de versiones.

---

## 👨‍💻 Autor

**Erick Sanhueza**

Proyecto desarrollado como parte del módulo de JavaScript del programa de formación Full Stack JavaScript.