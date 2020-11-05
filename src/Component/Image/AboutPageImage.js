import React from 'react';
import styled from 'styled-components';
import AboutPage from 'src/Images/AboutPage.jpg';


const Image = styled.img`

  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
class AboutPageImage extends React.Component {
  render () {
    return (<Image src={AboutPage} alt='AboutPage image' />);
  }
}

export default AboutPageImage;