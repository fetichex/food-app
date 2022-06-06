import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BsSearch } from 'react-icons/bs'

import { SearchBtn, Input, Search } from './SearchBar.styles'
import { findRecipes } from '../../redux/utils/thunk'

export const SearchBar = () => {
  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(findRecipes(value))
    console.log(`Searching for ${value}`)
    setValue('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <Search>
      <Input
        type="text"
        name="search"
        placeholder="SEARCH"
        autoComplete="off"
        value={value}
        onKeyDown={handleKeyPress}
        onChange={handleChange}></Input>
      <SearchBtn
        onClick={() => {
          handleSubmit()
        }}>
        <BsSearch />
      </SearchBtn>
    </Search>
  )
}
