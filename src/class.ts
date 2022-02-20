/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

type Producto = {
    title: string;
    price: number;
    thumbnail: string;
    id: number;
}

export class Contenedor {
    archivo: string;
    constructor(archivo: string) {
        this.archivo = archivo;
    }
    async save(producto: Producto) {
        try {
            const data = await fs.promises.readFile(this.archivo, 'utf-8');
            const productos: Producto[] = JSON.parse(data);
            producto.id = productos.length + 1;
            if (productos.length > 0) {
                productos.map(products => {
                    if (products.id === producto.id) {
                        producto.id = producto.id + 1;
                    }
                });
            }
            productos.push(producto);
            await fs.promises.writeFile(this.archivo, JSON.stringify(productos, null, 2));
            return producto.id;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id: number) {
        try {
            const data = await fs.promises.readFile(this.archivo, 'utf-8');
            const productos: Producto[] = JSON.parse(data);
            const producto = productos.find(product => product.id === id);
            return producto;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async getAll() {
        try {
            const data = await fs.promises.readFile(this.archivo, 'utf-8');
            const productos = JSON.parse(data);
            return productos;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id: number) {
        try {
            const data = await fs.promises.readFile(this.archivo, 'utf-8');
            const productos: Producto[] = JSON.parse(data);
            productos.map(products => {
                if (products.id === id) {
                    productos.splice(productos.indexOf(products), 1);
                }
            });
            await fs.promises.writeFile(this.archivo, JSON.stringify(productos));
        } catch (error) {
            console.log(error);
        }
    }
    async deleteAll() {
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify([]));
        } catch (error) {
            console.log(error);
        }
    }
}