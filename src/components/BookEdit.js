import { useState } from 'react'
import useBooksContext from '../hooks/use-books-context'

function BookEdit({ book, toggleEditForm }) {
  const { editBookById } = useBooksContext()
  const [title, setTitle] = useState(book.title)

  const handleInput = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editBookById(book.id, title)
    toggleEditForm()
  }

  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label>Title</label>
      <input className='input' value={title} onChange={handleInput} />
      <button className='button is-primary'>Save</button>
    </form>
  )
}

export default BookEdit
