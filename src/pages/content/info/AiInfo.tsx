import { RiMagicFill } from 'react-icons/ri'
import { convertHtmlToString } from '../../../utils/utils'

const AiInfo = ({ formik }: any) => {
  return (
    <div className="border rounded-lg p-2 flex flex-col font-semibold text-gray-400 text-center shadow bg-cyan-50">
      <span className="text-cyan-600 m-2 text-lg font-extrabold mb-1">Sit back & do AI Magic</span>
      <RiMagicFill size={40} className="text-amber-400 mx-auto my-2" />
      <p>
        Allow Ai to do the magic! To enable Ai, develop your content above 300 characters.
        <br />
        Your current content length is
        <span className="text-black ms-1">{convertHtmlToString(formik.values.content).length}</span>
      </p>
    </div>
  )
}

export default AiInfo
