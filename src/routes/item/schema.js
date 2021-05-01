import Joi from 'joi';
import {
  itemId,
  engineNo,
  fuelType,
  mainPartCategory,
  subPartCategory,
  vinNo,
  partNo,
  description,
  score,
  stock,
  promotion,
  media,
} from '../../util/joi-unit-schema/item';
import {
  date,
  lang,
  make,
  model,
  price,
} from '../../util/joi-unit-schema/common';
import { vendorId, vendorName } from '../../util/joi-unit-schema/vendor';

const getItemById = Joi.object({
  lang: lang,
  id: itemId.required(),
});

const postItem = Joi.object({
  lang: lang,
  payload: Joi.object({
    make: make.required(),
    model: model.required(),
    engineNo: engineNo.required(),
    fuelType: fuelType.required(),
    mainPartCategory: mainPartCategory.required(),
    subPartCategory: subPartCategory.required(),
    vinNo: vinNo.required(),
    partNo: partNo.required(),
    description: description.required(),
    vendorId: vendorId.required(),
    vendorName: vendorName.required(),
    price: price.required(),
    score: score.required(),
    stock: stock.required(),
    promotion: promotion.required(),
    media: media.required(),
    createdAt: date,
    updatedAt: date,
  }),
});

const removeItemById = Joi.object({
  lang: lang,
  id: itemId.required(),
});

const updateItemById = Joi.object({
  lang: lang,
  id: itemId.required(),
  payload: Joi.object({
    make: make.required(),
    model: model.required(),
    engineNo: engineNo.required(),
    fuelType: fuelType.required(),
    mainPartCategory: mainPartCategory.required(),
    subPartCategory: subPartCategory.required(),
    vinNo: vinNo.required(),
    partNo: partNo.required(),
    description: description.required(),
    vendorId: vendorId.required(),
    vendorName: vendorName.required(),
    price: price.required(),
    score: score.required(),
    stock: stock.required(),
    promotion: promotion.required(),
    media: media.required(),
    createdAt: date,
    updatedAt: date,
  }),
});

export { getItemById, postItem, removeItemById, updateItemById };
