import styled from "styled-components";

const ArrowContainer = styled.div`
border-top:solid 3px white;
border-left:solid 3px white;
width:10px;
height:10px;
transform: rotate(310deg);

&.rtl{
    transform: rotate(140deg) !important;
}
`
export const Arrow = ({ rtl }) => {
  return <ArrowContainer className={rtl ? "rtl":""}></ArrowContainer>
}

