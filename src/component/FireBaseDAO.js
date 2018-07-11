import firebase from 'firebase';
import Config from '../config/FireBaseConfig'

export default class FirebaseDao {
    
    constructor(){
        firebase.initializeApp(Config);
    } 

    newKey(){
        return firebase.database().ref().child('projectItem').push().key;
    }

    getItem(key) {
        return firebase.database().ref('/projectItem/' + key);
    }

    update(key, item) {
        var updates = {};
        
        updates['/projectItem/' + key] = item;
        
        return firebase.database().ref().update(updates);
    }

    list(pagesize) {

        return;
    }

    remove(key) {
        return firebase.database().ref('/projectItem/').child(key).remove();
    }

    off() {
        return firebase.database().ref().off();
    }
}