import { useState } from 'react'
import useBooksContext from '../hooks/use-books-context'

function BookCreate() {
  const [title, setTitle] = useState('')
  const { createBook } = useBooksContext()

  const handleInput = (e) => {
    setTitle(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createBook(title)
    setTitle('')
  }

  return (
    <div className='book-create'>
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' value={title} onChange={handleInput} />
        <button className='button'>Submit</button>
      </form>
    </div>
  )
}

export default BookCreate
