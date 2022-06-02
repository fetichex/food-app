/* import { useState } from 'react'
import { useDispatch } from 'react-redux' */
import { BsSearch } from 'react-icons/bs'

import { SearchBtn, Input, Search } from './SearchBar.styles'
import { color } from '../../styles/variables.styles'
// import { findRecipes } from '../../redux/thunks/thunk'

export const SearchBar = () => {
  /*   const dispatch = useDispatch()

  const [state, setState] = useState('')
  const handleChange = (e) => {
    setState(e.target.value)
  } */

  /*   const handleSubmit = () => {
    dispatch(findRecipes(state))
  } */

  return (
    <Search>
      <Input
        type="text"
        name="search"
        placeholder="SEARCH"
        /*  onChange={handleChange} */
      ></Input>
      <SearchBtn
        whileTap={{ backgroundColor: color.green }}
        /* onClick={() => {
          handleSubmit()
        }} */
      >
        <BsSearch />
      </SearchBtn>
    </Search>
  )
}
