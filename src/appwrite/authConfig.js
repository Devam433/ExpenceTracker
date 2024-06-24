import config from "../config/config";

import { Client, Account, ID, Avatars} from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
                .setEndpoint(config.appwriteUrl)
                .setProject(config.appwriteProjectId);
        this.account= new Account(this.client);
        this.avatars = new Avatars(this.client);
    }

    async createAccount({Email,Password,Name}){
        try{
            const userAccount = await this.account.create(ID.unique(),Email,Password,Name);
            return userAccount;
        }catch(err){
            // console.log(err.code);//409 means email already exsts
            return err;
        }
    }

    async login({Email,Password}){
        try{
            return await this.account.createEmailPasswordSession(Email,Password)
        }catch(err){
            return err;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get(); //for this to not through error, Session must be created
        } catch (error) {
            console.log(error)
        }
        return null
    }

    generateInitials(name) {
        const initials = name.split(' ').map(word => word[0]).join('').toUpperCase();
        return initials;
    }

    getAvatarUrl(initials) {
        const avatarUrl = this.avatars.getInitials(initials).href;
        return avatarUrl;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log(error);
        }
    }

    async googleLogin() {
        const res = await this.account.createOAuth2Session( //remove res, as no return
            'google',
            'https://blog-it-omega.vercel.app',
            'https://localhost:5173/login',
        )
        console.log(res); //remove 
        return res; //remove
    }
}

const authService = new AuthService;

export default authService