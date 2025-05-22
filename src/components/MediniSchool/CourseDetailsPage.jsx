import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Target, Book, User, DollarSign } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

// Import course data directly
import courseData from './courses.json';

// Import logos
import autodeskLogo from '@/assets/Logos/autodesk-learning-partner-logo-rgb-black.png';
import bentleyLogo from '@/assets/Logos/Bentley-Training-Partner-Logo.jpg';

// Define a placeholder image
const placeholderImage = "/placeholder.svg";

// Map provider IDs to their logos
const providerLogos = {
  'AUTODESK': autodeskLogo,
  'BENTLEY': bentleyLogo,
  'DASSAULT': autodeskLogo, // Fallback to autodesk logo
  'BIM_CONSTRUCTION': autodeskLogo, // Fallback to autodesk logo
  'IT': autodeskLogo, // Fallback to autodesk logo
  'OTHER': autodeskLogo // Fallback to autodesk logo
};

const CourseDetailsPage = () => {
  const { courseName } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [providerLogo, setProviderLogo] = useState(null);
  
  // Main theme color
  const mainColor = "rgb(25,65,75)";
  
  useEffect(() => {
    console.log('CourseDetailsPage mounted, courseName:', courseName);
    
    // Create a mapping for special cases
    const specialMappings = {
      'fusion-360': 'fusion',
      'autocad-mechanical': 'autocad',
      '3ds-max': '3ds-max'
    };
    
    // Find the course by ID
    const findCourse = () => {
      try {
        // Get all courses from all providers and categories
        const allCourses = [];
        
        courseData.courseProviders.forEach(provider => {
          provider.categories.forEach(category => {
            category.courses.forEach(course => {
              allCourses.push({...course, provider: provider.id, category: category.name});
            });
          });
        });
        
        console.log('All courses:', allCourses.length);
        console.log('Available course IDs:', allCourses.map(c => c.id));
        console.log('Looking for course ID:', courseName);
        
        // Check for special mappings first
        let found = null;
        if (specialMappings[courseName]) {
          const mappedId = specialMappings[courseName];
          console.log(`Special mapping found: ${courseName} -> ${mappedId}`);
          found = allCourses.find(c => c.id === mappedId);
        }
        
        // If no special mapping or not found with mapping, try exact match
        if (!found) {
          found = allCourses.find(c => c.id === courseName);
        }
        
        // If still not found, try different matching strategies
        if (!found) {
          console.log('Course not found by exact match, trying alternatives...');
          
          // Try without hyphens
          const simplifiedId = courseName.replace(/-/g, '');
          found = allCourses.find(c => c.id.replace(/-/g, '') === simplifiedId);
          
          // Try partial match
          if (!found) {
            found = allCourses.find(c => 
              courseName.includes(c.id) || c.id.includes(courseName)
            );
          }
          
          // If still not found, use the first course (for testing)
          if (!found && allCourses.length > 0) {
            console.log('Using first course as fallback');
            found = allCourses[0];
          }
        }
        
        if (found) {
          console.log('Found course:', found);
          setCourse(found);
          
          // Find the provider for this course
          const provider = courseData.courseProviders.find(p => 
            p.categories.some(cat => 
              cat.courses.some(c => c.id === found.id)
            )
          );
          
          if (provider) {
            console.log('Course provider:', provider.id);
            setProviderLogo(providerLogos[provider.id] || providerLogos['OTHER']);
          } else {
            setProviderLogo(providerLogos['OTHER']);
          }
        } else {
          console.error('No courses found at all');
        }
      } catch (error) {
        console.error('Error finding course:', error);
      } finally {
        setLoading(false);
      }
    };
    
    findCourse();
  }, [courseName]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Course Not Found</h2>
        <p className="text-lg mb-8">We couldn't find the course you're looking for.</p>
        <Link 
          to="/mediniedutech" 
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Courses
        </Link>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Provider Logo */}
        <div className="bg-white py-4 px-6 flex justify-between items-center border-b">
          {providerLogo && (
            <img 
              src={providerLogo} 
              alt="Provider Logo" 
              className="h-12 object-contain"
            />
          )}
          <Link 
            to="/mediniedutech"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Back to Courses
          </Link>
        </div>
        
        {/* Course Header */}
        <div className="relative h-80 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-8 max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl">{course.description}</p>
            </div>
          </div>
        </div>
        
        {/* Course Info Section */}
        <div className="p-8">
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
              <Clock className="text-blue-600 mr-2" size={20} />
              <span className="font-medium">{course.duration}</span>
            </div>
            <div className="flex items-center bg-green-50 px-4 py-2 rounded-full">
              <Target className="text-green-600 mr-2" size={20} />
              <span className="font-medium">{course.difficulty}</span>
            </div>
            <div className="flex items-center bg-amber-50 px-4 py-2 rounded-full">
              <User className="text-amber-600 mr-2" size={20} />
              <span className="font-medium">{course.instructor}</span>
            </div>
            <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
              <DollarSign className="text-purple-600 mr-2" size={20} />
              <span className="font-medium">₹{course.price}</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Curriculum */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">
                Curriculum
              </h2>
              <ul className="space-y-3">
                {course.curriculum && course.curriculum.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Learning Outcomes */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">
                What You'll Learn
              </h2>
              <ul className="space-y-3">
                {course.learningOutcomes && course.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mt-1 flex-shrink-0">
                      <Book className="text-green-600" size={16} />
                    </div>
                    <span className="ml-3">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Prerequisites Section */}
        <div className="bg-gray-50 p-8">
          <h2 className="text-2xl font-semibold mb-6">Prerequisites</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {course.prerequisites && course.prerequisites.map((prereq, index) => (
              <li key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <ChevronRight className="text-red-500 mr-2" size={18} />
                <span>{prereq}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Target Audience */}
        {course.targetAudience && (
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Who This Course is For</h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p>{course.targetAudience}</p>
            </div>
          </div>
        )}
        
        {/* CTA Section */}
        <div className="text-center py-10 bg-gradient-to-r from-blue-600 to-indigo-700">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Enhance Your Skills?</h2>
          <p className="text-white text-opacity-90 mb-6 max-w-2xl mx-auto">
            Join our course and take your career to the next level with industry-relevant skills.
          </p>
          <button 
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;