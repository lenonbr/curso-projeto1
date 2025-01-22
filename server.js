import "dotenv/config";
import app from './src/app.js';


const PORT = 3000;

const rotas = {
    '/': 'teste',
    '/livros': 'teste2',
    '/autor': 'teste3',
};

app.listen (PORT, () => {
    console.log ( "Servidor rodando na porta 3000");
});
