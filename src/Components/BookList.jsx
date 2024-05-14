import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const BookList = ({books}) => {
    console.log(books)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Book Name</TableCell>
                        <TableCell align="left">Author</TableCell>
                        <TableCell align="left">Available Copies</TableCell>
                        <TableCell align="left">Categories</TableCell>
                        <TableCell align="left">rating</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books?.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.author}</TableCell>
                            <TableCell align="left">{row.quantity}</TableCell>
                            <TableCell align="left">{row.category}</TableCell>
                            <TableCell align="left">{row.rating}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BookList;