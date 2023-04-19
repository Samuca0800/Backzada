class Vendedor {
    constructor(c) {
        this.id = c.id;
        this.nome = c.nome;
        this.matricula = c.matricula;
    }

    create() {
        return `INSERT INTO vendedores VALUE(default, '${this.nome}', ${this.matricula});`;
    }

    read() {
        if(id == undefined) {
            return `SELECT * FROM vendedores`
        } else {
            return `SELECT * FROM vendedores WHERE id = ${this.id}`
        }
    }

    update(){
        return `UPDATE vendedores SET nome = '${this.nome}', matricula = '${this.matricula} WHERE id = ${this.id}`;
    }

    delete() {
        return `DELETE FROM vendedores WHERE id = ${this.id}`;
    }
}

module.exports = Vendedor;