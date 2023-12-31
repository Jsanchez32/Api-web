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

const login = async (req, res) => {
    try {
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

const getReservacionUser = async (req, res) => {
    try {
        const db = await conection();
        const coleccion = db.collection('Reservaciones');
        const response = await coleccion.aggregate([
            {
                $lookup: {
                    from: "Instructores",
                    localField: 'idInstructor',
                    foreignField: 'id',
                    as: 'guia'
                }
            },
            {
                $lookup: {
                    from: "Deportes",
                    localField: 'idDeporte',
                    foreignField: 'id',
                    as: 'deporte'
                }
            },
            {
                $unwind: '$deporte'
            },
            {
                $unwind: '$guia'
            },
            {
                $addFields: {
                    nombreDeporte: '$deporte.nombreDeporte',
                    nombreGuia: '$guia.nombre'
                }
            },
            {
                $project: {
                    deporte: 0,
                    guia: 0
                }
            },
            {
                $match: { idUsuario: req.body.id }
            }
        ]).toArray();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}


const getReservacionAdmin = async (req, res) => {
    try {
        const db = await conection();
        const coleccion = db.collection('Reservaciones');
        const response = await coleccion.aggregate([
            {
                $lookup: {
                    from: "Instructores",
                    localField: 'idInstructor',
                    foreignField: 'id',
                    as: 'guia'
                }
            },
            {
                $lookup: {
                    from: "Deportes",
                    localField: 'idDeporte',
                    foreignField: 'id',
                    as: 'deporte'
                }
            },
            {
                $unwind: '$deporte'
            },
            {
                $unwind: '$guia'
            },
            {
                $addFields: {
                    nombreDeporte: '$deporte.nombreDeporte',
                    nombreGuia: '$guia.nombre'
                }
            },
            {
                $project: {
                    deporte: 0,
                    guia: 0
                }
            }
        ]).toArray();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}


const getUser = async (req, res) => {
    try {
        const db = await conection();
        const coleccion = db.collection('Usuarios');
        const user = await coleccion.findOne({ correo: req.body.correo });
        res.send(user);
    } catch (error) {
        console.log(error);
    }
}

const addData = async (req, res) => {
    try {
        const db = await conection();
        const { collectionName } = req.params
        const data = req.body;
        console.log(data);
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
        const idP = parseInt(req.params.id)

        const data = req.body;
        console.log(data);
        console.log(idP);

        const coleccion = db.collection(collectionName);
        await coleccion.findOneAndUpdate({ id: idP }, { $set: data });
        res.send({msg:'Actualizado'});
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
    login,
    getUser,
    getReservacionUser,
    getReservacionAdmin
}