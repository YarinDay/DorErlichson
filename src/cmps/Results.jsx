import React from 'react';
import { Col, Result } from "antd"
import styled from "styled-components";
import { isMobile } from 'react-device-detect';

const ResultContainer = styled.div`
  align-items: flex-start;
`;
const Highlight = styled.span`
  font-weight: bold;
  color: #d32f2f;
`;

const StyledResult = styled(Result)`
  .ant-result-content{
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  padding: 20px;
  border-radius: 8px;
`;

export const Results = ({ tdee, bmr }) => {
    return (
        <>
            {tdee && bmr && (
                <ResultContainer>
                    <StyledResult icon={null}>
                        <p>דרישת האנרגיה הכוללת היומית שלך (TDEE) היא: <Highlight>{tdee}</Highlight> קלוריות ליום.</p>
                        <p>קצב חילוף החומרים הבסיסי שלך (BMR) הוא: <Highlight>{bmr}</Highlight> קלוריות ליום.</p>
                        <p>כדי לרדת במשקל:</p>
                        <ul>
                            <li>ירידה מתונה במשקל (0.25 ק"ג בשבוע): <Highlight>{(tdee * 0.9).toFixed(2)}</Highlight> קלוריות ליום.</li>
                            <li>ירידה במשקל (0.5 ק"ג בשבוע): <Highlight>{(tdee * 0.79).toFixed(2)}</Highlight> קלוריות ליום.</li>
                        </ul>
                        <p>כדי לעלות במשקל:</p>
                        <ul>
                            <li>עלייה מתונה במשקל (0.25 ק"ג בשבוע): <Highlight>{(tdee * 1.1).toFixed(2)}</Highlight> קלוריות ליום.</li>
                            <li>עלייה במשקל (0.5 ק"ג בשבוע): <Highlight>{(tdee * 1.21).toFixed(2)}</Highlight> קלוריות ליום.</li>
                            <li>עלייה מהירה במשקל (1 ק"ג בשבוע): <Highlight>{(tdee * 1.41).toFixed(2)}</Highlight> קלוריות ליום.</li>
                        </ul>
                    </StyledResult>
                </ResultContainer>
            )}
        </>
    )
}