import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="container mx-auto py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">课程不存在</h1>
          <p className="mt-4 text-gray-600">抱歉，您访问的课程不存在。</p>
          <Link 
            to="/" 
            className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <Link 
        to="/" 
        className="inline-block mb-6 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
      >
        ← 返回课程列表
      </Link>
      
      <div className="bg-white rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{course.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{course.description}</p>
        
        {(course as any).content && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">课程内容</h2>
            <p className="text-gray-600">{(course as any).content}</p>
          </div>
        )}
        
        {course.skills && course.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">相关技能</h2>
            <div className="flex flex-wrap gap-2">
              {course.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {course.outcomes && course.outcomes.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">学习成果</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              {course.outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;