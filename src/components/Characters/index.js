import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as API from '../../api/character';
import TablePagination from '@material-ui/core/TablePagination';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    API.getCharacters(0, 10).then(result => {
      setCharacters(result.data);
      setTotal(result.total);
      setPage(result.page);
      setLimit(result.limit);
    });
  }, []);

  const obterNovosDados = (newPage, newLimit) => {
    API.getCharacters(newPage, newLimit).then(result => {
      setCharacters(result.data);
      setTotal(result.total);
      setPage(result.page);
      setLimit(result.limit);
    });
  };

  const handleChangePage = (event, newPage) => {
    obterNovosDados(newPage, limit);
  };
  const handleChangeRowsPerPage = event => {
    const newLimit = parseInt(event.target.value, 10);
    obterNovosDados(0, newLimit);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Race</TableCell>
              <TableCell>Height</TableCell>
              <TableCell>Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {characters.map(row => (
              <TableRow hover key={row._id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.race}</TableCell>
                <TableCell>{row.height}</TableCell>
                <TableCell>{row.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 500]}
        component="div"
        count={total}
        rowsPerPage={limit}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

export default Characters;
