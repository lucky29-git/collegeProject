import React, { useState } from 'react';

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
    { value: '6', label: 'Semester 6', subjects: ['balle', 'balle2'] },
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(semester, subject);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="semester">Select Semester:</label>
      <select id="semester" value={semester} onChange={(e) => handleSemesterChange(e.target.value)}>
        <option value="">Select</option>
        {semesterOptions.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>

      <label htmlFor="subject">Select Subject:</label>
      <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
        <option value="">Select</option>
        {subjectsForSemester.map((subj) => (
          <option key={subj} value={subj}>{subj}</option>
        ))}
      </select>

      <button type="submit">Get Question Papers</button>
    </form>
  );
};

export default QuestionPaperForm;
