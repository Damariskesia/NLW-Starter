// importar a depêndencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./nlw/src/database/database.db")