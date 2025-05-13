import { createContext, useContext, useState, useEffect } from 'react'
import appwriteConfi from '../appwrite/appwriteConfig'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        checkUser()
    }, [])

    const checkUser = async () => {
        try {
            const currentUser = await appwriteConfi.getCurrentUser()
            setUser(currentUser)
        } catch (error) {
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    const login = async (email, password) => {
        try {
            // First try to delete any existing session
            try {
                await appwriteConfi.deleteSession()
            } catch (error) {
                // Ignore error if no session exists
            }

            // Now create new session
            await appwriteConfi.createSession(email, password)
            await checkUser()
            return { success: true }
        } catch (error) {
            return { success: false, error: error.message }
        }
    }

    const logout = async () => {
        try {
            await appwriteConfi.deleteSession()
            setUser(null)
            return { success: true }
        } catch (error) {
            return { success: false, error: error.message }
        }
    }

    const value = {
        user,
        loading,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
} 