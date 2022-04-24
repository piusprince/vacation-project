import React from "react";
import styled from "styled-components";
import beach from "../../Assets/images/beach.png";

const Welcome = () => {
  return (
    <Wrapper>
      <Container>
        <Tagline>Still waiting for the dream Vacation?</Tagline>
        <Subtext>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit in neque,
          ornare eu cursus sed. Massa at purus dictum ultrices vulputate eu cras
          interdum mauris.
        </Subtext>
        <Button>Book now</Button>
      </Container>
    </Wrapper>
  );
};

export default Welcome;

export const Wrapper = styled.div`
  background-image: url(${beach});
  object-fit: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
`;

const Container = styled.div`
  max-width: 45.6rem;
  padding: 10rem 7rem;
`;

const Tagline = styled.h1`
  font-size: 6.04rem;
  color: #f4fdf2;
`;

const Subtext = styled.p`
  font-size: 1.6rem;
  color: #f0e6b7;
  margin: 3.2rem 0;
`;

const Button = styled.button`
  width: 22.6rem;
  font-size: 1.6rem;
  padding: 1rem;
  cursor: pointer;
  color: #000;
  background-color: #f4fdf2;
  border: none;
`;
