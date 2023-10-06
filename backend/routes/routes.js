import {addData,deleteData,getData,updateData,login,getUser,getReservacionUser} from "../controller/controller.js"
import {Router} from "express";

const router = Router();

router.get('/:collectionName/get',getData);
router.post('/:collectionName/add',addData);
router.delete('/:collectionName/del/:id',deleteData);
router.put('/:collectionName/upd/:id',updateData);
router.post('/login',login)
router.post('/user',getUser)
router.post('/reservacion',getReservacionUser)



export default router;  