import styled from '@emotion/styled';
import { Button } from '@mui/material';

type ThumbnailProps = {
    src: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const ThumbnailBase = styled('img')`
    max-height: 200px;
    max-width: 300px;
`;

const Thumbnail = ({ src, onClick }: ThumbnailProps) => (
    <Button onClick={onClick} sx={{ maxWidth: 300, maxHeight: 200 }}>
        <ThumbnailBase src={src} />
    </Button>
);

export default Thumbnail;