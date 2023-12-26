import { Timeline } from 'primereact/timeline'
import { useState } from 'react'
import { AiOutlineDislike, AiOutlineLike, AiOutlineSend } from 'react-icons/ai'
import { BiBell, BiMessageRoundedDetail } from 'react-icons/bi'
import { BsBookmarkHeart, BsFillBookmarkHeartFill } from 'react-icons/bs'
import { FaHistory, FaRegSave } from 'react-icons/fa'
import { GrEdit } from 'react-icons/gr'
import { IoClose } from 'react-icons/io5'
import { MdOutlineDownloading } from 'react-icons/md'
import { RiMagicLine } from 'react-icons/ri'
import { doAiMagic } from '../../../services/api/aiService'
import { DownloadHtmlAsPdf, convertHtmlToString } from '../../../utils/utils'
import { InputText } from 'primereact/inputtext'
import { LuSend } from 'react-icons/lu'

const SidePanel = ({ formik, isEditing, setIsEditing }: any) => {
  const [sidePanel, setSidePanel] = useState('')
  const actionClass = sidePanel ? 'flex-row space-x-4' : 'flex-col space-y-4'
  return (
    <div className="flex flex-col items-center bg-transparent space-y-20">
      <div
        className={`flex h-max w-max rounded-md  py-3 px-3 bg-cyan-600 text-white ${actionClass}`}
      >
        {isEditing ? (
          <button type="submit">
            <FaRegSave size={22} className="cursor-pointer" />
          </button>
        ) : (
          <GrEdit size={23} className="cursor-pointer" onClick={() => setIsEditing(true)} />
        )}
        {isEditing && (
          <RiMagicLine
            size={25}
            className="text-amber-400 cursor-pointer"
            onClick={() => fillContent(formik)}
          />
        )}
        {!isEditing && (
          <MdOutlineDownloading
            size={26}
            className="cursor-pointer"
            onClick={() => DownloadHtmlAsPdf('pdfContent', 'content')}
          />
        )}
        <FaHistory size={20} className="cursor-pointer" onClick={() => setSidePanel('history')} />
        <BiMessageRoundedDetail
          size={24}
          className="cursor-pointer"
          onClick={() => setSidePanel('comments')}
        />
        {!isEditing && (
          <div className="flex bg-transparent">
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
              className="text-start rounded-lg bg-cyan-50 border border-gray-300 my-2 text-gray-500 text-sm p-5 pb-10 relative"
              key={comment.id}
            >
              {comment.content}
              {comment.updatedAt && (
                <div className="absolute top-1 right-1 bg-transparent text-gray-400 text-xs font-semibold">
                  Edited
                </div>
              )}
              <div className="absolute bg-transparent bottom-0 right-1 p-1">
                <small className="font-bold text-gray-500">
                  {comment.commenterName}
                  <span className="italic font-semibold ms-1 text-gray-400">
                    at {new Date(comment.createdAt).toISOString().split('T')[0]}
                  </span>
                </small>
              </div>
              <div className="absolute bg-transparent flex items-center bottom-0 left-1 p-1">
                <AiOutlineLike className="text-green-500" size={15} />
                <span className="font-semibold ms-1 text-sm text-gray-400">{comment.likes}</span>
                <AiOutlineDislike className="text-red-500 ms-2" size={15} />
                <span className="font-semibold ms-1 text-sm text-gray-400">{comment.dislikes}</span>
              </div>
            </div>
          )
        })}
        <div className="flex items-center mx-auto rounded mt-2 border border-cyan-600 bg-cyan-50">
          <InputText
            id="username"
            className="border rounded border-cyan-600 focus:shadow "
            // onChange={() => formik.comments.push(e)}
            autoFocus
          />
          <LuSend size={25} className="text-cyan-600 font-semibold mx-2 " />
        </div>
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

const fillContent = async (formik: any) => {
  if (convertHtmlToString(formik.values.content).length > 300) {
    const { content, jist, tags, title } = await doAiMagic(formik.values.content)
    formik.setFieldValue('content', content)
    formik.setFieldValue('jist', jist)
    formik.setFieldValue('tags', tags)
    formik.setFieldValue('title', title)
  }
}

export default SidePanel
