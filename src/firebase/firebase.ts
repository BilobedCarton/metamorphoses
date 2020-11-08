import app from 'firebase/app';
import 'firebase/database';
 
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
 
class Firebase {
    db: app.database.Database;
    constructor() {
        app.initializeApp(config);

        this.db = app.database();
    }

    /* Ep 1 Database API */
    ep1Answers = () => this.db.ref("ep1");
    ep1Answer = (uid: string) => this.db.ref(`ep1/${uid}`)
    addEp1Answer = (wish: string, changes: string, drawbacks: string) => this.ep1Answers().push({wish, changes, drawbacks});
}
 
export default Firebase;