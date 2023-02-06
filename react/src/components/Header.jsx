import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 2rem;
    padding-right: 2rem;
    height: 3rem;
    align-items: center;
`;

const HeaderItem = styled.div`
    padding-left: 1rem;
`;

export const Header = () => (
    <Wrapper>
        <HeaderItem>
            <NavLink to="input">Import</NavLink>
        </HeaderItem>
        <HeaderItem>Submissions</HeaderItem>
        <HeaderItem>
            <NavLink to="races">Races</NavLink>
        </HeaderItem>
        <HeaderItem>
            <NavLink to="outline">Outline</NavLink>
        </HeaderItem>
    </Wrapper>
);
