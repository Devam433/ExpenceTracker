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

    async createUserDocument({name,userId,email,profileImg}){
        console.log(name,userId,email,profileImg);
        try {
            return await this.databases.createDocument(config.appwriteDatabaseId,
                config.appwriteUsersCollectionId,ID.unique(),{ //slug is the documentId
                name,
                userId,
                email,
                profileImg,
            });
        } catch (error) {
            console.log(error)
        }
    }

}

const dbService = new DBService;
export default dbService;


