import { Timeline } from 'primereact/timeline'
import { useState } from 'react'
import { BiMessageRoundedDetail, BiBell } from 'react-icons/bi'
import { BsFillBookmarkHeartFill, BsBookmarkHeart } from 'react-icons/bs'
import { FaRegSave, FaHistory } from 'react-icons/fa'
import { GrEdit } from 'react-icons/gr'
import { IoClose } from 'react-icons/io5'
import { MdOutlineDownloading } from 'react-icons/md'
import { DownloadHtmlAsPdf } from '../../../utils/utils'

const SidePanel = ({ formik, isEditing, setIsEditing }: any) => {
  const [sidePanel, setSidePanel] = useState('')
  const actionClass = sidePanel ? 'flex-row space-x-4' : 'flex-col space-y-4'
  return (
    <div className="flex flex-col bg-transparent space-y-20">
      <div
        className={`flex h-max w-max rounded-md  py-3 px-3 bg-cyan-600 text-white ${actionClass}`}
      >
        {isEditing ? (
          <button type="submit">
            <FaRegSave size={23} className="cursor-pointer" />
          </button>
        ) : (
          <GrEdit size={23} className="cursor-pointer" onClick={() => setIsEditing(true)} />
        )}
        {!isEditing && (
          <MdOutlineDownloading
            size={26}
            className="cursor-pointer"
            onClick={() => DownloadHtmlAsPdf('pdfContent', 'content')}
          />
        )}
        <FaHistory size={23} className="cursor-pointer" onClick={() => setSidePanel('history')} />
        <BiMessageRoundedDetail
          size={24}
          className="cursor-pointer"
          onClick={() => setSidePanel('comments')}
        />
        {!isEditing && (
          <div className="flex">
            {formik.values.isBookmarked ? (
              <BsFillBookmarkHeartFill
                size={23}
                className="cursor-pointer"
                onClick={() => formik.setFieldValue('isBookmarked', false)}
              />
            ) : (
              <BsBookmarkHeart
                size={23}
                className="cursor-pointer"
                onClick={() => formik.setFieldValue('isBookmarked', true)}
              />
            )}
          </div>
        )}
        {!isEditing && <BiBell size={24} />}
      </div>
      {sidePanel === 'comments' && <Comments formik={formik} setSidePanel={setSidePanel} />}
      {sidePanel === 'history' && <History formik={formik} setSidePanel={setSidePanel} />}
    </div>
  )
}

const Comments = ({ formik, setSidePanel }: any) => {
  return (
    <div className="w-96">
      <div className="flex items-center font-bold p-3 text-xl text-start border border-gray-200 rounded-t-lg  text-cyan-600">
        <span>Comments</span>
        <IoClose size={25} className="ms-auto cursor-pointer" onClick={() => setSidePanel('')} />
      </div>
      <div className="flex flex-col border border-t-0 border-gray-200 shadow rounded-b-lg p-5">
        {formik.values.comments.map((comment: any) => {
          return (
            <div
              className="text-start rounded-lg bg-cyan-50 border border-gray-300 text-gray-500 text-sm p-3 pb-8 relative"
              key={comment.id}
            >
              {comment.content}
              <div className="absolute bottom-0 right-1 p-1">
                <small className="font-bold text-gray-500">
                  {comment.commentedBy}
                  <span className="italic font-semibold ms-1 text-gray-400">
                    at {comment.commentedAt}
                  </span>
                </small>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const History = ({ formik, setSidePanel }: any) => {
  return (
    <div className="w-96">
      <div className="flex items-center font-bold p-3 text-xl text-start border border-gray-200 rounded-t-lg  text-cyan-600">
        <span>History</span>
        <IoClose size={25} className="ms-auto cursor-pointer" onClick={() => setSidePanel('')} />
      </div>
      <div className="flex flex-col border border-t-0 border-gray-200 shadow rounded-b-lg p-5">
        <Timeline
          value={formik.values.history}
          align="alternate"
          content={(item) => (
            <small className="font-bold text-gray-500">
              {item.updatedBy}
              <span className="ms-1 italic font-semibold text-gray-400">at {item.updatedAt}</span>
            </small>
          )}
        />
      </div>
    </div>
  )
}

export default SidePanel
