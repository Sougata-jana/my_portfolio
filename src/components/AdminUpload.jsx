import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import appwriteConfi from '../appwrite/appwriteConfig'
import { useAuth } from '../context/AuthContext'

export default function AdminUpload() {
    const [title, setTitle] = useState('')
    const [decs, setDecs] = useState('')
    const [link, setLink] = useState('')
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const [preview, setPreview] = useState(null)
    const navigate = useNavigate()
    const { logout } = useAuth()

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/login')
        } catch (error) {
            console.error('Error logging out:', error)
        }
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        setFile(selectedFile)
        if (selectedFile) {
            const reader = new FileReader()
            reader.onloadend = () => setPreview(reader.result)
            reader.readAsDataURL(selectedFile)
        }
    }

    const handleUpload = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const uploadedFile = await appwriteConfi.uploadFile(file)
            const fileid = uploadedFile.$id
            const projectData = {
                title,
                description: decs,
                img: fileid,
                url: link
            }
            await appwriteConfi.submitProject(projectData)
            alert('Project uploaded successfully')
            setTitle('')
            setDecs('')
            setLink('')
            setFile(null)
            setPreview(null)
        } catch (error) {
            console.error('Error uploading project:', error);
            alert(`Error uploading project: ${error.message}`);
        }
        setLoading(false);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-500 to-teal-400 py-12 px-4">
            <div className="w-full max-w-2xl bg-white/80 rounded-2xl shadow-2xl p-8 border border-blue-200 backdrop-blur-md">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-extrabold text-blue-700 tracking-wide flex items-center gap-2">
                        <span className="bg-gradient-to-r from-blue-500 to-teal-400 p-2 rounded-full shadow">
                            <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zm0 2c-2.67 0-8 1.337-8 4v2a1 1 0 001 1h14a1 1 0 001-1v-2c0-2.663-5.33-4-8-4z" />
                            </svg>
                        </span>
                        Upload New Project
                    </h2>
                    <button
                        onClick={handleLogout}
                        className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-lg font-semibold shadow hover:from-pink-500 hover:to-red-500 transition"
                    >
                        Logout
                    </button>
                </div>
                <form onSubmit={handleUpload} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-semibold text-blue-700 mb-1">
                            Project Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 placeholder-blue-300 text-blue-900 transition"
                            placeholder="Enter project title"
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-semibold text-blue-700 mb-1">
                            Project Description
                        </label>
                        <textarea
                            id="description"
                            value={decs}
                            onChange={(e) => setDecs(e.target.value)}
                            required
                            rows="3"
                            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 placeholder-blue-300 text-blue-900 transition"
                            placeholder="Enter project description"
                        />
                    </div>
                    <div>
                        <label htmlFor="link" className="block text-sm font-semibold text-blue-700 mb-1">
                            Project Link
                        </label>
                        <input
                            type="url"
                            id="link"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 placeholder-blue-300 text-blue-900 transition"
                            placeholder="Enter project URL"
                        />
                    </div>
                    <div>
                        <label htmlFor="image" className="block text-sm font-semibold text-blue-700 mb-1">
                            Project Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            onChange={handleFileChange}
                            accept="image/*"
                            required
                            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900 transition"
                        />
                        {preview && (
                            <div className="mt-3 flex justify-center">
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="max-w-xs h-40 object-cover rounded-lg shadow-md border border-blue-100"
                                />
                            </div>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:from-teal-400 hover:to-blue-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-50 transition-all duration-300"
                    >
                        {loading ? 'Uploading...' : 'Upload Project'}
                    </button>
                </form>
            </div>
        </div>
    )
}