import { Button } from "react-bootstrap";

function FormSignIn() {

    return (
        <div className="form-sin-in">
            <form>
                <div className="form-desc">
                    Sign in to your Marketing 360® account
                </div>
                <input placeholder="Email" className="input-sign-in input-email"></input>
                <input placeholder="Password" className="input-sign-in input-password"></input>
                <div className="forgot-pw">Forgot Password?</div>
                <Button variant="primary" className="btn-sign-in">Sign In</Button>
            </form>
        </div>
    )
}

export default FormSignIn;