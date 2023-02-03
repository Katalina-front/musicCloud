import styled from 'styled-components';

export const SContainerHeader = styled.div`
width: auto;
height: 80px;

${({ theme }) => theme.breakpoints.down('xs')} {
    background-color: #ff0000;
}
`;