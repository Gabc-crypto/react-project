import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App() {
  const dadosDosAlunos = [
    {nome: "Gabriel", idade: 16, dataNascimento: "19-11-2007", sexo: "Masculino"},
    {nome: "Sofia", idade: 15, dataNascimento: "27-08-2008", sexo: "Feminino"},
    {nome: "Hellena", idade: 16, dataNascimento: "19-11-2007", sexo: "Feminino"}
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome dos Alunos</TableCell>
            <TableCell align="right">Idade</TableCell>
            <TableCell align="right">Data de Nascimento</TableCell>
            <TableCell align="right">Sexo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dadosDosAlunos.map((row) => (
            <TableRow
              key={row.nome}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="right">{row.idade}</TableCell>
              <TableCell align="right">{row.dataNascimento}</TableCell>
              <TableCell align="right">{row.sexo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;