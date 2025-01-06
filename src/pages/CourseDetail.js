import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { courseApi } from '../utils/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ThreeScene from '../components/ThreeScene';

const CourseDetail = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [course, setCourse] = useState(null);
    const [currentContent, setCurrentContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [enrolling, setEnrolling] = useState(false);

    useEffect(() => {
        fetchCourseDetails();
    }, [id]);

    const fetchCourseDetails = async () => {
        try {
            const response = await courseApi.getCourseById(id);
            setCourse(response.data);
            if (response.data.content.length > 0) {
                setCurrentContent(response.data.content[0]);
            }
        } catch (error) {
            console.error('Error fetching course:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleEnroll = async () => {
        try {
            setEnrolling(true);
            await courseApi.enrollCourse(id);
            fetchCourseDetails();
        } catch (error) {
            console.error('Error enrolling in course:', error);
        } finally {
            setEnrolling(false);
        }
    };

    const updateProgress = async (contentId, completed) => {
        try {
            await courseApi.updateProgress(id, { contentId, completed });
            fetchCourseDetails();
        } catch (error) {
            console.error('Error updating progress:', error);
        }
    };

    if (loading) return <LoadingSpinner />;
    if (!course) return <div>Course not found</div>;

    const isEnrolled = user && course.enrolledStudents.some(
        enrollment => enrollment.student === user._id
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        {course.title}
                    </h1>

                    {currentContent && (
                        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                            <h2 className="text-xl font-semibold mb-4">
                                {currentContent.title}
                            </h2>

                            {currentContent.type === '3d_model' && (
                                <div className="h-[500px] relative">
                                    <ThreeScene modelUrl={currentContent.data.modelUrl} />
                                </div>
                            )}

                            {currentContent.type === 'video' && (
                                <div className="aspect-w-16 aspect-h-9">
                                    <iframe
                                        src={currentContent.data.url}
                                        className="w-full h-full"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}

                            {currentContent.type === 'text' && (
                                <div className="prose max-w-none">
                                    {currentContent.data.content}
                                </div>
                            )}
                        </div>
                    )}

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">About this course</h2>
                        <p className="text-gray-600">{course.description}</p>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                        {user && !isEnrolled && (
                            <button
                                onClick={handleEnroll}
                                disabled={enrolling}
                                className="w-full btn-primary mb-6"
                            >
                                {enrolling ? 'Enrolling...' : 'Enroll Now'}
                            </button>
                        )}

                        <h3 className="text-lg font-semibold mb-4">Course Content</h3>
                        <div className="space-y-2">
                            {course.content.map((content, index) => (
                                <button
                                    key={content._id}
                                    onClick={() => setCurrentContent(content)}
                                    className={`w-full text-left p-3 rounded-md transition-colors ${
                                        currentContent?._id === content._id
                                            ? 'bg-primary text-white'
                                            : 'hover:bg-gray-100'
                                    }`}
                                >
                                    <div className="flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2 text-sm">
                                            {index + 1}
                                        </span>
                                        <span className="flex-1">{content.title}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;