import {alterarimagem, inserirFilme, listarTodosFilmes} from '../repository/filmeRepository.js'


import multer from 'multer'

import { Router } from 'express'
const server = Router()
const upload = multer({ dest: 'storage/capasFilmes'})

server.post('/filme', async (req,resp) => {
    try{
        const filmeParaInserir = req.body

        const filmeIserido =  await inserirFilme(filmeParaInserir)

        resp.send(filmeIserido)
    }
    catch (err){
        resp.status(400).send({
            erro:err.message
        })
    }  
})

server.put('/filme/:id/capa', upload.single('capa'), async (req, resp) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await alterarimagem(imagem, id);
        if (resposta != 1)
            throw new Error('A imagem não pode ser salva.');

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.get('/listarfilme',async (req,resp) => {
    try{
        const resposta = await listarTodosFilmes()
        resp.send(resposta)
    } catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



server.get('/filme/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await buscarPorId(id);

        if (!resposta)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})




server.get('/filme/busca', async (req, resp) => {
    try {
        const { nome } = req.query;
        
        const resposta = await buscarPorNome(nome);

        if (resposta.length == 0)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



server.delete('/filme/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await removerFilme(id);
        if (resposta != 1)
            throw new Error('Filme não pode ser removido.');

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/filme/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const filme = req.body;

        const resposta = await alterarFilme(id, filme);
        if (resposta != 1)
            throw new Error('Filme não pode ser alterado');
        else
            resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server 