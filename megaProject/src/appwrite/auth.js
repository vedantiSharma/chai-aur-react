import config from '../config/config'
import {ID , Client , Account} from "appwrite"

export class AuthService{
client = new Client();
account;
constructor(){
    this.client //giving refrence of client variavble
        .setEndPoint(appwrite_url)
        .setProject(appwrite_project_id);

        this.account = new Account();
}

async createAccount({email , password, name}) //makes understand that we pss the value and account will created
//use try-catch if in case account not created or created or half credentials etc
{
    try {
        const userAccount = await this.account.create(ID.unique() , email , password , name);
            if(userAccount){
                return userAccount
            }
            else{
                
            }



    } catch (error) {
        throw error;
    }
}



}



    const authservice = new AuthService();//creation of obj authservice



export default authservice