import React from 'react';
import styled from 'styled-components';

function Description() {
    return (
        <DescriptionBox>
            <Introduce>스터디 소개</Introduce>
            <Content>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
            </Content>
        </DescriptionBox>
    );
}

const Introduce = styled.div`
    margin-left: 14px;
    margin-top: 14px;
    font-size: 16px;
    font-weight: 700;
`;
const DescriptionBox = styled.div`
    width: 90%;
    height: auto;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    margin: auto;
    margin-top: 31px;
    margin-bottom: 100px;
    font-size: 12px;
    font-weight: 700;
`;

const Content = styled.p`
    margin-left: 14px;
    margin-right: 14px;
    font-size: 14px;
    font-weight: 500;
`;
export default Description;
