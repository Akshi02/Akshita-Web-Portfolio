import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <div className="wrapper">
                <span>Akshita Bhatia</span>
                <div className="social">
                    <a href="#"><img src="/Linkedin.png" alt="" /></a>
                    <a href="#"><img src="/github2.png" alt="" /></a>
                    <a href="#"><img src="/discord.png" alt="" /></a>
                    <a href="#"><img src="/youtube.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar