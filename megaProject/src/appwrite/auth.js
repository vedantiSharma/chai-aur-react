import config from "../config/config";
export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client //giving refrence of client variavble
            .setEndPoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) //makes understand that we pss the value and account will created //either use promise or async
    //use try-catch if in case account not created or created or half credentials etc
    {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({email , password})
            }
            else {
                return userAccount;

            }



        } catch (error) {
            throw error;
        }
    }

    async login({}){ //method login
        try {
              return  await this.account.createEmailSession(email , password)   
            
        } catch (error) {
            throw error ;
            
        }
    }

    async GetCurrentUser(){
        try {
          return await this.account.get({})
            
        } catch (error) {
            throw error;
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
            
        } catch (error) {
            throw error
        }
    }





}



const authservice = new AuthService();//creation of obj authservice to call the class



export default authservice