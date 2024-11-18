import React from 'react';

const Form = ({ formData, handleChange, handleFileChange, handleSubmit }) => {
  const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1); // Age dropdown options from 1 to 100

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-2 font-medium">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded outline-none border-blue-400 hover:border-blue-600"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="age" className="mb-2 font-medium">Age</label>
        <select
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded outline-none border-blue-400 hover:border-blue-600"
          required
        >
          <option value="" disabled>Select your age</option>
          {ageOptions.map((age) => (
            <option key={age} value={age}>{age}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="file" className="mb-2 font-medium">Upload File</label>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
          className="p-3 border border-gray-300 rounded outline-none border-blue-400 hover:border-blue-600"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full p-3 mt-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 outline-none border-blue-400 hover:border-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
