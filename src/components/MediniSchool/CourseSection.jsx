import { useState, useEffect, useRef } from "react";
import { Search, Filter, ChevronDown, X, ChevronsUpDown } from "lucide-react";
import CourseCard from "./CourseCard";
import coursesData from "./courses.json";

const CoursesSection = () => {
  // Extract all courses from all providers and categories
  const [allCourses, setAllCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter states
  const [filterOpen, setFilterOpen] = useState(false);
  const [providers, setProviders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [difficulties, setDifficulties] = useState([]);
  
  // Temporary and applied filters
  const [tempProviders, setTempProviders] = useState([]);
  const [tempCategories, setTempCategories] = useState([]);
  const [tempDifficulties, setTempDifficulties] = useState([]);
  
  const [selectedProviders, setSelectedProviders] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  
  // Sort option
  const [sortBy, setSortBy] = useState("featured");
  
  // Animation references
  const filterRef = useRef(null);
  
  // Extract all courses and filter options on component mount
  useEffect(() => {
    const courses = [];
    const providerOptions = new Set();
    const categoryOptions = new Set();
    const difficultyOptions = new Set();
    
    coursesData.courseProviders.forEach(provider => {
      providerOptions.add(provider.name || provider.id);
      
      provider.categories.forEach(category => {
        categoryOptions.add(category.name);
        
        category.courses.forEach(course => {
          difficultyOptions.add(course.difficulty);
          courses.push({
            ...course,
            provider: provider.name || provider.id,
            category: category.name
          });
        });
      });
    });
    
    setAllCourses(courses);
    setFilteredCourses(courses);
    setProviders(Array.from(providerOptions));
    setCategories(Array.from(categoryOptions));
    setDifficulties(Array.from(difficultyOptions).filter(Boolean));
  }, []);
  
  // Initialize temporary filters when filter panel opens
  useEffect(() => {
    if (filterOpen) {
      setTempProviders([...selectedProviders]);
      setTempCategories([...selectedCategories]);
      setTempDifficulties([...selectedDifficulties]);
    }
  }, [filterOpen]);
  
  // Apply filters when any filter changes
  useEffect(() => {
    let result = [...allCourses];
    
    // Apply provider filter
    if (selectedProviders.length > 0) {
      result = result.filter(course => selectedProviders.includes(course.provider));
    }
    
    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter(course => selectedCategories.includes(course.category));
    }
    
    // Apply difficulty filter
    if (selectedDifficulties.length > 0) {
      result = result.filter(course => selectedDifficulties.includes(course.difficulty));
    }
    
    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        course => 
          (course.title?.toLowerCase().includes(query)) || 
          (course.instructor?.toLowerCase().includes(query)) ||
          (course.description?.toLowerCase().includes(query))
      );
    }
    
    // Apply sorting
    if (sortBy === "title-asc") {
      result.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    } else if (sortBy === "title-desc") {
      result.sort((a, b) => (b.title || "").localeCompare(a.title || ""));
    } else if (sortBy === "newest") {
      result.sort((a, b) => (new Date(b.releaseDate || 0) - new Date(a.releaseDate || 0)));
    }
    
    // Update filtered courses
    setFilteredCourses(result);
  }, [selectedProviders, selectedCategories, selectedDifficulties, searchQuery, sortBy, allCourses]);
  
  // Toggle temporary filter selection
  const toggleTempFilter = (type, value) => {
    switch (type) {
      case "provider":
        setTempProviders(prev => 
          prev.includes(value) 
            ? prev.filter(item => item !== value)
            : [...prev, value]
        );
        break;
      case "category":
        setTempCategories(prev => 
          prev.includes(value) 
            ? prev.filter(item => item !== value)
            : [...prev, value]
        );
        break;
      case "difficulty":
        setTempDifficulties(prev => 
          prev.includes(value) 
            ? prev.filter(item => item !== value)
            : [...prev, value]
        );
        break;
      default:
        break;
    }
  };
  
  // Apply filters and close panel
  const applyFilters = () => {
    setSelectedProviders(tempProviders);
    setSelectedCategories(tempCategories);
    setSelectedDifficulties(tempDifficulties);
    setFilterOpen(false);
  };
  
  // Cancel and close filter panel without applying
  const cancelFilters = () => {
    setTempProviders(selectedProviders);
    setTempCategories(selectedCategories);
    setTempDifficulties(selectedDifficulties);
    setFilterOpen(false);
  };
  
  // Clear all temporary filters
  const clearTempFilters = () => {
    setTempProviders([]);
    setTempCategories([]);
    setTempDifficulties([]);
  };
  
  // Clear all applied filters
  const clearAllFilters = () => {
    setSelectedProviders([]);
    setSelectedCategories([]);
    setSelectedDifficulties([]);
    setTempProviders([]);
    setTempCategories([]);
    setTempDifficulties([]);
    setSearchQuery("");
  };
  
  // Remove a single applied filter tag
  const removeFilter = (type, value) => {
    switch (type) {
      case "provider":
        setSelectedProviders(prev => prev.filter(item => item !== value));
        break;
      case "category":
        setSelectedCategories(prev => prev.filter(item => item !== value));
        break;
      case "difficulty":
        setSelectedDifficulties(prev => prev.filter(item => item !== value));
        break;
      default:
        break;
    }
  };
  
  // Count total active filters
  const totalActiveFilters = 
    selectedProviders.length + 
    selectedCategories.length + 
    selectedDifficulties.length;
  
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 text-customBlue font-sans dark:text-white">
          Our Professional Courses
        </h2>
        
        {/* Search and Filter Bar */}
        <div className="mb-10 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md sticky top-4 z-10 transition-all duration-300">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search courses, instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
                </button>
              )}
            </div>
            
            {/* Filter Button */}
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-customBlue text-white rounded-lg hover:bg-opacity-90 transition-all duration-200 min-w-40"
              style={{ backgroundColor: "rgb(25,65,75)" }}
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
              {totalActiveFilters > 0 && (
                <span className="inline-flex items-center justify-center w-6 h-6 bg-white text-customBlue rounded-full text-sm font-bold">
                  {totalActiveFilters}
                </span>
              )}
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${filterOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Sort Dropdown */}
            <div className="relative min-w-40">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="block w-full pl-4 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white appearance-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="title-asc">Title (A-Z)</option>
                <option value="title-desc">Title (Z-A)</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronsUpDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          
          {/* Filter Panel */}
          <div 
            ref={filterRef}
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ 
              maxHeight: filterOpen ? (filterRef.current ? filterRef.current.scrollHeight + 'px' : '1000px') : '0px',
              opacity: filterOpen ? 1 : 0
            }}
          >
            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Provider Filter */}
              <div>
                <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Provider</h4>
                <div className="space-y-2 max-h-56 overflow-y-auto pr-2">
                  {providers.map(provider => (
                    <div key={provider} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`provider-${provider}`}
                        checked={tempProviders.includes(provider)}
                        onChange={() => toggleTempFilter("provider", provider)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor={`provider-${provider}`} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                        {provider}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Category Filter */}
              <div>
                <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Category</h4>
                <div className="space-y-2 max-h-56 overflow-y-auto pr-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`category-${category}`}
                        checked={tempCategories.includes(category)}
                        onChange={() => toggleTempFilter("category", category)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Difficulty Filter */}
              <div>
                <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Difficulty</h4>
                <div className="space-y-2 max-h-56 overflow-y-auto pr-2">
                  {difficulties.map(difficulty => (
                    <div key={difficulty} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`difficulty-${difficulty}`}
                        checked={tempDifficulties.includes(difficulty)}
                        onChange={() => toggleTempFilter("difficulty", difficulty)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor={`difficulty-${difficulty}`} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                        {difficulty}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Filter Panel Actions */}
            <div className="mt-6 flex items-center justify-between">
              <button 
                onClick={clearTempFilters}
                className="text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                Clear selected
              </button>
              
              <div className="flex gap-3">
                <button 
                  onClick={cancelFilters}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  Cancel
                </button>
                <button 
                  onClick={applyFilters}
                  className="px-4 py-2 bg-customBlue text-white rounded-lg hover:bg-opacity-90 transition-all duration-200"
                  style={{ backgroundColor: "rgb(25,65,75)" }}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
          
          {/* Active Filters Tags - outside filter panel */}
          {totalActiveFilters > 0 && !filterOpen && (
            <div className="mt-4">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Active filters:</span>
                
                {selectedProviders.map(provider => (
                  <span 
                    key={`tag-provider-${provider}`}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs flex items-center"
                  >
                    {provider}
                    <button 
                      onClick={() => removeFilter("provider", provider)}
                      className="ml-1"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
                
                {selectedCategories.map(category => (
                  <span 
                    key={`tag-category-${category}`}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs flex items-center"
                  >
                    {category}
                    <button 
                      onClick={() => removeFilter("category", category)}
                      className="ml-1"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
                
                {selectedDifficulties.map(difficulty => (
                  <span 
                    key={`tag-difficulty-${difficulty}`}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs flex items-center"
                  >
                    {difficulty}
                    <button 
                      onClick={() => removeFilter("difficulty", difficulty)}
                      className="ml-1"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
                
                <button 
                  onClick={clearAllFilters}
                  className="text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Course Results */}
        <div>
          {/* Results Count */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
              {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'} Available
            </h3>
          </div>
          
          {/* Grid of Courses */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
              {filteredCourses.map((course, index) => (
                <div 
                  key={course.id || index} 
                  className="animate-fade-up"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    opacity: 0
                  }}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">No courses found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your filters or search query</p>
              <button 
                onClick={clearAllFilters}
                className="mt-4 px-6 py-2 bg-customBlue text-white rounded-lg hover:bg-opacity-90 transition-all duration-200"
                style={{ backgroundColor: "rgb(25,65,75)" }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .animate-fade-up {
          animation: fadeUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CoursesSection;