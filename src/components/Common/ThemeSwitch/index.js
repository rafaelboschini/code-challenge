import React from 'react';
import styled from 'styled-components';

export const ThemeSwitch = (props) => (
  <ThemeSwitchContainer htmlFor="toggle" onClick={props.onClick}>
    <input id="toggle" className="toggle" type="checkbox"/>
  </ThemeSwitchContainer>
);

const ThemeSwitchContainer = styled.label`
.toggle {
  --size: 1.2rem;
  
  appearance: none;
  outline: none;
  cursor: pointer;
  
  width: var(--size);
  height: var(--size);
  box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
  border-radius: 999px;
  color: #827307;  
  transition: all 500ms;
  
  &:checked {
    --ray-size: calc(var(--size) * -0.4);
    --offset-orthogonal: calc(var(--size) * 0.65);
    --offset-diagonal: calc(var(--size) * 0.45);

    transform: scale(.8);
    color: #FF9900 !important;
    
    box-shadow: 
      inset 0 0 0 var(--size),
      calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
      var(--offset-orthogonal) 0 0 var(--ray-size),
      0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
      0 var(--offset-orthogonal) 0 var(--ray-size),
      calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0 var(--ray-size),
      var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
      calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size),
      var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size)
  }
}
`
