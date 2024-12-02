import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [isReport, setIsReport] = useState(false);
  const [defaultDate, setDefaultDate] = useState(new Date().toLocaleDateString("en-GB"));
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    const form = e.target;

    const code = form.course_code.value;
    const title = form.course_title.value;
    const no = form.no.value;
    const name = form.name.value;

    const teacher_name = form.teacher_name.value;
    const teacher_department = form.teacher_department.value;
    const student_name = form.student_name.value;
    const program = form.program.value;
    const id = form.id.value;

    const date = form.date.value;

    const data = {
      code,
      title,
      no,
      name,
      teacher_name,
      teacher_department,
      student_name,
      program,
      id,
      date,
      isReport,
    };

    navigate("/cover_page", { state: data });
    setDefaultDate(date);
  };

  const handleChange = (e) => {
    if (e.target.value === "lab") {
      setIsReport(true);
    } else {
      setIsReport(false);
    }
  };

  return (
    <div className="min-h-screen max-w-screen-md mx-auto">
      <div className="flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold my-4">Info for Cover Page</h1>
        </div>
        <div className="bg-white w-full shrink-0 shadow-lg rounded-lg p-6">
          <form onSubmit={handleForm} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                Cover Page For
              </label>
              <select
                onChange={handleChange}
                className="block w-full outline outline-1 border-r-8 border-r-transparent outline-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-violet-300"
              >
                <option value="assignment">Assignment</option>
                <option value="lab">Lab Report</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                Course Code
              </label>
              <input
                type="text"
                placeholder="Course Code"
                className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-violet-300"
                name="course_code"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                Course Title
              </label>
              <input
                type="text"
                placeholder="Course Title"
                className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-violet-300"
                name="course_title"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                {isReport ? "Report No" : "Assignment No"}
              </label>
              <input
                type="text"
                placeholder={isReport ? "Report No" : "Assignment No"}
                className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-violet-300"
                name="no"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                {isReport ? "Report Name" : "Name of Assignment"}
              </label>
              <input
                type="text"
                placeholder={isReport ? "Report Name" : "Name of Assignment"}
                className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-violet-300"
                name="name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-700">
                  Submitted to:
                </h3>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Name of Lecturer"
                    className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-violet-300"
                    name="teacher_name"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Department"
                    className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-violet-300"
                    name="teacher_department"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Post"
                    defaultValue={"Senior Lecturer"}
                    className="block w-full border border-gray-300 rounded-lg px-3 py-2"
                    required
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-700">
                  Submitted by:
                </h3>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Name of Student"
                    className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-violet-300"
                    name="student_name"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Program"
                    className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-violet-300"
                    name="program"
                    required
                  />
                  <input
                    type="text"
                    placeholder="ID NO"
                    className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-violet-300"
                    name="id"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <input
                type="text"
                defaultValue={defaultDate}
                placeholder="Date of Submission"
                className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-violet-300"
                name="date"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-violet-700 text-white px-6 py-2 rounded-lg hover:bg-violet-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
