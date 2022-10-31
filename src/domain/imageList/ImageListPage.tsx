import React from "react";
import Header from "../common/header";
import ImageListTable from "./ImageListTable";

const ImageListPage = () => {
    return (
        <div>
            <Header />
            <ImageListTable />
        </div>
    );
}

export default React.memo(ImageListPage);