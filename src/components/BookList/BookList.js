import React from 'react'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';
import './BookList.scss'


const BookList = ({ items, click, handleDelete }) => {
  const books = items.map((book) => (
    <Card key={book.id} className="book">
      <CardHeader
        title={book.title}
        subtitle={book.author}
      />
      <CardText>{book.description}</CardText>
      <CardActions>
        <FlatButton label="Delete book" onClick={handleDelete(book.id)} />
      </CardActions>
    </Card>
  ));

  return (
    <div className="bookList">
      {books}
    </div>
  )
};

export default BookList
