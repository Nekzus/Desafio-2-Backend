/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = require("./class");
const producto = async () => {
    const contenedor = new class_1.Contenedor('./productos.json');
    const producto = {
        title: 'producto',
        price: 15000,
        thumbnail: 'https://picsum.photos/200',
        id: 0,
    };
    //**DESCOMENTAR METODOS */
    // //** Metodo save */
    const idProducto = await contenedor.save(producto);
    console.log('*******************************');
    console.log('Id producto guardado (save): ', idProducto);
    console.log('*******************************');
    // //** Metodo getById */
    // const productoById = await contenedor.getById(8);
    // console.log('Producto por id (getById): ', productoById);
    // console.log('*******************************');
    // //** Metodo getAll */
    // const productos = await contenedor.getAll();
    // console.log('Productos en el archivo (getAll): ', productos);
    // console.log('*******************************');
    //** Metodo delete */
    // await contenedor.delete(15);
    //** Metodo deleteAll */
    // await contenedor.deleteAll();
};
producto();
