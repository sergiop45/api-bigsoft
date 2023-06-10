const route = require('express').Router();
const ModelEmail = require('../src/app/model/modelEmail');
const VerifyJwt = require('./VerifyJwt');

route.post('/email', async (req, res) => {
    const email = req.body;

    try {
        await ModelEmail.create(email);
        res.status(201).json({ message: 'E-mail registrado com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: 'Erro: ' + error });
    }
});

// GET ALL

route.get('/email', async (req, res) => {
    try {
        const emails = await ModelEmail.find();
        res.status(200).json(emails);
    } catch (error) {
        res.status(500).json({ message: 'Erro: ' + error });
    }
});

// GET

route.get('/email/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const email = await ModelEmail.findById(id);

        if (email != null) {
            res.status(200).json(email);
        } else {
            res.status(422).json({ message: 'E-mail não encontrado!' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro: ' + error });
    }
});

// DELETE

route.delete('/email/:id', VerifyJwt, async (req, res) => {
    const id = req.params.id;

    try {
        const email = await ModelEmail.findById(id);

        if (email != undefined) {
            await ModelEmail.deleteOne({ _id: id });
            res.status(200).json({ message: 'E-mail deletado com sucesso!' });
        } else {
            res.status(422).json({ message: 'E-mail não encontrado!' });
        }
    } catch (error) {
        console.log('Erro: ' + error);
    }
});

// UPDATE

route.patch('/email/:id', VerifyJwt, async (req, res) => {
    try {
        const emailUpdate = req.body;
        const id = req.params.id;
        const email = await ModelEmail.findById(id);

        if (email != undefined) {
            await ModelEmail.updateOne({ _id: id }, emailUpdate);
            res.status(200).json(emailUpdate);
        } else {
            res
                .status(422)
                .json({ message: 'E-mail não encontrado para atualização!' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao tentar atualizar!' });
    }
});

module.exports = route;
