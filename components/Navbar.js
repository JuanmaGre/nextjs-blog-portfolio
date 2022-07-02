import Link from "next/link";

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link href="/">
                <a className="navbar-brand">Portfolio</a>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
        
        {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link href="/blog">
                        <a className="nav-link active" aria-current="page">
                            Blog
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/socialNet">
                        <a className="nav-link">
                            Social Network
                        </a>
                    </Link>
                </li>
            </ul>
            </div>
        {/* </div> */}
    </nav>
    );
};

export default Navbar;
