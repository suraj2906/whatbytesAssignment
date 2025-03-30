import { ProgressBar } from "@/components/ProgressBar"

export const SubjectProgressBars = () => (
  <div className="mx-auto max-w-sm w-[100%] space-y-10 shadow-sm border border-gray-200 p-6 mt-6 rounded-xl">
    <h3 className="font-bold">Syllabus Wise Analysis</h3>
    <div className="items-center justify-between space-x-3">
      <p className="text-sm text-gray-900">
        HTML Tools, Forms, History
      </p>
      <ProgressBar variant="default" value={50} className="w-80" label="50%" />
    </div>
    <div className="items-center justify-between space-x-3">
      <span className="text-sm  text-gray-900 ">
        Tags and References in HTML
      </span>
      <ProgressBar variant="neutral" value={40} className="w-80" label="40%" />
    </div>
    <div className=" items-center justify-between space-x-3">
      <span className="text-sm  text-gray-900 ">
        Tables and References in HTML
      </span>
      <ProgressBar variant="success" value={50} className="w-80" label="50%"/>
    </div>
    <div className="items-center justify-between space-x-3">
      <span className="text-sm  text-gray-900">
        Tables & CSS Basics
      </span>
      <ProgressBar variant="warning" value={20} className="w-80" label="20%" />
    </div>
    
  </div>
  
)

export default SubjectProgressBars