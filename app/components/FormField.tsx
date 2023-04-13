import { useEffect, useState } from "react"


// app/components/form-field.tsx
interface FormFieldProps {
    htmlFor: string
    label: string
    type?: string
    value: any
    onChange?: (...args: any) => any
	placeholder: string
	error?: string
}
  
  export function FormField({ htmlFor, label, type = 'text', value, onChange = () => {}, placeholder, error }: FormFieldProps) {
	const [errorText, setErrorText] = useState(error)

    useEffect(() => {
        setErrorText(error)
    }, [error])

    return (
      	<>
        	<label htmlFor={htmlFor} className="font-black text-[#915eff] text-2xl">
          		{label}
        	</label>
       		<input
				onChange={e => {
					onChange(e)
					setErrorText('')
				}}
				type={type}
				id={htmlFor}
				name={htmlFor}
				className="w-full p-2 rounded-xl my-2 bg-tertiary"
				style={{ color: 'white' }}
				value={value}
				placeholder={placeholder}
        	/>
			<div className="text-xs font-black text-center tracking-wide text-red-500 w-full">
            	{errorText || ''}
       	 	</div>
      	</>
    )
  }