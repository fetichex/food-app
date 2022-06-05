import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos
} from 'react-icons/md'
import { Paginator } from './Pagination.styles'

export const Pagination = ({
  recipesPagination,
  allRecipes,
  pagination,
  currentPage
}) => {
  const pageNumbers = []
  for (let i = 0; i < Math.ceil(allRecipes / recipesPagination); i++) {
    pageNumbers.push(i + 1)
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      pagination(currentPage - 1)
    }
  }

  const handleNext = () => {
    console.log(currentPage, pageNumbers.length)
    if (currentPage < pageNumbers.length) {
      pagination(currentPage + 1)
    }
  }

  return (
    <Paginator>
      <button onClick={handlePrevious}>
        <MdOutlineArrowBackIosNew />
      </button>
      {pageNumbers?.map((number) => (
        <li key={number}>
          <button onClick={() => pagination(number)}>{number}</button>
        </li>
      ))}
      <button onClick={handleNext}>
        <MdOutlineArrowForwardIos />
      </button>
    </Paginator>
  )
}
