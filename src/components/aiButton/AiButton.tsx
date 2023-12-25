import { BsStars } from 'react-icons/bs'

const AiButton = ({ label, clickHandler, isDisabled = false }: any) => {
  return (
    <div
      className={`absolute bottom-2 right-2 flex items-center ${
        isDisabled ? 'bg-gray-400' : 'bg-cyan-600 cursor-pointer'
      } text-white w-max rounded-lg shadow border-2 border-amber-400 p-1.5 px-2 font-semibold`}
      onClick={() => !isDisabled && clickHandler()}
    >
      <BsStars className="me-1 text-amber-400" />
      {label}
    </div>
  )
}
export default AiButton
