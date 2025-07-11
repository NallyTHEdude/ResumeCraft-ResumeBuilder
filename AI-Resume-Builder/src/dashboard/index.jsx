import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from './../../service/GlobalApi';
import ResumeCardItem from './components/ResumeCardItem';

function Dashboard() {

  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      GetResumesList();
    }
  }, [user]);

  const GetResumesList = () => {
    GlobalApi.GetUserResumes(user.primaryEmailAddress.emailAddress)
      .then(resp => {
        const list = resp?.data?.data;
        console.log(list);
        setResumeList(Array.isArray(list) ? list : []);
      })
      .catch(err => {
        console.error('Error fetching resumes', err);
        setResumeList([]);
      });
  };

  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating AI resume to your next Job role</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10'>
        <AddResume />
        {Array.isArray(resumeList) && resumeList.length > 0 ? (
          resumeList.map((resume, index) => (
            <ResumeCardItem resume={resume} key={index} refreshData={GetResumesList} />
          ))
        ) : (
          [1, 2, 3, 4].map((item, index) => (
            <div className='h-[280px] rounded-lg bg-slate-200 animate-pulse' key={index}></div>
          ))
        )}
      </div>
    </div>
  )
}

export default Dashboard;
