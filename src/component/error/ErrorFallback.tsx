import { FallbackProps } from "react-error-boundary";

export default function ErrorFallback({ error }: FallbackProps) {
    return (
        <div role="alert">
            <h3>오류가 발생했습니다 :</h3>
            <pre>{error.message}</pre>
            <pre>{error.stack}</pre>
        </div>
    )
}