import config from "../config/config";
import {Client, Databases, ID, Storage} from "appwrite";

export class DBService{
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createUserDocument(data){
            const detailsObject = {...data}
            const allDetails = JSON.stringify(detailsObject);
        try {
            return await this.databases.createDocument(config.appwriteDatabaseId,
                config.appwriteUsersCollectionId,data.userId,{ //replace the docId with its userId
                ...data,
                allDetails
            });
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async getUserDocument(docId){
        try {
            const userDocument = await this.databases.getDocument(config.appwriteDatabaseId,config.appwriteUsersCollectionId,docId);
            console.log(userDocument);
            if(userDocument){console.log('got')}
            if(!userDocument){console.log('not got')}
            return userDocument;
        } catch (error) {
            console.log(error.code);
            return error.code;
        }
    }
}

const dbService = new DBService;
export default dbService;