import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/personalInfo';

const About: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-gray-200 rounded-full w-48 h-48 mx-auto flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-500">WR</span>
            </div>
            <h1 className="text-3xl font-bold text-center mt-4">{personalInfo.name}</h1>
            <p className="text-center text-gray-600 mt-2">{personalInfo.major}</p>
            <p className="text-center text-gray-500 mt-1">{personalInfo.school}</p>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">个人简介</h2>
            <p className="text-gray-600 mb-6">{personalInfo.bio}</p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">技能特长</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {personalInfo.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">教育背景</h2>
            <div className="mb-6">
              <p className="font-medium text-gray-800">{personalInfo.education.school}</p>
              <p className="text-gray-600">{personalInfo.education.major}</p>
              <p className="text-gray-500 text-sm">{personalInfo.education.startDate} - {personalInfo.education.endDate}</p>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">联系方式</h2>
            <div className="space-y-2">
              <p className="text-gray-600">📧 {personalInfo.contact.email}</p>
              <p className="text-gray-600">📱 {personalInfo.contact.phone}</p>
              {personalInfo.contact.github && (
                <p className="text-gray-600">🐙 <a href={`https://github.com/${personalInfo.contact.github}`} className="text-blue-500 hover:underline">GitHub</a></p>
              )}
              {personalInfo.contact.linkedin && (
                <p className="text-gray-600">💼 <a href={`https://linkedin.com/in/${personalInfo.contact.linkedin}`} className="text-blue-500 hover:underline">LinkedIn</a></p>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;