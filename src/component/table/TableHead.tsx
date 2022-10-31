import { TableHead, TableRow } from "@mui/material";
import React from "react";

type TableHeadProps = {
    children: React.ReactNode;
};

const TableHeadBase = (props: TableHeadProps) => {
    return (
        <TableHead>
            <TableRow>
                {props.children}
            </TableRow>
        </TableHead>
    );
}

export default React.memo(TableHeadBase);