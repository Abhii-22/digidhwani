import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, BookOpen, Award, Briefcase, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import coursesData from './courses.json';

export default function CourseDetailsPage() {
  const { courseName } = useParams();
  const [course, setCourse] = useState(null);
  
  useEffect(() => {
    // Find the course in the courses data
    const findCourse = () => {
      for (const provider of coursesData.courseProviders) {
        for (const category of provider.categories) {
          const foundCourse = category.courses.find(c => c.id === courseName);
          if (foundCourse) {
            return { ...foundCourse, provider: provider.name, category: category.name };
          }
        }
      }
      return null;
    };

    const courseData = findCourse();
    setCourse(courseData);
  }, [courseName]);

  if (!course) {
    return (
      <div className="container mx-auto py-10 px-4">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold">Course not found</h2>
          <p className="mt-4">The course you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="mt-6">
            <Link to="/mediniedutech">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/mediniedutech" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
              <span>{course.provider}</span>
              <ChevronRight className="h-4 w-4" />
              <span>{course.category}</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">{course.name}</h1>
            <p className="mt-2 text-muted-foreground">{course.description}</p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {course.tags?.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructors">Instructors</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="prose max-w-none">
                <h3>About This Course</h3>
                <p>{course.longDescription || 'No detailed description available for this course.'}</p>
                
                <h3>What You'll Learn</h3>
                <ul className="space-y-2">
                  {course.learningOutcomes?.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  )) || <li>No learning outcomes specified.</li>}
                </ul>
                
                <h3>Prerequisites</h3>
                <ul className="list-disc pl-5">
                  {course.prerequisites?.length > 0 ? (
                    course.prerequisites.map((prereq, index) => (
                      <li key={index}>{prereq}</li>
                    ))
                  ) : (
                    <li>No prerequisites required.</li>
                  )}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="curriculum" className="space-y-4">
              {course.curriculum?.length > 0 ? (
                <div className="space-y-4">
                  {course.curriculum.map((module, moduleIndex) => (
                    <Card key={moduleIndex}>
                      <CardHeader className="bg-muted/50">
                        <CardTitle className="text-lg">
                          Module {moduleIndex + 1}: {module.name}
                        </CardTitle>
                        <CardDescription>{module.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="divide-y">
                          {module.lessons?.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="p-4 hover:bg-muted/50 transition-colors flex items-center">
                              <div className="flex-1">
                                <h4 className="font-medium">{lesson.title}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {lesson.duration} • {lesson.type}
                                </p>
                              </div>
                              {lesson.completed && (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <p>No curriculum details available for this course.</p>
              )}
            </TabsContent>
            
            <TabsContent value="instructors">
              {course.instructors?.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {course.instructors.map((instructor, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-2xl">{instructor.name.charAt(0)}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{instructor.name}</h4>
                            <p className="text-sm text-muted-foreground">{instructor.title}</p>
                            <p className="mt-2 text-sm">{instructor.bio}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <p>No instructor information available.</p>
              )}
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                <div>
                  <p className="text-sm font-medium">Duration</p>
                  <p className="text-sm text-muted-foreground">{course.duration || 'Not specified'}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Users className="h-5 w-5 text-muted-foreground mr-2" />
                <div>
                  <p className="text-sm font-medium">Enrolled Students</p>
                  <p className="text-sm text-muted-foreground">
                    {course.enrolledStudents ? `${course.enrolledStudents}+ students` : 'No data'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-muted-foreground mr-2" />
                <div>
                  <p className="text-sm font-medium">Lessons</p>
                  <p className="text-sm text-muted-foreground">
                    {course.lessonsCount ? `${course.lessonsCount} lessons` : 'No data'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Award className="h-5 w-5 text-muted-foreground mr-2" />
                <div>
                  <p className="text-sm font-medium">Certificate</p>
                  <p className="text-sm text-muted-foreground">
                    {course.certificateIncluded ? 'Included' : 'Not included'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 text-muted-foreground mr-2" />
                <div>
                  <p className="text-sm font-medium">Skill Level</p>
                  <p className="text-sm text-muted-foreground">{course.level || 'All levels'}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="w-full">
                <p className="text-2xl font-bold">
                  {course.price ? `$${course.price}` : 'Free'}
                </p>
                {course.originalPrice && (
                  <p className="text-sm text-muted-foreground line-through">
                    ${course.originalPrice}
                  </p>
                )}
              </div>
              <Button className="w-full" size="lg">
                Enroll Now
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                30-Day Money-Back Guarantee
              </p>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Share this course</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <span className="sr-only">Share on Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <span className="sr-only">Share on Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <span className="sr-only">Share on LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="ml-auto">
                  <span className="sr-only">Copy link</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
