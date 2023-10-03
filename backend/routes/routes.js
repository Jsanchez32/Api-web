import {addData,deleteData,getData,updateData} from "../controller/controller.js"
import {Router} from "express";

const router = Router();

router.get('/:collectionName/get',getData);
router.post('/:collectionName/add',addData);
router.delete('/:collectionName/del/:id',deleteData);
router.patch('/:collectionName/upd/:id',updateData);



export default router;  