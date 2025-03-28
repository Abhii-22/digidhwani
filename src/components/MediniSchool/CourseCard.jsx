import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Clock, TrendingUp } from "lucide-react";
const images = import.meta.glob("/src/assets/IMAGES/*.jpg", { eager: true });


const CourseCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Destructure with fallback values
  const {
    title = "Advanced Design Masterclass",
    instructor = "Elena Rodriguez",
    duration = "8 Weeks",
    difficulty = "Advanced",
    coverImage = "/placeholder.svg?height=200&width=300",
    id = ""
  } = course || {};

  const courseImage = images[`/src/assets/IMAGES/${coverImage}`]?.default || "/placeholder.svg";

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Diagonal Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-customBlue cursor-pointer transition-all duration-500 group-hover:h-full z-10"></div>

      {/* Course Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={courseImage}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Course Content */}
      <div className="p-6 space-y-4 relative z-20">
        {/* Title with Dynamic Color */}
        <h3 className={`text-2xl font-bold tracking-tight transition-colors duration-300 
          ${isHovered 
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600' 
            : 'text-gray-800 dark:text-gray-100'
          }`}>
          {title}
        </h3>

        {/* Course Details */}
        <div className="space-y-3">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <BookOpen className="w-5 h-5 mr-3 text-blue-500" />
            <span className="text-sm">Instructor: {instructor}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Clock className="w-5 h-5 mr-3 text-green-500" />
            <span className="text-sm">{duration}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <TrendingUp className="w-5 h-5 mr-3 text-purple-500" />
            <span className="text-sm">Difficulty: {difficulty}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link to={`/medinischoolofdesign/courses/${id}`} className="block mt-6">
          <button 
            className={`w-full py-3 rounded-lg font-semibold tracking-wide uppercase text-sm transition-all duration-500 
              ${isHovered 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
          >
            Explore Course
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;