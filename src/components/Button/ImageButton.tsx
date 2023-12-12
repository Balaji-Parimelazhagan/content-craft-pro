
type buttonType = "button" | "submit" | "reset" | undefined
interface Iprops {
  buttonText: string,
  src: string,
  alt: string,
  purpose?: "primary" | "secondary",
  customStyle?: string,
  type?: buttonType,
  handleClick?: () => void
};
const ImageButton = ({alt, buttonText, src, type = 'button', handleClick}: Iprops) => {
  return (
    <button
        type={type}
        className= {`min-w-[188px] h-12 bg-white rounded-lg border mr-2 text-blue-600`}
        onClick={handleClick}
    >
      <div className="flex justify-center">
          <img src={src} alt={alt} />
          <span className="ml-2">
          {buttonText}
          </span>
      </div>        
    </button>
  )
}

export default ImageButton