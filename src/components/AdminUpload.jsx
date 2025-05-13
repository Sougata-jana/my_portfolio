import React from 'react'
import { useState } from 'react'
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
        
        // Create preview URL for the selected image
        if (selectedFile) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result)
            }
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
            
            // Reset form
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
        <div className='max-w-xl mx-auto p-4'>
            <div className="flex justify-between items-center mb-6">
                <h2 className='text-2xl font-bold'>Upload New Project</h2>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                    Logout
                </button>
            </div>
            <form onSubmit={handleUpload} className='space-y-6'>
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Project Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter project title"
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Project Description
                    </label>
                    <textarea
                        id="description"
                        value={decs}
                        onChange={(e) => setDecs(e.target.value)}
                        required
                        rows='4'
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter project description"
                    />
                </div>

                <div>
                    <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-1">
                        Project Link
                    </label>
                    <input
                        type="url"
                        id="link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter project URL"
                    />
                </div>

                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                        Project Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        onChange={handleFileChange}
                        accept="image/*"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {preview && (
                        <div className="mt-2">
                            <img
                                src={preview}
                                alt="Preview"
                                className="max-w-xs h-48 object-cover rounded-md"
                            />
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                >
                    {loading ? 'Uploading...' : 'Upload Project'}
                </button>
            </form>
        </div>
    )
}
