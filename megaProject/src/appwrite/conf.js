import config from "../config/config";
import {Databases ,Storage }from 'appwrite'

export class conf{ //tryin to push in github ,,,,,,,,,,,,,,,,

    client = new Client();
    databases;
    bucket;


    constructor() {
        this.client //giving refrence of client variavble
            .setEndPoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
            this.databases = new databases(this.client)
            this.bucket = new Storage(this.client)

    }

    async createPost({title , slug , userId , featuredImage ,status, content}){
        try {

            return await this.databases.createPost(
                config.appwriteBucketId,
                config.appwriteDatabaseId,
                slug,  // document-id
                {
                        title,
                        featuredImage,
                        content,
                        status,
                        userId
                }
            )
            
        } catch (error) {
            console.log( "Apprite service :: createpost:: error" , error);
        }
    }

    async updatePost(slug,{title  , userId , featuredImage ,status, content}){
        try {
            return await this.databases.updateDocument(

                config.appwriteDatabaseId,
                config.appwriteCollectionId,

                slug,
               { title,
                featuredImage,
                status,
                content}
            )
            
        } catch (error) {
            console.log( "Apprite service :: updatePost:: error" , error);
            
        }
    }

    async deletePost(slug,{title  , userId , featuredImage ,status, content}){
        try {
            { await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug)
                return true;
            }
               
            
        } catch (error) {
            console.log("Appwrite service :: deletePost::error" , error) ;
            return false;
        }
    }

    async getPost(slug){    
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
                
            )
            
        } catch (error) {
            console.log("Appwrite service :: deletePost::error" , error) ;
            return false;
            
        }
    }
}



const confservices = new conf();
export default confservices;