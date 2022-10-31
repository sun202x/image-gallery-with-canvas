import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

const Header = (props: any) => {

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
                Home
            </Link>
            {/* <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
            >
                Core
            </Link>
            <Typography color="text.primary">Breadcrumbs</Typography> */}
        </Breadcrumbs>
    );
}

export default React.memo(Header);