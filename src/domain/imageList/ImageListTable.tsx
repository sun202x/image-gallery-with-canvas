import { Link } from "@mui/material";
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ImageType } from "../../api";
import Table from "../../component/table";
import Thumbnail from "../../component/thumbnail";
import { currentIdState, imageListState } from "../../store/atom";
import { refineImageUrl } from "../../util";

const ImageRow = ({ id, author, url, download_url }: ImageType) => {
    const navigate = useNavigate();
    const setCurrentImage = useSetRecoilState(currentIdState);

    const thumbnail = useMemo(() => 
        refineImageUrl(download_url, 300, 200)
    , [download_url]);

    const handleClick = () => {
        setCurrentImage(id);
        navigate('/detail');
    }

    return (
        <Table.Row>
            <Table.Cell>
                <Thumbnail onClick={handleClick} src={thumbnail} />
            </Table.Cell>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{author}</Table.Cell>
            <Table.Cell>
                <Link href={url}>이동</Link>
            </Table.Cell>
        </Table.Row>
    );
}

const ImageListTable = () => {
    const imageList = useRecoilValue(imageListState);

    return (
        <Table>
            <Table.Head>
                <Table.Cell>Thumbnail</Table.Cell>
                <Table.Cell>ID</Table.Cell>
                <Table.Cell>Author</Table.Cell>
                <Table.Cell>Link</Table.Cell>
            </Table.Head>
            <Table.Body>
                {imageList.map((image) => <ImageRow key={image.id} {...image} />)}
            </Table.Body>
        </Table>
    );
}

export default React.memo(ImageListTable);