class Venda {
    constructor(c) {
        this.data = c.data;
        this.quantidade = c.quantidade;
        this.produtoId = c.produtoId;
        this.vendedorId = c.vendedorId;
    }

    create() {
        return `INSERT INTO vendas VALUE(default, '${this.data}', ${this.quantidade}, ${this.produtoId}, ${this.vendedorId});`
    }

    read() {
        if(id == undefined)
            return `SELECT * FROM vendas;`;
        else
            return `SELECT * FROM vendas WHERE id = ${this.id};`
    }

    update() {
        return `UPDATE vendas SET data = '${this.data}', quantidade = ${this.quantidade}, produtoId = ${this.produtoId}, vendedorId = ${this.vendedorId} WHERE id = ${this.id};`
    }

    delete() {
        return `DELETE FROM vendas WHERE id = ${this.id};`;
    }
}

module.exports = Venda;