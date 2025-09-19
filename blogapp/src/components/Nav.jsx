import { Link } from 'react-router-dom';


export default function Nav() {
    return (
        <nav>
            <Link to="/homes">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}
