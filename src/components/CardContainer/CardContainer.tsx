import { ReactElement } from "react";

interface Iprops {
    children: ReactElement,
    cardClass?: string
}

const CardContainer = ({ children, cardClass }: Iprops) => {
    return (
        <div  className={`${cardClass} m-1  bg-white rounded-[22px] shadow`}>
            {children}
        </div>
    )
}

export default CardContainer;