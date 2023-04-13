import { useState } from 'react'
import useBooksContext from '../hooks/use-books-context'
import BookEdit from './BookEdit'

function BookShow({ book }) {
  const { deleteBookById } = useBooksContext()

  const [showEdit, setShowEdit] = useState(false)

  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  const handleDeleteClick = () => {
    deleteBookById(book.id)
  }

  const content = showEdit ? (
    <BookEdit book={book} toggleEditForm={handleEditClick} />
  ) : (
    <h3>{book.title}</h3>
  )

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books' />
      {content}
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow
