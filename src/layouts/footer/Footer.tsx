import './../../styles/footer.scss'

export function Footer() {
    return (
        <div className="footer">
            <div className="footer-credentials">
                <p>
                    Housen © 2020
                </p>
            </div>
            <div className="footer-links">
                <a href="#">
                    <p>About</p>
                </a>
                <a href="#">
                    <p>FAQ</p>
                </a>
                <a href="#">
                    <p>Terms & Conditions</p>
                </a>
                <a href="#">
                    <p>Privacy Policy</p>
                </a>
            </div>
        </div>
    )
}