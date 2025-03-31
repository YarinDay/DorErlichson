import styled from "styled-components"

const StyledButton = styled.button`
    background-color: darkorange;
    border-radius: 8px;
    &:hover{
        background-color: orange;
        color: whitesmoke !important;
    }
`

export const MoreInfoButton = ({ index, onTogglePriceDetails, getPriceDetailsId }) => {
    return <StyledButton onClick={() => {
        onTogglePriceDetails(true)
        getPriceDetailsId(index)
    }}>לפרטים נוספים</StyledButton>
}