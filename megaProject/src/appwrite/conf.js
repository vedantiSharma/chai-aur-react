import config from "../config/config";
import {Client,Databases ,Storage ,ID }from 'appwrite'

export class conf{ 

    client = new Client();
    databases;
    bucket;


    constructor() {
        this.client //giving refrence of client variavble
            .setEndPoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
            this.databases = new Databases(this.client)
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

    async updatePost(slug,{title  ,content , featuredImage ,status}){
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

    async deletePost(slug){
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
            return true;
            
        } catch (error) {
            console.log("Appwrite service :: deletePost::error" , error) ;
            return false;
            
        }
    }


    async getPosts(queries=[Query.equals("status","active ")]){
        try {

            return await this.databases.ListDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
                
            )
            
        } catch (error) {
            console.log("Appwrite service :: getPosts::error" , error) ;
            return false;
            
        }

    }

    
    //upload file services
    async UploadFile(file){
        try {

            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Appwrite service :: deletePost::error" , error) ;
            return false;
            
        }
    }

    async deleteFile(fileId){
        try {
            
            return await this.databases.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile::error" , error) ;
            return false;
            
            
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }


}



const confservices = new conf();
export default confservices;