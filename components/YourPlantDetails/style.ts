import styled from 'styled-components';
import COLORS from '@/styles/colors';
import { P1, P3 } from '@/styles/text';

export const Container = styled.div`
  padding: 16px;
  background-color: ${COLORS.glimpse};
  border-radius: 5px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
export const HarvestButton = styled.button`
  margin-top: 10px;
  width: 145px;
  height: 32px;
  border-radius: 5px;
  background: ${COLORS.shrub};
  border: none;
  color: #fff;
  text-align: center;
  font-family: inherit;
  font-size: 12px;
  font-weight: 300;

  &:hover {
    cursor: pointer;
  }
`;

export const PlantDetailsText = styled(P1)`
  font-weight: 500;
  width: 100%;
  color: ${COLORS.shrub};
`;

export const EditPlantLabel = styled(P3)`
  font-weight: 400;
  width: 71px;
`;
