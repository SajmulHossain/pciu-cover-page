import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import banner from "../assets/banner.png";
import logo from "../assets/logo.png";
import html2canvas from "html2canvas";

const Page = () => {
  const location = useLocation();
  const {
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
  } = location.state;



  const handleDownload = () => {
    const input = document.getElementById("page");
    html2canvas(input, {
      scale: 2, 
      useCORS: true, 
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; 
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("coverpage.pdf");
    });
  };


 
  return (
    <section className="max-w-screen-xl mx-auto px-4">
      <div className="mt-4 text-2xl font-semibold text-center underline">
        PDF Preveiw
      </div>
      <div className="overflow-x-auto">
        <div className="w-[21cm] h-[29.7cm] border mx-auto mt-12 p-4" id="page">
          <div className="border border-purple-700 rounded-lg p-1 bg-purple-700 h-full">
            <div className="border border-purple-700 h-full rounded-md bg-white p-4">
              <div className="flex items-center flex-col my-6">
                <img src={banner} alt="banner image" />
                <img src={logo} alt="logo" />
              </div>
              <h3 className="text-center text-purple-700 text-3xl font-bold">
                {isReport ? "Report" : "Assignment"}
              </h3>

              <div className="border-2 border-purple-700 mt-8 rounded-2xl grid grid-cols-4 p-4 bg-purple-100">
                <div className="col-span-1 -mt-3">
                  <div className="space-y-4">
                    <div className="flex justify-between font-bold text-purple-700">
                      <p>{isReport ? "Report" : "Assignment"} No</p>
                      <span>:</span>
                    </div>
                    <div className="flex justify-between font-bold text-purple-700">
                      <p>{isReport ? "Report" : "Assignment"} Name</p>
                      <span>:</span>
                    </div>
                    <div className="flex justify-between font-bold text-purple-700">
                      <p>Course Code</p>
                      <span>:</span>
                    </div>
                    <div className="flex justify-between font-bold text-purple-700">
                      <p>Course Title</p>
                      <span>:</span>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 space-y-4 px-4 font-semibold -mt-3">
                  <p>{no}</p>
                  <p>{name}</p>
                  <p>{code}</p>
                  <p>{title}</p>
                </div>
              </div>

              <div className="my-10 border rounded-lg overflow-hidden">
                {/* <table className="w-full border-spacing-2 border border-collapse">
                <thead>
                  <tr className="border-t-0">
                    <th className="border px-2 py-1">Submitted To</th>
                    <th className="border px-2 py-1">Submitted By</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border px-2 py-1">{teacher_name}</td>
                    <td className="border px-2 py-1">{student_name}</td>
                  </tr>

                  <tr>
                    <td className="border px-2 py-1">Senior Lecturer</td>
                    <td className="border px-2 py-1">{program}</td>
                  </tr>

                  <tr>
                    <td className="border px-2 py-1">{teacher_department}</td>
                    <td className="border px-2 py-1">{id}</td>
                  </tr>

                  <tr className="border-b-0">
                    <td colSpan="2" className="px-2 py-1">
                      Date Of Submission: {date}
                    </td>
                  </tr>
                </tbody>
              </table> */}

                <div className="flex justify-between items-center overflow-hidden">
                  <div className="w-full border-r">
                    <h3 className="font-bold text-center bg-purple-700 text-white pt-2 pb-6">
                      Submitted To
                    </h3>

                    <div className="mt-4 space-y-1">
                      <p className="px-2 bg-violet-200 pt-1 pb-5">
                        {teacher_name}
                      </p>
                      <p className="px-2 bg-violet-200 pt-1 pb-5">
                        Senior Lecturer
                      </p>
                      <p className="px-2 bg-violet-200 pt-1 pb-5">
                        Department of {teacher_department}
                      </p>
                    </div>
                  </div>

                  <div className="w-full">
                    <h3 className="font-bold text-center bg-purple-700 text-white pt-2 pb-6">
                      Submitted To
                    </h3>

                    <div className="mt-4 space-y-1">
                      <p className="px-2 bg-violet-200 pt-1 pb-5">
                        {student_name}
                      </p>
                      <p className="px-2 bg-violet-200 pt-1 pb-5">{program}</p>
                      <p className="px-2 bg-violet-200 pt-1 pb-5">{id}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-center pt-1 pb-5 bg-violet-700 text-white">
                    Date Of Submission: {date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-12">
        <button
          className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-600"
          onClick={handleDownload}
        >
          Download PDF
        </button>
      </div>
    </section>
  );
};

export default Page;
