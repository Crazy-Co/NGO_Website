import styles from '../cssfiles/scrollnav.css'

export const ScrollNav = () => {
    return (
        <div className="scroll_nav">
            <ul>
                <li>
                    <a href="#">Home</a>{" "}
                </li>
                <li>
                    <a href="#about_us_section">About Us</a>{" "}
                </li>
                <li>
                    <a href="#contributors_section">Contributors</a>{" "}
                </li>
                <li>
                    <a href="#team_section">Our Team</a>{" "}
                </li>
                <li>
                    <a href="#contact_section">Contact Us</a>{" "}
                </li>
            </ul>
        </div>
    );
};
