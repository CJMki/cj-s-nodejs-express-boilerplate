export default class Item {
  constructor(payload) {
    this.make = payload.make;
    this.model = payload.model;
    this.engineNo = payload.engineNo;
    this.fuelType = payload.fuelType;
    this.mainPartCategory = payload.mainPartCategory;
    this.subPartCategory = payload.subPartCategory;
    this.vinNo = payload.vinNo;
    this.partNo = payload.partNo;
    this.description = payload.description;
    this.vendorId = payload.vendorId;
    this.vendorName = payload.vendorName;
    this.price = payload.price;
    this.score = payload.score;
    this.stock = payload.stock;
    this.promotion = payload.promotion;
    this.media = payload.media;
    this.createdAt = payload.createdAt;
    this.updatedAt = payload.updatedAt || new Date();
  }
  toJson() {
    return JSON.stringify(this);
  }
  static MAPPING = {
    make: { type: 'text', fields: { raw: { type: 'search_as_you_type' } } },
    model: { type: 'text', fields: { raw: { type: 'search_as_you_type' } } },
    engineNo: { type: 'text', fields: { raw: { type: 'search_as_you_type' } } },
    fuelType: { type: 'text', fields: { raw: { type: 'search_as_you_type' } } },
    mainPartCategory: {
      type: 'text',
      fields: { raw: { type: 'search_as_you_type' } },
    },
    subPartCategory: {
      type: 'text',
      fields: { raw: { type: 'search_as_you_type' } },
    },
    vinNo: { type: 'text', fields: { raw: { type: 'search_as_you_type' } } }, // part of vehicle chassis number
    partNo: { type: 'text', fields: { raw: { type: 'search_as_you_type' } } }, // unique serial for each part
    description: {
      type: 'text',
      fields: { raw: { type: 'search_as_you_type' } },
    },
    vendorId: { type: 'long' }, // 2^31-1 means i am a millionaire
    vendorName: {
      type: 'text',
      fields: { raw: { type: 'search_as_you_type' } },
    },
    price: { type: 'double' },
    score: { type: 'double' },
    stock: { type: 'integer' },
    promotion: {
      properties: {
        name: { type: 'text', fields: { raw: { type: 'search_as_you_type' } } },
        rate: { type: 'double' },
      },
    },
    media: {
      properties: {
        thumbnail: { type: 'text' },
        image: { type: 'text' },
      },
    },
    createdAt: { type: 'date' },
    updatedAt: { type: 'date' },
  };
}
