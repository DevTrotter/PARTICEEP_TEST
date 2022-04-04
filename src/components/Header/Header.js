import StyledHeader from './StyledHeader'
import logo from '../../images/logo.svg'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi';



export const Header = () => {
    const [valueInput, setValueInput] = useState('')

    const handleChangeInput = (e) => {
        setValueInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <StyledHeader>
            <img src={logo} alt="logo-img"/>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Rechercher un film" onChange={(e) => handleChangeInput(e)} value={valueInput}/>
                <button type="submit">
                    <FiSearch/>
                </button>
            </form>
        </StyledHeader>
    )
}
