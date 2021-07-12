import "./register.css"

export default function register() {
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">Ballerz</h3>
                    <span className="registerDesc">Connect with people to enjoy some sports!
                    </span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input placeholder="Email" className="registerInput" />
                        <input placeholder="UserName" className="registerInput" />
                        <input placeholder="Password" className="registerInput" />
                        <input placeholder="Confirm(Password)" className="registerInput" />
                        <button className="registerButton"> Sign up</button>
            
                        <button className="RegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


