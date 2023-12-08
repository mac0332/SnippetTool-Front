import { Link } from 'react-router-dom';

import {DropdownMenu, DropdownOption} from "./styles";
import userMenuOptions from '../../../utils/constants/userMenuOptions';
import { logout } from '../../../features/auth/userSlice';
import { useDispatch } from 'react-redux';

const LinkDropdown = ({isOpen}) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        window.location.href = '/entry';
    }

    return (
        <>
            {isOpen && (
                <DropdownMenu>
                    {userMenuOptions.map((opt) => 
                        <Link to={opt.path}>
                            <DropdownOption>
                                {opt.placeholder}
                            </DropdownOption>
                        </Link>
                    )}
                    <DropdownOption onClick={handleLogout}>
                        Logout
                    </DropdownOption>
                </DropdownMenu>
            )}
        </>
    );
}

export default LinkDropdown;