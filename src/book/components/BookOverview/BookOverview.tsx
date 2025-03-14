import React, { useEffect, useState } from "react";
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { Book } from "../../book";
import { BookDetails } from "../BookDetails/BookDetails";

export const BookOverview = () => {
  const [books, setBooks] = useState<Book[]>();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    const books = [
      {
        id: 1,
        authors: "John Example",
        title: "Example Book",
      },
      {
        id: 2,
        authors: "Joe Smith",
        title: "Another Book",
      },
    ]

    setBooks(books)
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item md={8}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>Authors</TableCell>
                <TableCell>Title</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books?.map((book) => (
                <TableRow key={book.id} onClick={
                  () => setSelectedBook(book)
                }>
                  <TableCell component="th" scope="row">
                    {book.id}
                  </TableCell>
                  <TableCell>{book.authors}</TableCell>
                  <TableCell>{book.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {selectedBook ? <BookDetails book={selectedBook} /> : null}
      </Grid>
    </Grid>
  );
};
