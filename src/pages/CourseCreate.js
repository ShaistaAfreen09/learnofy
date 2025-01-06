import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { courseApi } from '../utils/api';

const CourseCreate = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        level: 'beginner',
        price: 0,
        thumbnail: '',
        content: []
    });
    const [currentContent, setCurrentContent] = useState({
        title: '',
        type: 'text',
        data: { content: '' }
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleContentChange = (e) => {
        const { name, value } = e.target;
        if (name === 'type') {
            setCurrentContent({
                ...currentContent,
                type: value,
                data: value === 'text' ? { content: '' } : 
                      value === 'video' ? { url: '' } :
                      { modelUrl: '' }
            });
        } else if (name.startsWith('data.')) {
            setCurrentContent({
                ...currentContent,
                data: {
                    ...currentContent.data,
                    [name.split('.')[1]]: value
                }
            });
        } else {
            setCurrentContent({
                ...currentContent,
                [name]: value
            });
        }
    };

    const addContent = () => {
        if (!currentContent.title || !currentContent.data) return;
        
        setFormData({
            ...formData,
            content: [...formData.content, { ...currentContent, order: formData.content.length }]
        });
        
        setCurrentContent({
            title: '',
            type: 'text',
            data: { content: '' }
        });
    };

    const removeContent = (index) => {
        setFormData({
            ...formData,
            content: formData.content.filter((_, i) => i !== index)
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await courseApi.createCourse(formData);
            navigate(`/courses/${response.data._id}`);
        } catch (error) {
            setError(error.response?.data?.message || 'Error creating course');
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Course</h1>

            {error && (
                <div className="mb-4 bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Course Information */}
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Course Information</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Course Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="mt-1 input-field"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={4}
                                className="mt-1 input-field"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Category
                                </label>
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="mt-1 input-field"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Level
                                </label>
                                <select
                                    name="level"
                                    value={formData.level}
                                    onChange={handleChange}
                                    className="mt-1 input-field"
                                    required
                                >
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="advanced">Advanced</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Thumbnail URL
                            </label>
                            <input
                                type="text"
                                name="thumbnail"
                                value={formData.thumbnail}
                                onChange={handleChange}
                                className="mt-1 input-field"
                                placeholder="https://example.com/thumbnail.jpg"
                            />
                        </div>
                    </div>
                </div>

                {/* Course Content */}
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Course Content</h2>
                    
                    {/* Content List */}
                    <div className="mb-6">
                        {formData.content.map((content, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-md mb-2"
                            >
                                <div>
                                    <h3 className="font-medium">{content.title}</h3>
                                    <p className="text-sm text-gray-500">{content.type}</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => removeContent(index)}
                                    className="text-red-600 hover:text-red-800"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Add Content Form */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Content Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={currentContent.title}
                                onChange={handleContentChange}
                                className="mt-1 input-field"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Content Type
                            </label>
                            <select
                                name="type"
                                value={currentContent.type}
                                onChange={handleContentChange}
                                className="mt-1 input-field"
                            >
                                <option value="text">Text</option>
                                <option value="video">Video</option>
                                <option value="3d_model">3D Model</option>
                            </select>
                        </div>

                        {currentContent.type === 'text' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Content
                                </label>
                                <textarea
                                    name="data.content"
                                    value={currentContent.data.content}
                                    onChange={handleContentChange}
                                    rows={4}
                                    className="mt-1 input-field"
                                />
                            </div>
                        )}

                        {currentContent.type === 'video' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Video URL
                                </label>
                                <input
                                    type="text"
                                    name="data.url"
                                    value={currentContent.data.url}
                                    onChange={handleContentChange}
                                    className="mt-1 input-field"
                                    placeholder="https://example.com/video.mp4"
                                />
                            </div>
                        )}

                        {currentContent.type === '3d_model' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    3D Model URL
                                </label>
                                <input
                                    type="text"
                                    name="data.modelUrl"
                                    value={currentContent.data.modelUrl}
                                    onChange={handleContentChange}
                                    className="mt-1 input-field"
                                    placeholder="https://example.com/model.glb"
                                />
                            </div>
                        )}

                        <button
                            type="button"
                            onClick={addContent}
                            className="btn-secondary"
                        >
                            Add Content
                        </button>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary"
                    >
                        {loading ? 'Creating Course...' : 'Create Course'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CourseCreate;