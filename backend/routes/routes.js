import {addData,deleteData,getData,updateData,login,getUser} from "../controller/controller.js"
import {Router} from "express";

const router = Router();

router.get('/:collectionName/get',getData);
router.post('/:collectionName/add',addData);
router.delete('/:collectionName/del/:id',deleteData);
router.put('/:collectionName/upd/:id',updateData);
router.post('/login',login)
router.post('/user',getUser)



export default router;  