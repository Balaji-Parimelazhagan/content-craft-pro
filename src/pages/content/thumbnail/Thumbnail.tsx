import { FileUpload } from 'primereact/fileupload'
import { Image } from 'primereact/image'
import { GrEdit } from 'react-icons/gr'
import { LuUploadCloud } from 'react-icons/lu'

const Thumbnail = ({ formik, isEditing }: any) => {
  return formik.values.thumbnail ? (
    <div className="relative my-2 inline-block ms-auto me-10 border border-cyan-200 rounded-lg">
      <Image
        src={formik.values.thumbnail}
        alt="Image"
        className="w-44 h-44 flex items-center justify-center"
        preview
      />
      {isEditing && (
        <FileUpload
          mode="basic"
          name="thumbnail"
          accept="image/*"
          maxFileSize={2000000}
          uploadHandler={(e) => customBase64Uploader(e, formik)}
          auto
          customUpload
          chooseLabel=" "
          className="absolute top-2 right-2 thumnail-edit"
          chooseOptions={{ icon: <GrEdit size={20} className="cursor-pointer" /> }}
        />
      )}
    </div>
  ) : isEditing ? (
    <FileUpload
      mode="basic"
      name="thumbnail"
      accept="image/*"
      maxFileSize={2000000}
      uploadHandler={(e) => customBase64Uploader(e, formik)}
      auto
      customUpload
      chooseLabel="Thumbnail"
      className="me-10 my-2 ms-auto flex items-center justify-center w-44 h-44"
      chooseOptions={{ icon: <LuUploadCloud size={30} /> }}
    />
  ) : (
    <></>
  )
}

const customBase64Uploader = async (event: any, formik: any) => {
  const file = event.files[0]
  const reader = new FileReader()
  const blob = await fetch(file.objectURL).then((r) => r.blob())
  reader.readAsDataURL(blob)
  reader.onloadend = function () {
    const base64data = reader.result
    formik.setFieldValue('thumbnail', base64data)
  }
}

export default Thumbnail
