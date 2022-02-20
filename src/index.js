/* eslint-disable no-undef */
"use strict";
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
class Contenedor {
    archivo;
    constructor(archivo) {
        this.archivo = archivo;
    }
    async save(producto) {
        try {
            const data = await fs.promises.readFile(this.archivo, 'utf-8');
            const productos = JSON.parse(data);
            producto.id = productos.length + 1;
            if (productos.length > 0) {
                productos.map(products => {
                    if (products.id === producto.id) {
                        producto.id = producto.id + 1;
                    }
                });
            }
            productos.push(producto);
            await fs.promises.writeFile(this.archivo, JSON.stringify(productos));
            return producto.id;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getById(id) {
        try {
            const data = await fs.promises.readFile(this.archivo, 'utf-8');
            const productos = JSON.parse(data);
            const producto = productos.find(product => product.id === id);
            return producto;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getAll() {
        try {
            const data = await fs.promises.readFile(this.archivo, 'utf-8');
            const productos = JSON.parse(data);
            return productos;
        }
        catch (error) {
            console.log(error);
        }
    }
    async delete(id) {
        try {
            const data = await fs.promises.readFile(this.archivo, 'utf-8');
            const productos = JSON.parse(data);
            productos.map(products => {
                if (products.id === id) {
                    productos.splice(productos.indexOf(products), 1);
                }
            });
            await fs.promises.writeFile(this.archivo, JSON.stringify(productos));
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteAll() {
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify([]));
        }
        catch (error) {
            console.log(error);
        }
    }
}
const producto = async () => {
    const contenedor = new Contenedor('./productos.json');
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
//# sourceMappingURL=index.js.map