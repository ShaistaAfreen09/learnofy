import React from 'react';
import { BookOpen, Award, Users, Clock, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Learnofy</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're on a mission to make quality education accessible to everyone, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Learnofy was founded in 2023 with a simple yet powerful vision: to create a platform that connects learners with the best educational content available online.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We recognized that while there's an abundance of learning resources available, finding the right ones can be overwhelming. Our team of education enthusiasts and tech experts came together to solve this problem.
              </p>
              <p className="text-lg text-gray-600">
                Today, Learnofy serves thousands of learners worldwide, helping them discover curated content from top educators and platforms, all in one place.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're guided by a set of core principles that shape everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To democratize education by connecting learners with high-quality, curated content from the world's best educators and platforms.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                A world where anyone, regardless of their background or circumstances, can access the education they need to achieve their goals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Values</h3>
              <p className="text-gray-600">
                Quality, accessibility, inclusivity, and continuous improvement drive everything we do at Learnofy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind Learnofy who are dedicated to transforming education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Alex Johnson</h3>
                <p className="text-indigo-600 mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  Former educator with a passion for making learning accessible to all.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Chen</h3>
                <p className="text-indigo-600 mb-3">Chief Learning Officer</p>
                <p className="text-gray-600">
                  Curriculum expert with over 10 years in educational technology.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Michael Rodriguez</h3>
                <p className="text-indigo-600 mb-3">CTO</p>
                <p className="text-gray-600">
                  Tech visionary with a background in building educational platforms.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Emily Patel</h3>
                <p className="text-indigo-600 mb-3">Head of Content</p>
                <p className="text-gray-600">
                  Content strategist dedicated to finding the best learning resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Learning Community</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of a growing community of learners and take the next step in your educational journey.
          </p>
          <a
            href="/register"
            className="inline-block bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
          >
            Sign Up Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;