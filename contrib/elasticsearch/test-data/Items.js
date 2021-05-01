import { Item } from '../../../src/services/item/Item';

const media = {
  thumbnail: '.storage/image/teslathumb.png',
  image: '.storage/image/tesla.png',
};

const promotion = {
  name: 'doomsday promotion',
  rate: 10.0,
};

const payload = {
  make: 'Honda',
  model: 'Civic',
  engineNo: 'electric',
  fuelType: 'electric',
  mainPartCategory: 'break',
  subPartCategory: 'break-plates',
  vinNo: 'HMGH123',
  partNo: '1M8GDM9A_KP042788',
  description: 'awesome break system',
  vendorId: 1,
  vendorName: 'awesome-shop',
  price: '175.0',
  score: 4.5,
  stock: 120,
  promotion: promotion,
  media: media,
  createdAt: new Date(),
};

const doc = new Item(payload).toJson();

export default doc;
