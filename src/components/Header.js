import React from 'react';
import styled from 'styled-components';

const Head = styled.header`
    padding: 2rem 1rem;
    text-align: center;
    color: #191c1e;
    display: flex;
    justify-content: center;
    background-color: #f3f4f5;
`;

const Header = () => <Head>Currency Exchange</Head>;

export default Header;
