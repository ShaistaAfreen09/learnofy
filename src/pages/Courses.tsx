import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const courseCategories = [
  {
    id: 'full-stack',
    title: 'Full Stack Development',
    description: 'Master both front-end and back-end technologies to build complete web applications.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Learn to build intelligent systems that can learn from data and make predictions.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    description: 'Explore the cutting-edge field of AI and its applications in various domains.',
    image: 'https://images.unsplash.com/photo-1677442135136-760c813028c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Build a strong foundation in DSA to excel in technical interviews and problem-solving.',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Learn to build modern, responsive websites using the latest web technologies.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80',
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Create native and cross-platform mobile applications for iOS and Android.',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    color: 'from-blue-400 to-cyan-600'
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    description: 'Master cloud platforms like AWS, Azure, and Google Cloud for scalable applications.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    color: 'from-indigo-400 to-blue-600'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Learn to protect systems, networks, and programs from digital attacks.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    color: 'from-gray-700 to-gray-900'
  }
];

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const filteredCategories = courseCategories.filter(category => 
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Our Courses</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Discover curated content from the world's best educators and platforms, all in one place.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for courses..."
                  className="w-full px-5 py-4 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Search className="h-5 w-5 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Course Categories</h2>
          
          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category) => (
                <Link to={`/courses/${category.id}`} key={category.id} className="group">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 h-full">
                    <div className="h-48 relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-80`}></div>
                      <img 
                        src={category.image} 
                        alt={category.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-2xl font-bold text-white px-4 text-center">{category.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600">{category.description}</p>
                      <div className="mt-4 flex justify-end">
                        <span className="inline-block text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors">
                          Explore Courses →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No course categories found matching your search.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're constantly adding new courses and categories. Let us know what you'd like to learn next.
          </p>
          <a
            href="mailto:suggestions@learnofy.com"
            className="inline-block bg-indigo-600 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
          >
            Suggest a Course
          </a>
        </div>
      </section>
    </div>
  );
};

export default Courses;