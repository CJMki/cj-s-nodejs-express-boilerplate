import express from 'express';
import controller from './controller';
import cee from '../../util/catchExpressExceptions';

const router = express.Router();

router.get('/:lang/items/:id', cee(controller.getItemById));
// router.get('/:lang/items/', cee(controller.getItemById)); // not done
router.post('/:lang/items/', cee(controller.postItem));
router.put('/:lang/items/:id', cee(controller.updateItemById));
router.delete('/:lang/items/:id', cee(controller.deleteItemById));

export default router;
