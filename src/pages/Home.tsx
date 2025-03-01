import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Users, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unlock Your Potential with Learnofy
            </h1>
            <p className="text-xl mb-8">
              Access high-quality courses from top educators and industry experts. Learn at your own pace and advance your career.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/courses"
                className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
              >
                Explore Courses
              </Link>
              <Link
                to="/register"
                className="inline-block bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Learnofy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive learning experience with features designed to help you succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Curated Content</h3>
              <p className="text-gray-600">
                Access carefully selected courses from the best educators and platforms, organized for optimal learning.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Education</h3>
              <p className="text-gray-600">
                Learn from industry experts and top educators with proven track records in their respective fields.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Learn at Your Pace</h3>
              <p className="text-gray-600">
                Access course content anytime, anywhere, and learn at a pace that suits your schedule and learning style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most popular course categories and start learning today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/courses/full-stack" className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">Full Stack Development</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">
                    Learn to build complete web applications from front-end to back-end.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link to="/courses/machine-learning" className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">Machine Learning</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">
                    Master the fundamentals of machine learning and data science.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link to="/courses/artificial-intelligence" className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">Artificial Intelligence</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">
                    Explore the cutting-edge field of artificial intelligence.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link to="/courses/dsa" className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="h-48 bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">Data Structures & Algorithms</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">
                    Build a strong foundation in DSA for technical interviews.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of learners who are already advancing their careers with Learnofy.
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;