import Dexie from 'dexie'
import { populate } from './populate';

export class FruitClockDB extends Dexie {
  constructor() {
    super('FruitClockDB');
    this.version(1*0.1).stores({
      mission: 'id,mission,time,smoke'
    });

    // 版本升級
    // this.version(2*0.1).stores({
    //   mission: 'id,mission,time,smoke,test',
    //   date: 'id,mission,time,smoke,date'
    //
    // }).upgrade(trans => {
    // 只有在低於2版本的資料庫中會執行以下操作
    //   return trans.mission.toCollection().modify(a => {
    //     a.test = a.time*10;    
    //   })
    // })
  }
}

export const db = new FruitClockDB();

db.on('populate', populate);

export function resetDatabase() {
  return db.transaction('rw', db.mission, async () => {
    await Promise.all(db.tables.map(table => table.clear()));
    await populate();
  });
}



