import { useFormik } from 'formik'
import { Toast } from 'primereact/toast'
import { useContext, useEffect, useRef, useState } from 'react'
import { AiOutlineDislike, AiOutlineLike, AiTwotoneDislike, AiTwotoneLike } from 'react-icons/ai'
import { MdOutlineRemoveRedEye, MdOutlineVerified } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'
import QuillEditor from '../../components/quillEditor/QuillEditor'
import Tags from '../../components/tags/Tags'
import { ContentContext } from '../../hooks/contentContext'
import { DEFAULT_CONTENT } from './../../constants/appConstants'
import './Content.css'
import SidePanel from './sidePanel/SidePanel'
import Thumbnail from './thumbnail/Thumbnail'

const Content = () => {
  const { contentId } = useParams()
  const toast: any = useRef(null)
  const [content, setContent] = useState(DEFAULT_CONTENT)
  const [isEditing, setIsEditing] = useState(true)
  const navigate = useNavigate()
  const [contents, dispatchContent] = useContext(ContentContext)

  useEffect(() => {
    if (contentId) {
      const content = contents.find((content: any) => content.id === contentId)
      if (content) {
        setContent(content)
        setIsEditing(false)
      } else {
        navigate('/contents')
      }
    }
  }, [contentId])

  const showSuccessToast = () => {
    toast?.current &&
      toast?.current.show({
        severity: 'success',
        summary: '🥳💥 Hurray 💥🥳',
        detail: 'Content saved successfully',
      })
  }

  const formik = useFormik({
    initialValues: content,
    onSubmit: (data) => {
      if (data) {
        dispatchContent(data)
        showSuccessToast()
        formik.resetForm()
        setIsEditing(false)
      }
    },
  })

  return (
    <>
      <Toast ref={toast} />
      <form
        onSubmit={formik.handleSubmit}
        className="w-full h-full bg-transparent p-2 flex justify-center"
      >
        <div className="w-11/12 bg-transparent space-x-4 flex" id="pdfContent">
          <div className="w-1/5 bg-transparent h-full flex flex-col space-y-3 rounded-lg">
            <div className="h-72 border rounded-lg p-2 flex flex-col text-start shadow">
              <span className="text-cyan-600 text-lg ms-1 font-semibold mb-2">Tags: </span>
              <Tags formik={formik} placeholder="Tag your content" readOnly={!isEditing} />
            </div>
            <div className="h-72 border rounded-lg p-2 flex flex-col text-start shadow">
              <span className="text-cyan-600 text-lg ms-1 font-semibold mb-2">Jist:</span>
              <QuillEditor
                name="jist"
                formik={formik}
                maxHeight={180}
                fontSize="0.8rem"
                placeholder="A crisp summary < 100 characters"
                toolbarOptions={jistToolbar}
                readOnly={!isEditing}
              />
            </div>
            <div className="h-32 border rounded-lg p-2 flex flex-col text-start shadow">
              <span className="text-cyan-600 m-2 text-sm ms-1 font-semibold mb-1">Author:</span>
              <span className="text-cyan-600 m-2 text-sm ms-1 font-semibold mb-1">Created on:</span>
              <span className="text-cyan-600 m-2 text-sm ms-1 font-semibold mb-1">Updated on:</span>
            </div>
          </div>
          <div className="w-4/5 p-2 border rounded-lg shadow max-h-full overflow-auto">
            <div className="w-full flex mx-auto">
              <div className=" w-3/4 relative inline-block">
                <QuillEditor
                  name="title"
                  formik={formik}
                  maxHeight={100}
                  placeholder="Title goes here"
                  fontSize="2rem"
                  customClass="pt-10 font-black"
                  toolbarOptions={titleToolbar}
                  readOnly={!isEditing}
                />
                {!isEditing && (
                  <div className="flex space-x-4 absolute left-3 bottom-3">
                    <div className="flex">
                      <MdOutlineRemoveRedEye size={25} className="text-gray-400" />
                      <span className="ms-1 font-semibold text-gray-500">
                        {formik.values.views}
                      </span>
                    </div>
                    <div className="flex">
                      {formik.values.isDisliked ? (
                        <AiTwotoneDislike
                          size={25}
                          className="cursor-pointer text-red-500"
                          onClick={() => {
                            formik.setFieldValue('isDisliked', false)
                          }}
                        />
                      ) : (
                        <AiOutlineDislike
                          size={25}
                          className="cursor-pointer text-red-500"
                          onClick={() => {
                            formik.setFieldValue('isLiked', false)
                            formik.setFieldValue('isDisliked', true)
                          }}
                        />
                      )}
                      <span className="ms-1 font-semibold text-gray-500">
                        {formik.values.dislikes}
                      </span>
                    </div>
                    <div className="flex">
                      {formik.values.isLiked ? (
                        <AiTwotoneLike
                          size={25}
                          className="cursor-pointer text-green-500"
                          onClick={() => {
                            formik.setFieldValue('isLiked', false)
                          }}
                        />
                      ) : (
                        <AiOutlineLike
                          size={25}
                          className="cursor-pointer text-green-500"
                          onClick={() => {
                            formik.setFieldValue('isLiked', true)
                            formik.setFieldValue('isDisliked', false)
                          }}
                        />
                      )}
                      <span className="ms-1 font-semibold text-gray-500">
                        {formik.values.likes}
                      </span>
                    </div>
                    {formik.values.verifiedBy && (
                      <MdOutlineVerified size={25} className="text-green-600" />
                    )}
                  </div>
                )}
              </div>
              <Thumbnail formik={formik} isEditing={isEditing} />
            </div>
            <QuillEditor
              name="content"
              formik={formik}
              placeholder="Develop your content here"
              fontSize="1.2rem"
              customClass="border-t pt-10"
              toolbarOptions={contentToolbar}
              readOnly={!isEditing}
            />
          </div>
          <SidePanel formik={formik} isEditing={isEditing} setIsEditing={setIsEditing} />
        </div>
      </form>
    </>
  )
}

const contentToolbar = [
  'bold',
  'italic',
  'underline',
  'align',
  'strike',
  { color: ['red', 'green', 'lightgray', 'gray', 'blue', 'orange'] },
  'blockquote',
  'background',
  'link',
  'image',
  'code-block',
  { size: ['small', 'large', 'huge'] },
  { header: [1, 2, 3, 4, 5] },
]

const titleToolbar = ['italic', 'underline', 'strike']
const jistToolbar = ['bold', 'italic', 'underline', 'strike']
export default Content
