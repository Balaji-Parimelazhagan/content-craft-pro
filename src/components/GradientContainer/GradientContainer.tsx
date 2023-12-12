import { ReactElement } from "react"

interface Iprops {
    children: ReactElement,
    heading?: string | ReactElement,
    gradientClass?: string, 
}

const GradientContainer = ({ children, heading, gradientClass }: Iprops) => {
  return (    
    <div className="flex h-screen justify-center items-center min-w-100">
      <div className={`${gradientClass}`} />
      <div className="absolute">
        <div>
          {
            heading && typeof heading === 'string' 
              ? <div className="sm:mx-auto sm:min-w-full sm:max-min-w-sm">
                  <h2
                    className="min-w-[404px] text-center text-teal-900 text-2xl font-light font-BricolageGrotesque leading-loose tracking-tight"
                  >
                    {heading}
                  </h2>
                </div>
              : <>{heading}</>
          }
          <div
            className="mt-7 sm:mx-auto sm:min-w-full bg-white bg-opacity-50 rounded-3xl border border-white backdrop-blur-xl"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GradientContainer;