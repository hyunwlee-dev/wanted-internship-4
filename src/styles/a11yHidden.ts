import { css } from "styled-components";

export const A11yHidden = css`
  overflow: hidden;
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  clippath: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  whitespace: nowrap;
`
