import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Play, Clock, ThumbsUp, User } from 'lucide-react';

// Course category data
const categoryData = {
  'full-stack': {
    title: 'Full Stack Development',
    description: 'Master both front-end and back-end technologies to build complete web applications.',
    color: 'from-blue-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    courses: [
      {
        id: 'fs1',
        title: 'The Complete Web Developer in 2025',
        creator: 'Zero To Mastery',
        thumbnail: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        duration: '35 hours',
        likes: '98k',
        students: '250k+',
        link: 'https://www.youtube.com/watch?v=JgwI22y_eFA'
      },
      {
        id: 'fs2',
        title: 'MERN Stack Front To Back',
        creator: 'Traversy Media',
        thumbnail: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        duration: '12 hours',
        likes: '45k',
        students: '120k+',
        link: 'https://www.youtube.com/watch?v=7CqJlxBYj-M'
      },
      {
        id: 'fs3',
        title: 'Full Stack React & Firebase',
        creator: 'Fireship',
        thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        duration: '8 hours',
        likes: '32k',
        students: '85k+',
        link: 'https://www.youtube.com/watch?v=m_u6P5k0vP0'
      },
      {
        id: 'fs4',
        title: 'Full Stack Development with Django',
        creator: 'Dennis Ivy',
        thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        duration: '16 hours',
        likes: '28k',
        students: '75k+',
        link: 'https://www.youtube.com/watch?v=PtQiiknWUcI'
      }
    ]
  },
  'machine-learning': {
    title: 'Machine Learning',
    description: 'Learn to build intelligent systems that can learn from data and make predictions.',
    color: 'from-green-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    courses: [
      {
        id: 'ml1',
        title: 'Machine Learning Specialization',
        creator: 'Andrew Ng',
        thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
        duration: '40 hours',
        likes: '120k',
        students: '300k+',
        link: 'https://www.youtube.com/watch?v=jGwO_UgTS7I'
      },
      {
        id: 'ml2',
        title: 'Python for Machine Learning',
        creator: 'freeCodeCamp',
        thumbnail: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        duration: '15 hours',
        likes: '85k',
        students: '220k+',
        link: 'https://www.youtube.com/watch?v=7eh4d6sabA0'
      },
      {
        id: 'ml3',
        title: 'TensorFlow for Beginners',
        creator: 'Tech With Tim',
        thumbnail: 'https://images.unsplash.com/photo-1677442135068-c61d16cbc2f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
        duration: '10 hours',
        likes: '42k',
        students: '110k+',
        link: 'https://www.youtube.com/watch?v=tPYj3fFJGjk'
      }
    ]
  },
  'artificial-intelligence': {
    title: 'Artificial Intelligence',
    description: 'Explore the cutting-edge field of AI and its applications in various domains.',
    color: 'from-purple-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1677442135136-760c813028c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    courses: [
      {
        id: 'ai1',
        title: 'AI For Everyone',
        creator: 'Andrew Ng',
        thumbnail: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        duration: '8 hours',
        likes: '75k',
        students: '180k+',
        link: 'https://www.youtube.com/watch?v=JMUxmLyrhSk'
      },
      {
        id: 'ai2',
        title: 'Deep Learning Fundamentals',
        creator: 'IBM Developer',
        thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
        duration: '20 hours',
        likes: '62k',
        students: '150k+',
        link: 'https://www.youtube.com/watch?v=GIsg-ZUy0MY'
      },
      {
        id: 'ai3',
        title: 'Natural Language Processing with Python',
        creator: 'Sentdex',
        thumbnail: 'https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        duration: '15 hours',
        likes: '48k',
        students: '120k+',
        link: 'https://www.youtube.com/watch?v=FLZvOKSCkxY'
      }
    ]
  },
  'dsa': {
    title: 'Data Structures & Algorithms',
    description: 'Build a strong foundation in DSA to excel in technical interviews and problem-solving.',
    color: 'from-yellow-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    courses: [
      {
        id: 'dsa1',
        title: 'Striver\'s SDE Sheet - Complete Course',
        creator: 'take U forward',
        thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        duration: '45 hours',
        likes: '110k',
        students: '280k+',
        link: 'https://www.youtube.com/watch?v=WNtzUR_MwUQ'
      },
      {
        id: 'dsa2',
        title: 'Data Structures Easy to Advanced',
        creator: 'William Fiset',
        thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        duration: '18 hours',
        likes: '85k',
        students: '200k+',
        link: 'https://www.youtube.com/watch?v=RBSGKlAvoiM'
      },
      {
        id: 'dsa3',
        title: 'Dynamic Programming - Algorithms',
        creator: 'Aditya Verma',
        thumbnail: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        duration: '12 hours',
        likes: '65k',
        students: '150k+',
        link: 'https://www.youtube.com/watch?v=nqowUJzG-iM'
      },
      {
        id: 'dsa4',
        title: 'Algorithms and Data Structures Tutorial',
        creator: 'freeCodeCamp',
        thumbnail: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80',
        duration: '10 hours',
        likes: '92k',
        students: '240k+',
        link: 'https://www.youtube.com/watch?v=8hly31xKli0'
      }
    ]
  }
};

const CourseCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [categoryInfo, setCategoryInfo] = useState<any>(null);
  
  useEffect(() => {
    if (category && categoryData[category as keyof typeof categoryData]) {
      setCategoryInfo(categoryData[category as keyof typeof categoryData]);
    }
  }, [category]);

  if (!categoryInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Category not found</h2>
          <p className="text-gray-600 mb-6">The course category you're looking for doesn't exist.</p>
          <Link
            to="/courses"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className={`absolute inset-0 bg-gradient-to-r ${categoryInfo.color} opacity-90`}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{categoryInfo.title}</h1>
            <p className="text-xl mb-8">{categoryInfo.description}</p>
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Recommended Courses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryInfo.courses.map((course: any) => (
              <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <a 
                      href={course.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-indigo-600 text-white p-3 rounded-full"
                    >
                      <Play className="h-8 w-8" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">By {course.creator}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>{course.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                  
                  <a 
                    href={course.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                  >
                    Watch on YouTube
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Explore Other Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(categoryData)
              .filter(([key]) => key !== category)
              .slice(0, 3)
              .map(([key, value]) => (
                <Link to={`/courses/${key}`} key={key} className="group">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105">
                    <div className="h-40 relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-80`}></div>
                      <img 
                        src={value.image} 
                        alt={value.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-xl font-bold text-white px-4 text-center">{value.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600">{value.description}</p>
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
          
          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              View All Categories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseCategory;