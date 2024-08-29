import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-4xl text-center my-10">Opps!!! No page found 404.</h2>
            <div className="text-center">
                <Link to="/"><button className="btn btn-ghost text-xl">Go to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;