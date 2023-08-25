import React from 'react';
import styled from 'styled-components';
import Title from '../components/StudyDetail/Title';
import Information from '../components/StudyDetail/Information';
import Description from '../components/StudyDetail/Description';
import ApplyButton from '../components/StudyDetail/ApplyButton';

function StudyDetail(props) {
    return (
        <BaseDiv>
            <Title></Title>
            <Information></Information>
            <Description></Description>
            <ApplyButton></ApplyButton>
        </BaseDiv>
    );
}

const BaseDiv = styled.div`
    max-width: 460px;
    margin: auto;
    background-color: #f9f9f9;
    box-sizing: border-box;
    /* position: relative; */
`;

export default StudyDetail;
