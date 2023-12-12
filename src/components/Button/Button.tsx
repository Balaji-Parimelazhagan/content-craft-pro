type buttonType = "button" | "submit" | "reset" | undefined
interface Iprops {
	name: string,
	disabled?: boolean,
	purpose?: "primary" | "secondary" | "text",
	type?: buttonType,
	customStyle?: string,
	handleClick?: () => void
};
const Button = ({ name, handleClick, disabled = false, purpose = "primary", type= "button", customStyle }: Iprops) => {
	const buttonClass = (purpose: string) => {
		switch (purpose) {
			case "secondary": 
				return 'secondary-button-gradient rounded-lg border'
			case "text":
				return 'rounded-lg border-none'
		}
		return 'button-gradient rounded-lg shadow shadow-inner border border-cyan-600'
	}
	const textClass = (purpose: string) => {
		switch (purpose) {
			case "secondary":
				return 'text-base font-normal leading-normal tracking-tight text-cyan-600'
			case "text": 
				return 'text-base text-sm font-normal leading-normal tracking-tight text-cyan-600'
		}
		return 'font-medium text-white'
	}
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={handleClick}
			className={`
				${!disabled ? buttonClass(purpose)
					: 'bg-zinc-100 rounded-lg shadow shadow-inner border border-stone-300'
				}
				${customStyle ? customStyle : ''}
			`}
		>
			<div
				className={`
					text-center tracking-wide leading-normal font-['Heebo']
          ${!disabled ? textClass(purpose) : 'text-neutral-500 text-base font-normal'}`
				}
			>
				{name}
			</div>
		</button>
	)
}

export default Button