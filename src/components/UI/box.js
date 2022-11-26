import styled from "styled-components";

const fontSize = "20px";
const frameColor = "#000000";
const size = "2.5em";
const openWidth = "18em";
const openPadding = "0.3em 2.1em 0.3em 0.4em";
const frameThickness = "0.3em";
const handleHeight = "1.4em";
const openTransTime = "800ms";
const closeTransTime = "150ms";

export const SearchBox = styled.form`
	font-size: ${fontSize};
	border: solid ${frameThickness} ${frameColor};
	display: inline-block;
	position: relative;
	border-radius: ${size};

	input {
		font-family: inherit;
		font-weight: bold;
		width: ${size};
		height: ${size};
		padding: ${openPadding};
		border: none;
		box-sizing: border-box;
		border-radius: ${size};
		transition:
			width ${openTransTime} cubic-bezier(0.68, -0.55, 0.27, 1.55) ${closeTransTime};
		&:focus {
			outline: none;
		}
		&:focus, &:not(:placeholder-shown) {
			width: ${openWidth};
			transition: width ${openTransTime} cubic-bezier(0.68, -0.55, 0.27, 1.55);
			+ button[type="reset"] {
				transform: rotate(-45deg) translateY(0);
				transition:
					transform ${closeTransTime} ease-out ${openTransTime};
			}
			+ button[type="reset"]:after {
				opacity: 1;
				transition:
					top ${closeTransTime} ease-out (${openTransTime} + ${closeTransTime}),
					right ${closeTransTime} ease-out (${openTransTime} + ${closeTransTime}),
					opacity ${closeTransTime} ease (${openTransTime} + ${closeTransTime});
        }
      }
    }
    button[type="reset"] {
      background-color: transparent;
      width: ${handleHeight};
      height: ${handleHeight};
      border: 0;
      padding: 0;
      outline: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: calc( (${size} / 2) - (${handleHeight} / 2));
      right: calc((${size} / 2) - (${handleHeight} / 2));
      transform: rotate(-45deg) translateY(calc(${size} - ${frameThickness}));
      transition:
        transform ${closeTransTime} ease-out ${closeTransTime};
      &:before, &:after {
        content: "";
        background-color: ${frameColor};
        width: ${frameThickness};
        height: ${handleHeight};
        position: absolute;
      }
      &:after {
        transform: rotate(90deg);
        opacity: 0;
        transition:
          transform ${closeTransTime} ease-out,
          opacity ${closeTransTime} ease-out;
    		}
      }
    }    
`;


export const Input = styled.input`
  padding: 10px;
  width: 80px;
  height: 80px;
  background: none;
  border: 4px solid #ffd52d;
  border-radius: 50px;
  box-sizing: border-box;
  font-family: Comic Sans MS;
  font-size: 26px;
  color: #ffd52d;
  outline: none;
  transition: 0.5s;
`;
