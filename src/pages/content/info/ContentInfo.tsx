import { MdUpdate } from 'react-icons/md'
import { RiEdit2Line } from 'react-icons/ri'

const ContentInfo = ({ formik }: any) => {
  return (
    <div className="h-40 border rounded-lg p-2 flex flex-col text-start shadow">
      <span className="text-cyan-600 m-2 text font-semibold mb-1">Content Info</span>
      <div className="flex items-center text-gray-500 m-2 text-sm ms-1 font-semibold mb-1">
        <RiEdit2Line size={16} className="text-gray-500 me-2" />
        Created by<span className="text-cyan-600 mx-1">{formik.values.createdBy}</span> on
        <span className="text-cyan-600 ms-1">{formik.values.createdAt}</span>
      </div>
      {formik.values.history[0] && (
        <div className="flex items-start text-gray-500 m-2 text-sm ms-1 font-semibold mb-1">
          <MdUpdate size={18} className="text-gray-500 me-2 mt-0.5" />
          <p>
            Last edit was made at
            <span className="text-cyan-600 mx-1">{formik.values.history[0].updatedAt}</span>
            by
            <span className="text-cyan-600 ms-1">{formik.values.history[0].updatedBy}</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default ContentInfo
