import { AiTwotoneDislike, AiOutlineDislike, AiTwotoneLike, AiOutlineLike } from 'react-icons/ai'
import { MdOutlineRemoveRedEye, MdOutlineVerified } from 'react-icons/md'

const Impressions = ({ formik }: any) => {
  return (
    <div className="flex space-x-4 absolute left-3 bottom-3">
      <div className="flex">
        <MdOutlineRemoveRedEye size={25} className="text-gray-400" />
        <span className="ms-1 font-semibold text-gray-500">{formik.values.views}</span>
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
        <span className="ms-1 font-semibold text-gray-500">{formik.values.dislikes}</span>
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
        <span className="ms-1 font-semibold text-gray-500">{formik.values.likes}</span>
      </div>
      {formik.values.verifiedBy && <MdOutlineVerified size={25} className="text-green-600" />}
    </div>
  )
}

export default Impressions
