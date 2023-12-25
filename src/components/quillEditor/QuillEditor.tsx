import { Editor } from 'primereact/editor'
import { IoClose } from 'react-icons/io5'
import './QuillEditor.css'
import { useEffect } from 'react'
const QuillEditor = ({
  name,
  formik,
  fontSize = '',
  customClass = '',
  placeholder = '',
  toolbarOptions = [],
  maxHeight = 0,
  readOnly = false,
}: any) => {
  const style: any = {}
  maxHeight && (style['maxHeight'] = `${maxHeight}px`)
  fontSize && (style['fontSize'] = fontSize)
  const showToolabr = () => {
    document.getElementById(`${name}-toolbar`).style.visibility = 'visible'
  }

  useEffect(() => {
    //TODO use readOnly attribute to replace this block
    const editor = document.getElementById(`${name}-editor`)
    const qlContainer = editor?.getElementsByClassName('ql-container')
    if (qlContainer && qlContainer[0]) {
      qlContainer[0].classList.remove('ql-disabled')
      const qlEditor = qlContainer[0]?.getElementsByClassName('ql-editor')[0]
      qlEditor.setAttribute('contentEditable', `${!readOnly}`)
      qlEditor.setAttribute('data-placeholder', `${readOnly ? '' : placeholder}`)
    }
  }, [readOnly])

  return (
    <Editor
      id={`${name}-editor`}
      name={name}
      value={formik.values[name]}
      headerTemplate={<Toolbar id={`${name}-toolbar`} toolbarOptions={toolbarOptions} />}
      onFocusCapture={showToolabr}
      onTextChange={(e) => formik.setFieldValue(name, e.htmlValue)}
      style={style}
      placeholder={placeholder}
      className={`${customClass} text-gray-500`}
    />
  )
}

const Toolbar = ({ id, toolbarOptions }: any) => {
  const hideToolabr = () => {
    document.getElementById(id).style.visibility = 'hidden'
  }
  return (
    <span className="ql-formats flex items-center" id={id}>
      {toolbarOptions.map((option: any) => {
        if (typeof option !== 'string') {
          return (
            <select key={Object.keys(option)[0]} className={`ql-${Object.keys(option)[0]}`}>
              {Object.values(option)[0].map((subOption: any) => (
                <option key={subOption} value={subOption} />
              ))}
            </select>
          )
        } else {
          return <button key={option} className={`ql-${option}`}></button>
        }
      })}
      <IoClose size={20} color="gray" className="ms-4 cursor-pointer" onClick={hideToolabr} />
    </span>
  )
}

export default QuillEditor
