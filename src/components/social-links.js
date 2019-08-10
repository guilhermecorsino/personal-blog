import React from "react"
import styled from "@emotion/styled"

import GitHubBrand from "../images/social/github.svg"
import LinkedInBrand from "../images/social/linkedin.svg"

const Container = styled.div`
  text-align: center;
`

const SocialLogo = styled.img`
    min-width: 24px;
    max-width: 24px;
    margin-left: 5%;
`

const SocialLinks = () => {
    return (
        <Container>
            <a href="https://github.com/guilhermecorsino" target="_blank" rel="noopener noreferrer">
                <SocialLogo src={GitHubBrand} />
            </a>

            <a href="https://www.linkedin.com/in/guilhermecorsino/" target="_blank" rel="noopener noreferrer">
                <SocialLogo src={LinkedInBrand} />
            </a>
        </Container>
    );
};

export default SocialLinks;