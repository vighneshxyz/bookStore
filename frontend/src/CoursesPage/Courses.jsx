import React from 'react';
import Navvbar from '../components/Navvbar';
import Course from '../components/Course';
import Fotter from '../components/Fotter';


function Courses() {
  return (
    <>
    
    <Navvbar/>
    <div className='min-h-screen dark:bg-slate-900 dark:text-white'> 
    <Course/>
    </div>
    <Fotter/>
    </>
  );
}

export default Courses;
