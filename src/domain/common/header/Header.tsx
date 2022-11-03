import { Link, Typography } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import Breadcrumbs from "../../../component/breadcrumbs";
import { currentIdState } from "../../../store/atom";

const Header = (props: any) => {
    const currentId = useRecoilValue(currentIdState);

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
                Home
            </Link>
            {currentId && 
                <Typography color="text.primary">
                    {currentId}
                </Typography>
            }
        </Breadcrumbs>
    );
}

export default React.memo(Header);