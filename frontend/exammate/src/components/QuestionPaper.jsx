import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { createContext } from 'react';
const QuestionPaperForm = ({ onSubmit }) => {
  const [semester, setSemester] = useState('');
  const [subject, setSubject] = useState('');
  const [subjectsForSemester, setSubjectsForSemester] = useState([]);

  const semesterOptions = [
    { value: '1', label: 'Semester 1', subjects: ['Math', 'Science'] },
    { value: '2', label: 'Semester 2', subjects: ['History', 'Geography'] },
    { value: '3', label: 'Semester 3', subjects: ['haha', 'nono'] },
    { value: '4', label: 'Semester 4', subjects: ['jiji', 'kiki'] },
    { value: '5', label: 'Semester 5', subjects: ['yeahhh', 'hooo'] },
    { value: '6', label: 'Semester 6', subjects: ['data communication', 'balle2'] },
    { value: '7', label: 'Semester 7', subjects: ['History', 'Geography'] },
    { value: '8', label: 'Semester 8', subjects: ['History', 'Geography'] },
    // Add more semester options with corresponding subjects
  ];

  const handleSemesterChange = (selectedSemester) => {
    setSemester(selectedSemester);
    const selectedSemesterObj = semesterOptions.find((option) => option.value === selectedSemester);
    setSubjectsForSemester(selectedSemesterObj ? selectedSemesterObj.subjects : []);
    setSubject('');
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // onSubmit(semester, subject);

    let obj={
      semester,
      subject,
    }
    // useEffect(() => {
    let output=await axios.post('http://localhost:3000/paper', obj)
    // }, [])
    console.log(output);
    const PaperContext = createContext(output)
    console.log(output.data.value[0].semester);
    console.log(output.subject);
  };

  return (
    <div className='flex justify-center '>
      <form onSubmit={handleSubmit} className='mt-12'>
        <div className='grid grid-cols-3 gap-14'>

        <div>
        <label htmlFor="semester" className='font-semibold mt-2'>Select Semester: </label>
        <select id="semester" value={semester} onChange={(e) => handleSemesterChange(e.target.value)}>
        <option value="">Select</option>
        {semesterOptions.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
        </select>
        </div>
        
        <div>
        <label htmlFor="subject" className='font-semibold mt-2 '>Select Subject: </label>
        <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
        <option value="">Select</option>
        {subjectsForSemester.map((subj) => (
          <option key={subj} value={subj}>{subj}</option>
        ))}
        </select>
        </div>

        <button type="submit" >Get Question Papers</button>
        </div>
        
    </form>
    </div>
    
  );
};

export default QuestionPaperForm;
