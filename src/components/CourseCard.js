import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course, progress }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src={course.thumbnail || 'https://via.placeholder.com/400x200'}
                alt={course.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                    {course.description}
                </p>
                
                {progress !== undefined && (
                    <div className="mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className="bg-primary h-2.5 rounded-full"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <span className="text-sm text-gray-500">
                            Progress: {progress}%
                        </span>
                    </div>
                )}

                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                        {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                    </span>
                    <Link
                        to={`/courses/${course._id}`}
                        className="btn-primary"
                    >
                        View Course
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;