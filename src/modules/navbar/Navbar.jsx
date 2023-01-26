import React from 'react';
import {
    StyledLink,
    NavbarWrapper,
    ButtonContainer,
} from './styledComponents';
import CustomButton from '../customComponents/customButton/CustomButton';
import CustomImage from '../customComponents/customImage/CustomImage';
import logo from '../../assets/images/q.svg';
import * as constants from '../../constants/constants';

const Navbar = ({
    user,
    signOut,
}) => {
    return (
        <NavbarWrapper>
                {user ?
                    <>
                        <CustomImage
                            image={logo}
                            width={'55px'}
                            height={'55px'}
                            margin={'0 40px'}
                        />
                        <ButtonContainer>
                            <StyledLink to={constants.MAIN_ROUTE}>
                                <CustomButton
                                    text={'Logout'}
                                    callback={signOut}
                                />
                            </StyledLink>
                        </ButtonContainer>
                    </>
                    :
                    <StyledLink to={constants.LOGIN_ROUTE}>
                        <CustomImage
                            image={logo}
                            width={'55px'}
                            height={'55px'}
                            margin={'0 40px'}
                        />
                    </StyledLink>
                }
        </NavbarWrapper>
    )
};

export default Navbar;
