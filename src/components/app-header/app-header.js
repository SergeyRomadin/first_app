import React from 'react';

import './app-header.css'

import styled from 'styled-components';

const Header = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-between;
h1 {
    /* width: 150px;
    height: 150px; */
    font-size: 26px;
};
h2 {
    font-size: 1.2rem;
    color: grey;
};
`;

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header>
            <h1>Glazkov Sergey</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;