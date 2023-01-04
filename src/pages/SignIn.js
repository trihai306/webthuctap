import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FormSignIn from "../components/FormSignIn";
import Introduce from "../components/Introduce";
import LoadingSignIn from "../components/LoadingSignIn";
import '.././css/sign-in.css'

function SignIn() {

    const [showSignIn, setShowSignIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            console.log('ok')
            setShowSignIn(true);
        }, 1000)
        // return clearTimeout(timeLoading);
    }, []);

    return (
        <div className="sign-in">
            {
                showSignIn ?
                    <Container
                        className="wrap-sign-in"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%'
                        }}
                    >
                        <img
                            className="change-display-img"
                            alt="Marketing 360"
                            style={{ width: '200px', verticalAlign: 'middle' }}
                            src="https://d22if4xzkonim2.cloudfront.net/logo-marketing360.svg"
                        />
                        <FormSignIn></FormSignIn>
                        <Introduce></Introduce>
                    </Container>
                    : <LoadingSignIn></LoadingSignIn>
                // <LoadingSignIn></LoadingSignIn> 
            }
        </div>
    )
}

export default SignIn;