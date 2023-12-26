import { useFormik } from 'formik'
import { Toast } from 'primereact/toast'
import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AiButton from '../../components/aiButton/AiButton'
import QuillEditor from '../../components/quillEditor/QuillEditor'
import Tags from '../../components/tags/Tags'
import { TextContentContext } from '../../hooks/textContentContext'
import {
  generateJist,
  generateTags,
  generateTitle,
  improviseContent,
} from '../../services/api/aiService'
import { convertHtmlToString } from '../../utils/utils'
import { DEFAULT_CONTENT } from './../../constants/appConstants'
import './Content.css'
import Impressions from './impressions/Impressions'
import AiInfo from './info/AiInfo'
import ContentInfo from './info/ContentInfo'
import SidePanel from './sidePanel/SidePanel'
import Thumbnail from './thumbnail/Thumbnail'

const Content = () => {
  const navigate = useNavigate()
  const { contentId } = useParams()
  const toast: any = useRef(null)
  const [content, setContent] = useState(DEFAULT_CONTENT)
  const [textContents, dispatchContent] = useContext(TextContentContext)
  const [isEditing, setIsEditing] = useState(true)

  useEffect(() => {
    if (contentId) {
      const content = textContents.find((content: any) => content.id === contentId)
      if (content) {
        setContent(content)
        console.log(content)
        setIsEditing(false)
      } else {
        // navigate('/contents')
      }
    }
  }, [contentId, textContents])

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

  const populateJist = async () => {
    const jist = await generateJist(formik.values.content)
    formik.setFieldValue('jist', jist)
    setContent(formik.values)
  }

  const populateTitle = async () => {
    const title = await generateTitle(formik.values.content)
    formik.setFieldValue('title', title)
    setContent(formik.values)
  }

  const populateTags = async () => {
    const tags = await generateTags(formik.values.content)
    formik.setFieldValue('tags', tags)
    setContent(formik.values)
  }

  const enhanceContent = async () => {
    const content = await improviseContent(formik.values.content)
    formik.setFieldValue('content', content)
    setContent(formik.values)
  }

  return (
    <>
      <Toast ref={toast} />
      <form
        onSubmit={formik.handleSubmit}
        className="w-full h-full bg-transparent p-2 flex justify-center"
      >
        <div className="w-11/12 bg-transparent space-x-4 flex" id="pdfContent">
          <div className="w-1/5 bg-transparent h-full flex flex-col space-y-3 rounded-lg">
            <div className="h-72 border rounded-lg p-2 flex flex-col text-start shadow relative">
              <span className="text-cyan-600 text-lg ms-1 font-semibold mb-2">Tags: </span>
              <Tags formik={formik} placeholder="Tag your content" readOnly={!isEditing} />
              {isEditing && (
                <AiButton
                  formik={formik}
                  label="Generate"
                  clickHandler={populateTags}
                  isDisabled={convertHtmlToString(formik.values.content).length <= 300}
                />
              )}
            </div>
            <div className="h-72 border rounded-lg p-2 flex flex-col text-start shadow relative">
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
              {isEditing && (
                <AiButton
                  formik={formik}
                  label="Generate"
                  clickHandler={populateJist}
                  isDisabled={convertHtmlToString(formik.values.content).length <= 300}
                />
              )}
            </div>
            {!isEditing ? <ContentInfo formik={formik} /> : <AiInfo formik={formik} />}
          </div>
          <div className="w-4/5 p-2 relative border rounded-lg shadow max-h-full overflow-auto">
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
                {!isEditing && <Impressions formik={formik} />}
                {isEditing && (
                  <AiButton
                    formik={formik}
                    label="Generate"
                    clickHandler={populateTitle}
                    isDisabled={convertHtmlToString(formik.values.content).length <= 300}
                  />
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
            {isEditing && (
              <AiButton
                formik={formik}
                label="Improvise"
                clickHandler={enhanceContent}
                isDisabled={convertHtmlToString(formik.values.content).length <= 300}
              />
            )}
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
