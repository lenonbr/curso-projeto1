import "dotenv/config";
import app from './src/app.js';


const PORT = 3000;

const rotas = {
    '/': 'Aline meu amor',
    '/livros': 'Aline meu amor2',
    '/autor': 'Aline meu amor3',
};

app.listen (PORT, () => {
    console.log ( "Servidor rodando na porta 3000");
});