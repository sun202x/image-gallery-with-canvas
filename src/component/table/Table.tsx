import Paper from '@mui/material/Paper';
import TableMui from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from './TableBody';
import StyledTableCell from './TableCell';
import TableHead from './TableHead';
import StyledTableRow from './TableRow';

type TableProps = {
    children: React.ReactNode;
};

const TableBase = (props: TableProps) => (
    <TableContainer component={Paper}>
        <TableMui sx={{ minWidth: 800 }} aria-label="customized table">
            {props.children}
        </TableMui>
    </TableContainer>
);

const Table = Object.assign(TableBase, {
    Head: TableHead,
    Body: TableBody,
    Row: StyledTableRow,
    Cell: StyledTableCell
});

export default Table; 
