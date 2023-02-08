/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const Form = ({ children }: { children: any }) => {
    return (
        <form
            css={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            {children}
        </form>
    );
};

export const Input = ({ text = 'default' }: { text: string }) => {
    return (
        <input
            type="text"
            placeholder={text}
            required
            css={{
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
            }}
        ></input>
    );
};

export const Header = ({ children }: { children: any }) => {
    return (
        <header css={{}}>
            <h1
                css={{
                    fontSize: '80px',
                    margin: '0',
                    boxShadow: ' 0 0 10px 5px #fff',
                    borderRadius: '10px',
                }}
            >
                {children}
            </h1>
        </header>
    );
};

export const Button = ({ children }: { children: any }) => {
    return (
        <button
            css={{
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
            }}
        >
            {children}
        </button>
    );
};

export const Ul = ({ children }: { children: any }) => {
    return (
        <ul
            css={{
                listStyle: 'none',
                display: 'flex',
            }}
        >
            {children}
        </ul>
    );
};

export const ChatArea = ({ children }: { children: any }) => {
    return (
        <div
            css={{
                width: '1000px',
                height: '400px',
            }}
        >
            {children}
        </div>
    );
};

export default Header;
