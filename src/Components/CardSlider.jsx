import React, { useState } from 'react';

const userData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    contact: 1234567890,
    skills: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    contact: 9876543210,
    skills: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    contact: 1112223333,
    skills: ['Python', 'Django', 'Flask']
  },
  {
    id: 4,
    name: 'Bob Brown',
    email: 'bob@example.com',
    contact: 4445556666,
    skills: ['Java', 'Spring', 'Hibernate']
  },
  {
    id: 5,
    name: 'Chris Green',
    email: 'chris@example.com',
    contact: 7778889999,
    skills: ['C++', 'DSA', 'Algorithms']
  },
  {
    id: 6,
    name: 'Eva White',
    email: 'eva@example.com',
    contact: 1010101010,
    skills: ['Machine Learning', 'AI']
  },
  {
    id: 7,
    name: 'Sam Lee',
    email: 'sam@example.com',
    contact: 2020202020,
    skills: ['SQL', 'PostgreSQL']
  },
  {
    id: 8,
    name: 'Kim Scott',
    email: 'kim@example.com',
    contact: 3030303030,
    skills: ['Go', 'Kubernetes']
  },
  {
    id: 9,
    name: 'Nancy Drew',
    email: 'nancy@example.com',
    contact: 4040404040,
    skills: ['PHP', 'Laravel']
  },
  {
    id: 10,
    name: 'Steve Blue',
    email: 'steve@example.com',
    contact: 5050505050,
    skills: ['Unity', 'C#']
  },
  {
    id: 11,
    name: 'Paul Red',
    email: 'paul@example.com',
    contact: 6060606060,
    skills: ['Rust', 'WebAssembly']
  },
  {
    id: 12,
    name: 'Laura Grey',
    email: 'laura@example.com',
    contact: 7070707070,
    skills: ['Swift', 'iOS']
  },
];

const CardSlider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % userData.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? userData.length - 1 : prev - 1));
  };

  const user = userData[index];

  return (
    <div className="flex items-center gap-6">
      <button
        onClick={handlePrev}
        className="text-white bg-gradient-to-br from-pink-700 to-purple-900 px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
      >
        &#60;
      </button>

      <div className="bg-gradient-to-br from-blue-300 via-purple-400 to-pink-200 border-2 border-purple-300 shadow-2xl rounded-3xl p-6 w-80 transition-all duration-3000">
        <h2 className="text-4xl font-bold text-purple-800 mb-8">{user.name}</h2>
        <p className="text-black-600"><span className="font-medium">Email:</span> {user.email}</p>
        <p className="text-black-600"><span className="font-medium">Contact:</span> {user.contact}</p>
        <p className="text-black-600 mt-2">
          <span className="font-medium">Skills:</span>{' '}
          {user.skills.join(', ')}
        </p>
      </div>

      <button
        onClick={handleNext}
        className=" text-white bg-gradient-to-br from-pink-700 to-purple-900 px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
      >
        &#62;
      </button>
    </div>
  );
};

export default CardSlider;
