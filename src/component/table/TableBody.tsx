import { TableBody } from "@mui/material";
import React from "react";

type TableBodyProps = {
    children: React.ReactNode;
};

const TableBodyBase = (props: TableBodyProps) => {
    return (
        <TableBody>
            {props.children}
        </TableBody>
    );
}

export default React.memo(TableBodyBase);