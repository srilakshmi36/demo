import * as JsStore from 'jsstore';
import { IDataBase, DATA_TYPE, ITable } from 'jsstore';
import { Product } from '../model/product';
import { environment } from 'src/environments/environment';
declare var require: any;

const getWorkerPath = () => {
  if (environment.production) {
    return require('file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js');
  } else {
    return require('file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js');
  }
};
export const idbCon = new JsStore.Connection(new Worker(getWorkerPath().default));
export var dbname = 'demo';


function getDatabase () {
  var tblProduct: ITable = {
    name: 'Products',
    columns: {
      id: {
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        notNull: true,
        dataType: DATA_TYPE.String
      },
      
      price: {
        notNull: true,
        dataType: DATA_TYPE.String
      },
      
    }
  };
  const dataBase: IDataBase = {
    name: dbname,
    tables: [tblProduct]
  };
  return dataBase;
};

function getAvailableProducts() {
  const availableProducts: Product[] = [{
    price: "23456",
    name: 'Honda'
  }];
  return availableProducts;
}

export const initJsStore = async () => {
  const dataBase = getDatabase();
  const isDbCreated = await idbCon.initDb(dataBase);
  if (isDbCreated) {
    idbCon.insert({
      into: 'Products',
      values: getAvailableProducts()
    })
  }
};
export class IdbService  {
}
