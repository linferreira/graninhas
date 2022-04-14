import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root{
		--background: #f0f2f5;
		--green: #33cc95;
		--pink: #ae2d68;
		--pink-light: #ffc2c7;
		--red: #ff5757;
		--shape: #ffffff;
		--text-body: #969cb3;
		--text-title: #363f5f;
	}
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		@media (max-width: 1080px){
			font-size: 93.75%;
		}

		@media (max-width: 720px){
			font-size: 87.5%;
		}
	}

	body {
		background: var(--background);
		font-family: 'Poppins', sans-serif;
		--webkit-font-smoothing: antialiased;
	}

	border-style, input, textarea, button {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 600;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		cursor: not-allowed;
		opacity: 0.6;
	}
`;
