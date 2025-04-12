import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Target, Book, User, DollarSign } from 'lucide-react';
import { useParams } from 'react-router-dom';

import courseProvidersData from "./courses.json"
const images = import.meta.glob("/src/assets/IMAGES/*.jpg", { eager: true });


const CourseDetailsPage = () => {
  const { courseName } = useParams();
  const [course, setCourse] = useState(null);
  
  // Main theme color for dark mode
  const mainDarkColor = "rgb(25,65,75)";
  
  useEffect(() => {
    // Flatten the nested courses structure to find the course by ID
    const allCourses = courseProvidersData.courseProviders.flatMap(provider => 
      provider.categories.flatMap(category => category.courses)
    );
    
    const foundCourse = allCourses.find(c => c.id === courseName);
    setCourse(foundCourse);
  }, [courseName]);

  if (!course) {
    return <div className="text-center text-2xl mt-20 dark:text-gray-200">Course Not Found</div>;
  }

  const courseImage = images[`/src/assets/IMAGES/${course.coverImage}`]?.default || "";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-28 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl dark:shadow-lg rounded-2xl overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-96">
          <img 
            src={courseImage} 
            alt={course.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-white p-8">
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl max-w-2xl">{course.description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2 dark:text-white dark:border-gray-700">Course Overview</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Clock className="text-blue-600 dark:text-blue-400" />
                <span className="dark:text-gray-300">Duration: {course.duration}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Target className="text-green-600 dark:text-green-400" />
                <span className="dark:text-gray-300">Difficulty: {course.difficulty}</span>
              </div>
              <div className="flex items-center space-x-4">
                <User className="text-purple-600 dark:text-purple-400" />
                <span className="dark:text-gray-300">Instructor: {course.instructor}</span>
              </div>
              <div className="flex items-center space-x-4">
                <DollarSign className="text-yellow-600 dark:text-yellow-400" />
                <span className="dark:text-gray-300">Price: ${course.price}</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2 dark:text-white dark:border-gray-700">Curriculum</h2>
            <ul className="space-y-3">
              {course.curriculum.map((item, index) => (
                <li key={index} className="flex items-center dark:text-gray-300">
                  <ChevronRight 
                    className="mr-2 text-blue-500 dark:text-blue-400" 
                    style={{ color: window.matchMedia('(prefers-color-scheme: dark)').matches ? mainDarkColor : undefined }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-gray-100 dark:bg-gray-700 p-8">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {course.learningOutcomes.map((outcome, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md dark:shadow-lg flex items-center">
                <Book 
                  className="mr-4 text-green-600 dark:text-green-400" 
                  style={{ color: window.matchMedia('(prefers-color-scheme: dark)').matches ? mainDarkColor : undefined }}
                />
                <span className="dark:text-gray-300">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prerequisites */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">Prerequisites</h2>
          <ul className="space-y-2">
            {course.prerequisites.map((prereq, index) => (
              <li key={index} className="flex items-center dark:text-gray-300">
                <ChevronRight 
                  className="mr-2 text-red-500 dark:text-red-400" 
                  style={{ color: window.matchMedia('(prefers-color-scheme: dark)').matches ? mainDarkColor : undefined }}
                />
                {prereq}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="text-center py-8">
          <button 
            className="bg-amber-100 text-amber-600 dark:bg-opacity-10 px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-700 hover:text-white transition-colors dark:hover:bg-opacity-100"
            style={{ 
              backgroundColor: window.matchMedia('(prefers-color-scheme: dark)').matches ? mainDarkColor : undefined,
              color: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'white' : undefined
            }}
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;