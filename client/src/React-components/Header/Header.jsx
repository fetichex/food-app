import { Section, Logo } from './Header.styles'
import { SearchBar } from '../SearchBar/SearchBar'
import { Pagination } from '../Pagination/Pagination'

export const Header = () => {
  return (
    <Section>
      <Logo>
        <h1>API Food</h1>
      </Logo>
      <SearchBar />
      <Pagination />
    </Section>
  )
}
