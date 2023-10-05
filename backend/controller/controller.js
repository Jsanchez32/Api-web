import conection from "../config/connection.js";

const getData = async (req, res) => {
    try {
        const db = await conection();
        const { collectionName } = req.params

        const coleccion = db.collection(collectionName);
        const response = await coleccion.find().toArray();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}

const login = async(req,res)=>{
    try {
        console.log(req.body);
        const db = await conection();
        const coleccion = db.collection('Usuarios');
        const validateLogin = await coleccion.findOne({ $and: [{ correo: req.body.correo }, { password: req.body.password }] })
        if (validateLogin) {
            res.send(`Iniciando secion`);
        }
        else {
            return res.status(404).send('Email o Password incorrecta')
        }
    } catch (error) {
        console.log(error);
    }
}

const addData = async (req, res) => {
    try {
        const db = await conection();
        const { collectionName } = req.params
        const data = req.body;

        const coleccion = db.collection(collectionName);
        if (collectionName == 'Usuarios') {
            const emailExist = await coleccion.findOne({ correo: req.body.correo });
            if (emailExist) {
                return res.status(404).send('El email ya existe')
            }
        }
        const response = await coleccion.insertOne(data);
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}



const updateData = async (req, res) => {
    try {
        const db = await conection();
        const { collectionName } = req.params
        const id = parseInt(req.params.id)

        const data = req.body;

        const coleccion = db.collection(collectionName);
        const response = await coleccion.findOneAndUpdate({ id: id }, { $set: data });
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}

const deleteData = async (req, res) => {
    try {
        const db = await conection();
        const { collectionName } = req.params
        const id = parseInt(req.params.id)

        const coleccion = db.collection(collectionName);

        const response = await coleccion.deleteOne({ id: id });
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}


export {
    getData,
    addData,
    updateData,
    deleteData,
    login
}