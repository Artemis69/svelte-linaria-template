import { css } from 'linaria';
import { darken } from 'polished';

const primaryColor = '#ff3e00';

export const main = css`
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;

    @media (min-width: 640px) {
		max-width: none;
	}
`;

export const heading = css`
    color: ${primaryColor};
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
`;

export const link = css`
    color:  ${primaryColor};
    &:visited{
        color: ${primaryColor};
    }
    &:hover{
        color: ${darken(0.1, primaryColor)};
    }
    &:active{
        color: ${darken(0.2, primaryColor)};
    }
`;