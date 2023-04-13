import { useContext } from 'react'
import BooksContext from '../context/Books'

function useBooksContext() {
  return useContext(BooksContext)
}
export default useBooksContext
