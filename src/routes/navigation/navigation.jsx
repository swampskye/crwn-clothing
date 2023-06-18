import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import '../navigation/navigation.scss'
const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation ">
                <Link className="logo-container" to='/'>
                    <CrownLogo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-links-container" to='/shop'>
                        <div>Shop</div>
                    </Link>
                    <Link className="nav-links-container" to='/signin'>
                        <div>SignIn</div>
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;