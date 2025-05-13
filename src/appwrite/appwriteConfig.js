import confi from "../config/confi";

import { Client, Databases, Storage, ID, Account, Permission, Role } from "appwrite";

const client = new Client();

client
    .setEndpoint(confi.appwrite)
    .setProject(confi.appwriteProjectId);

export const databases = new Databases(client);
export const storage = new Storage(client);
export const account = new Account(client);

export class appwriteConfig {
    constructor(){
        this.client = client;
        this.databases = databases;
        this.storage = storage;
        this.account = account;
    }

    // Authentication methods
    async createSession(email, password) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error("Appwrite service :: createSession :: error", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Appwrite service :: getCurrentUser :: error", error);
            throw error;
        }
    }

    async deleteSession() {
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            console.error("Appwrite service :: deleteSession :: error", error);
            throw error;
        }
    }

    async getPosts() {
        try {
            const response = await this.databases.listDocuments(
                confi.appwriteDatabaseId,
                confi.appwriteCollectionID,
            );
            return response.documents;
        } catch (error) {
            console.error("Appwrite service :: getPosts :: error", error.message);
            throw new Error("Failed to fetch posts. Please try again.");
        }
    }

    async uploadFile(file) {
        try {
            const response = await this.storage.createFile(
                confi.appwriteBuckeyId,
                ID.unique(),
                file
            );
            console.log("Appwrite service :: uploadFile :: response", response);
            return response;
        } catch (error) {
            console.error("Appwrite service :: uploadFile :: error", error.message);
            console.error("Appwrite service :: uploadFile :: Appwrite error", error);
            throw new Error(`Failed to upload file: ${error.message}. Please try again.`);
        }
    }

    getFilePreview(fileId) {
        try {
            return this.storage.getFileView(
                confi.appwriteBuckeyId,
                fileId
            );
        } catch (error) {
            console.error("Appwrite service :: getFilePreview :: error", error.message);
            throw new Error("Failed to get file preview. Please try again.");
        }
    }

    async submitProject(data) {
        try {
            const response = await this.databases.createDocument(
                confi.appwriteDatabaseId,
                confi.appwriteCollectionID,
                ID.unique(),
                data,
            );
            console.log("Appwrite service :: submitProject :: response", response);
            return response;
        } catch (error) {
            console.error("Appwrite service :: submitProject :: error", error);
            console.log("Appwrite service :: submitProject :: data", data);
            throw new Error("Failed to submit project. Please try again.");
        }
    }

    async submitContact(data){
        try {
            const response = await this.databases.createDocument(
                confi.appwriteDatabaseId,
                confi.appwriteContactCollectionID,
                ID.unique(),
                data
            );
            console.log("Appwrite service :: submitContect :: response", response);
            return response;
        } catch (error) {
            console.error("Appwrite service :: submitContect :: error", error.message);
            throw new Error("Failed to submit contect. Please try again.");
            
        }
        
    }

    async getProjects() {
        try {
            const response = await this.databases.listDocuments(
                confi.appwriteDatabaseId,
                confi.appwriteCollectionID,
            );
            const sortedDocuments = response.documents.sort((a, b) => {
                return new Date(b.$createdAt) - new Date(a.$createdAt);
            });
            return sortedDocuments.slice(0, 10);
        } catch (error) {
            console.error("Appwrite service :: getProjects :: error", error.message);
            throw new Error("Failed to fetch projects. Please try again.");
        }
    }
}

const appwriteConfi = new appwriteConfig();

export default appwriteConfi;
