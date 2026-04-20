import React, { createContext, useContext, ReactNode } from 'react';
import { useCourses } from '../hooks/useCourses';

interface Course {
  id: string;
  title: string;
  description: string;
  content: string;
  skills: string[];
  outcomes: string[];
}

interface CoursesContextType {
  courses: Course[];
  updateCourse: (id: string, updatedCourse: Partial<Course>) => void;
  addCourse: (course: Course) => void;
  deleteCourse: (id: string) => void;
  resetToDefault: () => void;
}

const CoursesContext = createContext<CoursesContextType | undefined>(undefined);

export const CoursesProvider = ({ children }: { children: ReactNode }) => {
  const { courses, updateCourse, addCourse, deleteCourse, resetToDefault } = useCourses();

  return (
    <CoursesContext.Provider value={{ courses, updateCourse, addCourse, deleteCourse, resetToDefault }}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCoursesContext = () => {
  const context = useContext(CoursesContext);
  if (context === undefined) {
    throw new Error('useCoursesContext must be used within a CoursesProvider');
  }
  return context;
};