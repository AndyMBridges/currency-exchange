import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border-bottom: ${props => props.border || '2px solid #a0a6ad'};
    background-color: #fff;
    padding: 0;
    border-radius: 3px;
    transition: .5s linear;
    background-color: #f3f4f5;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    font-size: 20px;
    color: #191c1e;
    outline: none;
    &::placeholder {
        color: #a0a6ad;
        font-size: 20px;
    }
    &:focus {
        border-bottom: 2px solid #191c1e;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background: #f3f4f5;
    width: 100%;
    text-align: left;
    padding: 1rem;
    position: sticky;
    top: 0;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    color: #777;
    font-size: 0.8em;
    margin: 0.5em 0;
    position: relative;
    width: 100%;
    color: #eb008d;
`;

export const Text = styled.p`
    color: ${props => props.color || '#4d4d4d'};
    font-size: ${props => props.fontSize || '.8rem'};
    align-self: flex-start;
`;
