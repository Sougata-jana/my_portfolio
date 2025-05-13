const confi = {
    appwrite: import.meta.env.VITE_APPWRITE_URL,
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBuckeyId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteContactCollectionID: String(import.meta.env.VITE_APPWRITE_CONTACT_COLLECTION_ID),
}
export default confi;