import { getDatabase, ref, onValue} from "firebase/database";
const db = getDatabase();


const database = getDatabase();

//const db = getDatabase("/tutorials");

class TutorialDataService {
  getAll() {
    return db;
  }

  getTemperature(){
    return db.child("temperature").get();
  }
  
  create(tutorial) {
    return db.push(tutorial);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new TutorialDataService();