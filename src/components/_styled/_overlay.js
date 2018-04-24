import styled from 'styled-components';

const Overlay = styled.div.attrs({
  style: ({coords, progress}) => ({
    background: `radial-gradient(circle at ${coords.x}px ${coords.y}px,
                transparent ${progress}%, #FCE883 0%)`
  })
})`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  cursor: crosshair;
`;

export default Overlay;
