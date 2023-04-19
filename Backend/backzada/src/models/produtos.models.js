class Produto {
    constructor(p) {
        this.id = p.id;
        this.nome = p.nome;
        this.valor = p.valor;
    }

    create() {
        return `INSERT INTO produtos VALUE(default, '${this.nome}', ${this.valor})`
    }

    read() {
        if(this.id == undefined) {
            return `SELECT * FROM produtos`
        } else {
            return `SELECT * FROM produtos WHERE id = ${this.id}`
        }
    }

    update() {
        return `UPDATE produtos SET nome = '${this.nome}', valor = ${this.valor} WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM produtos WHERE id = ${this.id}`;
    }
}

module.exports = Produto;