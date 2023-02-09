/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Form = styled.form({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});

export const Input = styled.input({
    width: '700px',
    height: '100px',
    outline: 'none',
    borderRadius: '10px',
    border: '0px',
    backgroundColor: 'white',
    fontSize: '30px',
    boxShadow: '0 10px 10px -5px',
    paddingLeft: '20px',
    ':focus': {
        boxShadow: '0 10px 10px -5px #b8b4a7',
        transition: 'ease-in-out 0.2s',
    },
});
// type="text"
// placeholder={text}
// required
// css={{
// }}

export const Header = styled.header({
    fontSize: '80px',
    margin: '0',
    boxShadow: ' 0 0 10px 5px #fff',
    borderRadius: '10px',
});

export const Button = styled.button({
    width: '200px',
    height: '70px',
    backgroundColor: 'white',
    color: 'black',
    boxShadow: '0 10px 10px -5px',
    cursor: 'pointer',
    border: '0px',
    borderRadius: '10px',
    fontSize: '25px',
    ':hover': {
        boxShadow: '0 10px 10px -5px #b8b4a7',
        transition: 'ease-in-out 0.2s',
    },
});

export const Ul = styled.ul({
    listStyle: 'none',
    display: 'flex',
});

export const ChatArea = styled.div({
    width: '1000px',
    height: '400px',
    backgroundColor: '#FFF',
    borderRadius: '10px',
});

export default Header;
