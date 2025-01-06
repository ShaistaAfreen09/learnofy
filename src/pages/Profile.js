import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { userApi } from '../utils/api';
import LoadingSpinner from '../components/LoadingSpinner';

const Profile = () => {
    const { user, setUser } = useAuth();
    const [formData, setFormData] = useState({
        name: user?.name || '',
        bio: user?.bio || '',
        avatar: user?.avatar || ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await userApi.updateProfile(formData);
            setUser(response.data);
            setSuccess('Profile updated successfully!');
        } catch (error) {
            setError(error.response?.data?.message || 'Error updating profile');
        } finally {
            setLoading(false);
        }
    };

    if (!user) return <LoadingSpinner />;

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile Settings</h1>

            {error && (
                <div className="mb-4 bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                </div>
            )}

            {success && (
                <div className="mb-4 bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded">
                    {success}
                </div>
            )}

            <div className="bg-white shadow rounded-lg">
                <div className="px-6 py-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Profile Picture
                            </label>
                            <div className="mt-2 flex items-center space-x-4">
                                <img
                                    src={formData.avatar || 'https://via.placeholder.com/100'}
                                    alt="Profile"
                                    className="h-20 w-20 rounded-full object-cover"
                                />
                                <input
                                    type="text"
                                    name="avatar"
                                    value={formData.avatar}
                                    onChange={handleChange}
                                    placeholder="Enter image URL"
                                    className="input-field flex-1"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 input-field"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Bio
                            </label>
                            <textarea
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                rows={4}
                                className="mt-1 input-field"
                                placeholder="Tell us about yourself..."
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full btn-primary"
                            >
                                {loading ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="mt-8 bg-white shadow rounded-lg">
                <div className="px-6 py-8">
                    <h2 className="text-xl font-semibold mb-4">Account Information</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-500">
                                Email
                            </label>
                            <p className="mt-1">{user.email}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500">
                                Role
                            </label>
                            <p className="mt-1 capitalize">{user.role}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500">
                                Member Since
                            </label>
                            <p className="mt-1">
                                {new Date(user.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;