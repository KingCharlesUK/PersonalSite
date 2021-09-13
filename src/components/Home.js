import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div class="context">
            <h2>Charlie.<br></br>Full-Stack Developer.<br></br>CS Student.</h2><br></br>
            <Link className="main-btn" to="/projects">My Projects <i class="fas fa-arrow-right"></i></Link>
        </div>
    );
};

export default Home;