import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function OrderTableSimple({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Номер покупки</TableCell>
            <TableCell align="right">Позиция</TableCell>
            <TableCell align="right">Количество</TableCell>
            <TableCell align="right">Сумма</TableCell>
            <TableCell align="right">Чистая прибыль</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows !== [] && rows.map((row) => (
            <TableRow
              key={row.purchaseNumber}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.id}</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.count}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.netPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
