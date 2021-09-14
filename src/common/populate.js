import {db} from "./Model";

export function populate() {
  db.mission.add({id:9,mission:'加載中',time:0,smoke:false})
  // db.mission.bulkAdd([
  //   {id:1,mission:'打疫苗',time:3,smoke:false},
  //   {id:2,mission:'吃飯',time:6,smoke:false},
  //   {id:3,mission:'睡覺',time:3,smoke:false},
  //   {id:4,mission:'打代碼',time:3,smoke:false}
  // ]);
}
