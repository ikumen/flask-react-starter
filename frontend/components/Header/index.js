import React from "react";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #ccc;
`;

class Header extends React.Component {
    render() {
        return (
            <Title>{this.props.title}</Title>
        );
    }
}

export default Header;