import { Link } from "@mui/material";
import { useRecoilValue } from "recoil";
import Table from "../../component/table";
import Thumbnail from "../../component/thumbnail";
import { imageListState } from "../../store/atom";

const ImageListTable = (props: any) => {
    const imageList = useRecoilValue(imageListState);

    const handleChangePage = () => {};

    return (
        <Table>
            <Table.Head>
                <Table.Cell>Thumbnail</Table.Cell>
                <Table.Cell>ID</Table.Cell>
                <Table.Cell>Author</Table.Cell>
                <Table.Cell>Link</Table.Cell>
            </Table.Head>
            <Table.Body>
                {imageList.map(({ id, author, url, download_url }) => (
                    <Table.Row key={id}>
                        <Table.Cell>
                            <Thumbnail src={download_url} />
                        </Table.Cell>
                        <Table.Cell>{id}</Table.Cell>
                        <Table.Cell>{author}</Table.Cell>
                        <Table.Cell>
                            <Link href={url}>이동</Link>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
}

export default ImageListTable;