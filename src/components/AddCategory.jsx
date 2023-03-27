import { useState } from "react"
export const AddCategory = ({ newCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
       // console.log(target.value)
    }
    const onSubmitCategory = (event) => {
        event.preventDefault();
       //console.log('hola desde el evento on submit category' + event) 
       newCategory(inputValue);
    }
    return (
    <>
        <form onSubmit={onSubmitCategory} aria-label= 'form'>
            <input type="text" placeholder="search gifs.." value={inputValue} onChange={ (event) => onInputChange(event) } name="" id="" 

            />
        </form>
    </>
  )
}
