import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import '../navigation/navigation.scss'
import { UserContext } from "../../components/contexts/userContext";
import { signOutUser } from "../../utils/firebase/firebase";
const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    // console.log(currentUser)

    const signOutHandler = async () => {
        await signOutUser()
        setCurrentUser(null)
    }

    return (
        <Fragment>
            <div className="navigation ">
                <Link className="logo-container" to='/'>
                    <CrownLogo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        <div>Shop</div>
                    </Link>

                    {
                        currentUser ?
                            (
                                <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                            )
                            :
                            (
                                <Link className="nav-link" to='/auth'>
                                    <div>SIGN IN</div>
                                </Link>
                            )
                    }


                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;