import app from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import _ from 'lodash';
 
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

const gracePeriod = parseInt(process.env.REACT_APP_GRACE_PERIOD_MS!);

export type ImageMetadata = {
    title: string;
    url: string;
    key: string;
    time: number;
}

export type AnswerMetadata = {
    wish: string;
    changes: string;
    drawbacks: string;
    time: number;
}

export type ScoreMetadata = {
    name: string;
    score: number;
}
 
class Firebase {
    db: app.database.Database;
    storage: app.storage.Storage;
    constructor() {
        app.initializeApp(config);

        this.db = app.database();
        this.storage = app.storage();
    }

    /* Ep 1 Database API */
    ep1AnswerRefs = () => this.db.ref("ep1");

    ep1Answers = (onDatabaseRequestCompleteCallback: (data: AnswerMetadata[]) => void) => {
        this.ep1AnswerRefs().on("value", snapshot => {
            const data = _.reduce(snapshot.val() as Record<string, any>, (acc, v) => {
                
                // filter to files posted outside of the last 12 hours (43200000ms)
                const time = v.time as number;
                if(time > Date.now() - gracePeriod) return acc;

                acc.push({
                    wish: v.wish,
                    changes: v.changes,
                    drawbacks: v.drawbacks,
                    time
                });
                return acc; 
            }, [] as AnswerMetadata[]);
            onDatabaseRequestCompleteCallback(_.sortBy(data, (datum) => -datum.time));
        });
        return () => this.ep1AnswerRefs().off();
    }

    addEp1Answer = (wish: string, changes: string, drawbacks: string) => this.ep1AnswerRefs().push({wish, changes, drawbacks, time: Date.now()});

    /* Ep 2 Database API */
    ep2ImageMetadataEntryRefs = () => this.db.ref("ep2");
    ep2ImageMetadataEntryRef = (uid: string) => this.db.ref(`ep2/${uid}`);

    ep2ImageMetadataEntries = (onDatabaseRequestCompleteCallback: (data: ImageMetadata[]) => void) => {
        this.ep2ImageMetadataEntryRefs().on("value", snapshot => {
            const data = _.reduce(snapshot.val() as Record<string, any>, (acc, v, k) => {

                // filter to files posted outside of the last 12 hours (43200000ms)
                const time = v.time as number;
                if(time > Date.now() - gracePeriod) return acc;

                acc.push({
                    title: v.title as string,
                    url: v.url as string,
                    key: v.key as string,
                    time
                });
                return acc;
            }, [] as ImageMetadata[]);
            onDatabaseRequestCompleteCallback(_.sortBy(data, (datum) => -datum.time));
        });
        return () => this.ep2ImageMetadataEntryRefs().off()
    }

    addEp2Image = (img: any, title: string) => {
        const newMetadataEntry = this.ep2ImageMetadataEntryRefs().push();
        this.storage.ref(`ep2/${newMetadataEntry.key}`).put(img)
            .then(() => {
                return this.storage.ref(`ep2/${newMetadataEntry.key}`).getDownloadURL();
            })
            .then((url) => {
                newMetadataEntry.set({title, url, key: newMetadataEntry.key, time: Date.now()});
            });
        return newMetadataEntry.key;
    }

    ep2ImageFileRef = (uid: string) => this.storage.ref(`ep2/${uid}`);
    ep2ImageFileUrl = (uid: string) => this.ep2ImageFileRef(uid).getDownloadURL();

    /* Ep 5 Database API */
    ep5ScoreEntryRefs = () => this.db.ref("ep5");
    ep5ScoreEntryRef = (uid: string) => this.db.ref(`ep5/${uid}`);

    ep5ScoreEntries = (onDatabaseRequestCompleteCallback: (data: ScoreMetadata[]) => void) => {
        this.ep5ScoreEntryRefs().on("value", snapshot => {
            console.log(snapshot.val());
            const data = _.reduce(snapshot.val() as Record<string, any>, (acc, v) => {
                acc.push({
                    name: v.name as string,
                    score: parseInt(v.score as string)
                })
                return acc;
            }, [] as ScoreMetadata[]);
            onDatabaseRequestCompleteCallback(_.sortBy(data, (datum) => -datum.score));
        });
        return () => this.ep5ScoreEntryRefs().off();
    }

    addEp5Score = (name: string, score: number) => {
        this.ep5ScoreEntryRefs().push({ name, score })
    }
}
 
export default Firebase;