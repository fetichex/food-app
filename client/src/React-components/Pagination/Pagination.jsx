import { useState, useEffect } from 'react'
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos
} from 'react-icons/md'
import { Paginator, Button } from './Pagination.styles'

export const Pagination = ({ howManyPages, setCurrentPage }) => {
  const numberOfPages = []
  for (let i = 1; i <= howManyPages; i++) {
    numberOfPages.push(i)
  }
  const [currentButton, setCurrentButton] = useState(1)
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([])

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons]

    const dotsInitial = '...'
    const dotsLeft = '... '
    const dotsRight = ' ...'

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length]
    } else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5)
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length]
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton)
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1)
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length
      ]
    } else if (currentButton > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 4)
      tempNumberOfPages = [1, dotsLeft, ...sliced]
    } else if (currentButton === dotsInitial) {
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1)
    } else if (currentButton === dotsRight) {
      setCurrentButton(arrOfCurrButtons[3] + 2)
    } else if (currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrButtons[3] - 2)
    }

    setArrOfCurrButtons(tempNumberOfPages)
    setCurrentPage(currentButton)
  }, [currentButton])

  return (
    <Paginator>
      <Button
        whileHover={{ scale: 1.1 }}
        onClick={() =>
          setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1))
        }>
        <MdOutlineArrowBackIosNew />
      </Button>
      {arrOfCurrButtons?.map((number, i) => (
        <Button
          whileHover={{ scale: 1.1 }}
          key={i}
          active={number === currentButton ? 'active' : ''}
          onClick={() => setCurrentButton(number)}>
          {number}
        </Button>
      ))}
      <Button
        whileHover={{ scale: 1.1 }}
        onClick={() =>
          setCurrentButton((prev) =>
            prev >= numberOfPages.length ? prev : prev + 1
          )
        }>
        <MdOutlineArrowForwardIos />
      </Button>
    </Paginator>
  )
}
