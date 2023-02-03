import styled from 'styled-components';

export const SContainerFooter = styled.div`
    flex-shrink: 0;
    background-color: #808000;

${({ theme }) => theme.breakpoints.down('xs')} {
    background-color: #ff0000;
}
`;