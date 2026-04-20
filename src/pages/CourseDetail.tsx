import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCoursesContext } from '../contexts/CoursesContext';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { courses, updateCourse } = useCoursesContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState('');
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

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

  const handleEditClick = () => {
    setEditedTitle(course.title);
    setEditedDescription(course.description);
    setEditedContent(course.content);
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    updateCourse(course.id, {
      title: editedTitle,
      description: editedDescription,
      content: editedContent
    });
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto py-12">
      <Link 
        to="/" 
        className="inline-block mb-6 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
      >
        ← 返回课程列表
      </Link>
      
      <div className="bg-white rounded-xl shadow-md p-8">
        {isEditing ? (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">课程标题</label>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">课程简介</label>
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">课程内容 (支持 Markdown)</label>
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                rows={25}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleSaveClick}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                保存修改
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                取消
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-4xl font-bold text-gray-800">{course.title}</h1>
              <button
                onClick={handleEditClick}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
              >
                编辑课程
              </button>
            </div>
            <p className="text-lg text-gray-600 mb-8">{course.description}</p>
            
            <div className="mb-8">
              <div className="text-gray-600 whitespace-pre-wrap">
                {course.content}
              </div>
            </div>
            
            {course.skills.length > 0 && (
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
            
            {course.outcomes.length > 0 && (
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
        )}
      </div>
    </div>
  );
};

export default CourseDetail;