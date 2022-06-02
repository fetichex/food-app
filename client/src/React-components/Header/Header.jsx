import { Section, Logo, Pagination } from './Header.styles'
import { SearchBar } from '../SearchBar/SearchBar'
const pages = [1, 2, 3, 4, 5]

export const Header = () => {
  return (
    <Section>
      <Logo>
        <h1>API Food</h1>
      </Logo>
      <SearchBar />
      <Pagination>
        {pages.map((page) => (
          <button key={page}>{page}</button>
        ))}
      </Pagination>
    </Section>
  )
}
