import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(    public afs: AngularFirestore) { 
    this.afs.firestore.settings({ timestampsInSnapshots: true });
  }

  getObject(document) {
    return this.afs.doc(document);
  }

  getList(document) {
    return this.afs.collection(document);
  }

  addItem(document, item) {
    return this.afs.collection(document).add(item);
  }

  removeItem(document, key) {
    return this.afs.collection(document).doc(key).delete();
  }

  updateItem(document, data) {
    return this.afs.doc(document).update(data);
  }

  query(document, options) {
    return this.afs.collection(document, options)
  }

}
