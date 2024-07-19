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

    async createAccount({email,password,name}){
        try{
            console.log('creating account');
            console.log(email,password,name);
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            console.log(userAccount);
            return userAccount;
        }catch(err){
            // console.log(err.code);//409 means email already exsts
            console.log(err.code);
            return err;
        }
    }

    async login({email,password}){
        try{
            console.log('creating session')
            return await this.account.createEmailPasswordSession(email,password)
        }catch(err){
            console.log('error in session creation',err);
            return err;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get(); //for this to not through error, Session(login) must be created
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

    // async googleLogin() {
    //     const res = await this.account.createOAuth2Session( //remove res, as no return
    //         'google',
    //         'https://blog-it-omega.vercel.app',
    //         'https://localhost:5173/login',
    //     )
    //     console.log(res); //remove 
    //     return res; //remove
    // }
}

const authService = new AuthService;

export default authService