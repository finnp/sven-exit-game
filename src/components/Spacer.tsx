import styled from "styled-components";

const Spacer = styled.div<{ size?: number }>`
  height: ${(props) => props?.size ?? 16}px;
  width: ${(props) => props?.size ?? 16}px;
`;

export default Spacer;
