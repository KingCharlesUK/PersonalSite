import { Link } from "react-router-dom";
import "../bg.scss";

const NotFound = () => {
    return (
        <div class="context">
            <h2>404.<br></br>Page Not Found.</h2><br></br>
            <Link className="main-btn" to="/"><i class="fas fa-arrow-left"></i> Home</Link>
        </div>
    );
};

export default NotFound;