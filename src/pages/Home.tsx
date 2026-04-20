import React from "react";
import { Link } from "react-router-dom";
import { useCoursesContext } from "@/contexts/CoursesContext";

export default function Home() {
  const { courses } = useCoursesContext();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">魏冉</h1>
          <p className="text-xl md:text-2xl mb-6">商务数据分析专业</p>
          <p className="text-lg">广东科学技术职业学院</p>
        </div>
      </div>

      {/* Course Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">我的课程</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link 
              key={course.id} 
              to={`/courses/${course.id}`}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {course.skills.slice(0, 3).map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-blue-500 font-medium">查看详情 →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}