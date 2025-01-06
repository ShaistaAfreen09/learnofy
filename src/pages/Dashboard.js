import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import CourseCard from '../components/CourseCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { courseApi } from '../utils/api';

const Dashboard = () => {
    const { user } = useAuth();
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [createdCourses, setCreatedCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            if (user.role === 'tutor') {
                const response = await courseApi.getCreatedCourses();
                setCreatedCourses(response.data);
            } else {
                const response = await courseApi.getEnrolledCourses();
                setEnrolledCourses(response.data);
            }
        } catch (error) {
            console.error('Error fetching courses:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <LoadingSpinner />;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Welcome back, {user.name}!
                </h1>
                <p className="mt-2 text-gray-600">
                    {user.role === 'tutor' 
                        ? 'Manage your courses and track student progress'
                        : 'Continue your learning journey'
                    }
                </p>
            </div>

            {user.role === 'tutor' ? (
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Your Courses</h2>
                        <Link to="/courses/create" className="btn-primary">
                            Create New Course
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {createdCourses.map(course => (
                            <CourseCard key={course._id} course={course} isTutor={true} />
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                        Enrolled Courses
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {enrolledCourses.map(course => (
                            <CourseCard
                                key={course._id}
                                course={course}
                                progress={course.progress}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;