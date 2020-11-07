import React from 'react';
import styled from 'styled-components';
import Text from 'src/Component/Text';

const StyledComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`;

const Box = styled.div`
width: 48%;
height: 48%;
margin:5px;


.box-top-section{
  display: flex;
  width: 100%;
  height: 50%;

  .box-icon-section{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    color: white;
  }
  .box-Text-section{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
  }
  .box-bottom-section{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
  }  
}

@media (max-width: 700px) {
  width: 100%;
  height: 50%;
}
`;

class AboutExplanation extends React.Component {

  render () {
    return (
      <StyledComponent>
        <Box>
          <div className="box-top-section">
            <div className="box-icon-section">
              <i class="fas fa-dumbbell fa-3x" />
            </div>
            <div className="box-Text-section">
              <Text white>운동</Text>
            </div>
          </div>
          <div className="box-bottom-section">
            <Text white>Subtitle-SectionSubtitle-SectionSubtitle-SectionSubtitle-SectionSubtitle-SectionSubtitle-Section</Text>
          </div>
        </Box>
        <Box>
          <div className="box-top-section">
            <div className="box-icon-section">
              <i class="fab fa-think-peaks fa-3x" />
            </div>
            <div className="box-Text-section">
              <Text white>생각</Text>
            </div>
          </div>
          <div className="box-bottom-section">
            <Text white>Subtitle-SectionSubtitle-SectionSubtitle-SectionSubtitle-SectionSubtitle-SectionSubtitle-Section</Text>
          </div>
        </Box>
        <Box>
          <div className="box-top-section">
            <div className="box-icon-section">
              <i class="fas fa-map-pin fa-3x" />
            </div>
            <div className="box-Text-section">
              <Text white>목표지향</Text>
            </div>
          </div>
          <div className="box-bottom-section">
            <Text white>Subtitle-SectionSubtitle-SectionSubtitle-SectionSubtitle-SectionSubtitle-SectionSubtitle-Section</Text>
          </div>
        </Box>
        <Box>
          <div className="box-top-section">
            <div className="box-icon-section">
              <i class="fas fa-clock fa-3x" />
            </div>
            <div className="box-Text-section">
              <Text white>규칙적, 반복적</Text>
            </div>
          </div>
          <div className="box-bottom-section">
            <Text white>Subtitle-SectionSubtitle-SectionSubtitle-SectionSubtitle-SectionSubtitle-SectionSubtitle-Section</Text>
          </div>
        </Box>
      </StyledComponent>
    );
  }

}

export default AboutExplanation;
