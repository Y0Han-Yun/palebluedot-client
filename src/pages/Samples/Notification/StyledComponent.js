import styled from 'styled-components';

const StyledComponent = styled.div`
  opacity: ${props => props.showing ? '1' : '0'};
  position: fixed;
  ${props => {
    const styledProps = props.styledProps;
    if (styledProps.top && styledProps.right) return `top: 1rem; right: 1rem;`;
    if (styledProps.top && styledProps.left) return `top: 1rem; left: 1rem;`;
    if (styledProps.bottom && styledProps.right) return `bottom: 1rem; right: 1rem;`;
    if (styledProps.bottom && styledProps.left) return `bottom: 1rem; left: 1rem;`;
    return `top: 1rem; right: 1rem;`;
  }}
  width: 250px;
  height: 50px;
  background-color: ${props => {
    if (props.styledProps.error) return 'red';
    if (props.styledProps.info) return 'orange';
    if (props.styledProps.success) return 'green';
    return 'green';
  }};
  z-index: 10;
  transition: all 0.3s;
  overflow-y: hidden;
  padding: 0.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 3px;
  color: #FFFFFF;
  p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default StyledComponent;
