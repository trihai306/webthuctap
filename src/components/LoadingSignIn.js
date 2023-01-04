import { Spinner } from "react-bootstrap";

function LoadingSignIn() {

    return (
        <div className="loading-sign-in">
            <div className="loading-introduce">
                <img
                    alt="Marketing 360"
                    style={{ width: '300px', verticalAlign: 'middle' }}
                    src="https://d22if4xzkonim2.cloudfront.net/logo-marketing360.svg"
                />
                <div className="loading-desc">
                    Fuel Your Brand®
                </div>
            </div>
            <Spinner animation="border" variant="primary" />
        </div>
    )
}

export default LoadingSignIn;