import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BsSearch } from 'react-icons/bs'

import { SearchBtn, Input, Search } from './SearchBar.styles'
import { color } from '../../styles/variables.styles'
import { findRecipes } from '../../redux/thunks/thunk'

export const SearchBar = () => {
  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(findRecipes(value))
  }

  return (
    <Search>
      <Input
        type="text"
        name="search"
        placeholder="SEARCH"
        onChange={handleChange}></Input>
      <SearchBtn
        whileTap={{ backgroundColor: color.green }}
        onClick={() => {
          handleSubmit()
        }}>
        <BsSearch />
      </SearchBtn>
    </Search>
  )
}
