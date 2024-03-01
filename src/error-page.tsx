import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    let errorMessage: string;
    if (isRouteErrorResponse(error)) {
        // error is type `ErrorResponse`
        errorMessage = error.data || error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = 'Unknown error';
    }
    return (
        <div className="py-4 flex items-center justify-center min-h-screen flex-col">
            <h1 className="text-4xl font-bold">Oops!</h1>
            <p className="py-2">Sorry, an unexpected error has occurred.</p>
            <p className="py-2">
                <i>{errorMessage}</i>
            </p>
            <Link to={"/"}><button className="p-2 my-2 bg-orange-300 text-white rounded-md">Return to home</button></Link>

        </div>
    );
}