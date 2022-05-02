import { colours } from '../../constants/colours';
import styled from 'styled-components';


export const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 10rem;
  .MuiCircularProgress-root {
    color: ${(p) => p.colour || colours.lightGrey};
  }
`;