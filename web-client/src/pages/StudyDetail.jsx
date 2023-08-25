import React from 'react';
import styled from 'styled-components';
import Title from '../components/StudyDetail/Title';

function StudyDetail(props) {
    return (
        <BaseDiv>
            <Title></Title>
        </BaseDiv>
    );
}

const BaseDiv = styled.div`
    max-width: 460px;
    margin: auto;
    background-color: gray;
`;

export default StudyDetail;
