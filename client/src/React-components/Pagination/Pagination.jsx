import { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { selectRecipes } from '../../redux/recipesSlice'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Container, Page } from './Pagination.styles'

export const Pagination = () => {
  // const recipes = useSelector((state) => selectRecipes(state))

  const pages = 10
  const numberOfPages = []
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i)
  }

  const [currentButton, setCurrentButton] = useState(1)
  const [arrOfCurrentButtons, setArrOfCurrentButtons] = useState([])

  useEffect(() => {
    let tempNumberOfPages = [...numberOfPages]
    tempNumberOfPages = tempNumberOfPages.slice(0, 4)
    setArrOfCurrentButtons(tempNumberOfPages)
  }, [currentButton])
  return (
    <>
      <Container>
        <Page
          to={''}
          onClick={() =>
            setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
          }>
          <MdOutlineArrowBackIosNew />
        </Page>
        {arrOfCurrentButtons.map((page) => (
          <Page
            key={page}
            active={currentButton === page ? 'active' : ''}
            onClick={setCurrentButton(page)}
            to={''}>
            {page}
          </Page>
        ))}
        <Page
          to={''}
          direction={'left'}
          onClick={() =>
            setCurrentButton((prev) =>
              prev === numberOfPages.length ? prev : prev + 1
            )
          }>
          <MdOutlineArrowBackIosNew />
        </Page>
      </Container>
    </>
  )
}
