import styled from "styled-components";

export const StyleAppWrapper = styled.div`
    max-width: 225rem;
    margin: 0 auto;
`;

export const Header = styled.header`
	z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
	width: 100%;
	box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.1);
`

export const Logo = styled.div`
    font-size: 20px;
    font-weight: bold;
`

export const Nav = styled.nav`
    display: flex;
    gap: 20px;

    a {
        color: white;
        text-decoration: none;
        font-size: 16px;
        transition: 0.2s;

        &:hover {
            color: #38bdf8;
        }
    }
`

export const Content = styled.div`
    margin-top: 80px; 
    padding: 20px;
`
