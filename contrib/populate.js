import EsIndexManager from '../src/config/elasticsearch/esIndexManager';
import itemData from './elasticsearch/test-data/Items';
import { Item } from '../src/models/elasticsearch/Item';

const main = async () => {
  console.log('[+] ES - populating database with test data | initiated');
  const indexManager = new EsIndexManager('item-v1');
  await indexManager.createIndex(Item.MAPPING);
  await indexManager.addDocument(itemData);
  console.log('[+] ES - populating database with test data | completed');
};

main();
