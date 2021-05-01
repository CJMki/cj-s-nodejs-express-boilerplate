import {
  getItemById,
  postItem,
  removeItemById,
  updateItemById,
} from './schema';
import { findById, create, remove, update } from '../../services/item/Item';
const controller = {};

controller.getItemById = async (req, res) => {
  const params = {
    lang: req.params.lang,
    id: req.params.id,
  };

  const validated = await getItemById.validateAsync(params);
  const data = await findById(validated.id);
  res.json(data);
};

controller.postItem = async (req, res) => {
  const params = {
    lang: req.params.lang,
    payload: req.body,
  };

  const validated = await postItem.validateAsync(params);
  const data = await create(validated.payload);
  res.json(data);
};

controller.deleteItemById = async (req, res) => {
  const params = {
    lang: req.params.lang,
    id: req.params.id,
  };

  const validated = await removeItemById.validateAsync(params);
  const data = await remove(validated.id);

  res.json(data);
};

controller.updateItemById = async (req, res) => {
  const params = {
    lang: req.params.lang,
    id: req.params.id,
    payload: req.body,
  };

  const validated = await updateItemById.validateAsync(params);
  const data = await update(validated.id, validated.payload);

  res.json(data);
};

export default controller;
