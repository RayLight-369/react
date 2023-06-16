import "../Utilities/Css/common.css"
import "../Utilities/Css/Navbar.css"
import Logo from "../Utilities/Imgs/logo.svg"
import Pfp from "../Utilities/Imgs/pfp.svg"
import BrightMode from "../Utilities/Imgs/bright-mode.svg"
import { Outlet, Link } from "react-router-dom"
import { memo } from "react"
function Navbar() {

    // var [selected, setSelected] = useState("Pakistan");
    // var countries = ["Pakistan", "India", "America"]

    // const handleChange = useCallback((e) => {
    //     setSelected(e.target.value)
    // }, [selected])
    return (
        <>
            <header className="header">
                <nav>
                    <Link to={"/"}><img src={ Logo } alt="Logo"/></Link>
                    {/* <select value={selected} onChange={handleChange}>
                        { countries.map(country => <option value={ country }>{ country }</option>)}
                    </select> */}
                    <ul id="links">
                        <li><Link to="/">Mobile</Link></li>
                        <li><Link to="/">Cars</Link></li>
                        <li><Link to="/">House</Link></li>
                        <li><Link to="/">Sports</Link></li>
                        <li><Link to="/">Health & Beauty</Link></li>
                    </ul>
                    <div id="profile-mode">
                        <img src={BrightMode} alt=""/>
                        <img src={Pfp} alt=""/>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default memo(Navbar);