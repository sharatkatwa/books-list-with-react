import { useState } from 'react'

function BookEdit({ onEdit, book, toggleEditForm }) {
  const [title, setTitle] = useState(book.title)

  const handleInput = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onEdit(book.id, title)
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
