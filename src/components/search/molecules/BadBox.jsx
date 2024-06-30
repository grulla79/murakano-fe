import React from 'react';
import styled from 'styled-components';
import ResultTitleComponent from "@/components/search/atoms/ResultTitleComponent";
import ResultContentComponent from "@/components/search/atoms/ResultContentComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 691px;
  height: 90px;
  padding: 10px 30px;
  margin-bottom: 10px;
  border-radius: 30px;
  border-bottom: 1px solid transparent;
  background: #B8D5FF1A;
`;

export default function GoodBox() {
    return (
        <Container>
            <ResultTitleComponent text="어색한 발음" />
            <ResultContentComponent text="일반적인 발음" />
        </Container>
    );
}