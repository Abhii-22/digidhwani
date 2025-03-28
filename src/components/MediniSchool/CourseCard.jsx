import { useState } from "react";
import { Link } from "react-router-dom";
const images = import.meta.glob("/src/assets/IMAGES/*.jpg", { eager: true });

const CourseCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Use only specified attributes with defaults
  const {
    title = "Course Title",
    instructor = "Instructor Name",
    duration = "6 weeks",
    difficulty = "Intermediate",
    coverImage = "/placeholder.svg?height=200&width=300",
  } = course || {};

  const courseImage = images[`/src/assets/IMAGES/${coverImage}`]?.default || "/placeholder.svg";

  return (
    <div
      className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 max-w-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Course Image */}
      <div className="relative h-48">
        <img
          src={courseImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        {/* Subtle overlay for visual appeal */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-70"
          }`}
        ></div>
      </div>

      {/* Course Content */}
      <div className="p-5">
        {/* Title */}
        <h3
          className={`text-xl font-semibold line-clamp-1 mb-2 transition-colors duration-300 ${
            isHovered ? "text-blue-600 dark:text-blue-400" : "text-gray-800 dark:text-white"
          }`}
        >
          {title}
        </h3>

        {/* Instructor */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          by <span className="font-medium">{instructor}</span>
        </p>

        {/* Duration and Difficulty */}
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{duration}</span>
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs">
            {difficulty}
          </span>
        </div>

        {/* Call to Action */}
        <Link to={`/medinischoolofdesign/courses/${course.id}`}>
          <button
          className={`mt-4 w-full py-2 rounded-md font-medium text-white transition-all duration-300 ${
            isHovered
              ? "bg-amber-600 dark:bg-amber-500 scale-105"
              : "bg-amber-500 dark:bg-amber-600"
          }`}
        >
          Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;