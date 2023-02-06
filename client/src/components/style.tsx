/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const Form = ({ children }: { children: any }) => {
    return <form css={{}}>{children}</form>;
};

export const Input = ({ text = 'default' }: { text: string }) => {
    return (
        <input
            css={{
                placeholder: text,
                width: '9vw',
                height: '100px',
                outline: 'none',
                borderRadius: '10px',
                border: '1px gray solid',
                backgroundColor: 'white',
                fontSize: '20px',
                boxShadow: '0 10px 10px -5px',
            }}
        ></input>
    );
};

export const Header = ({ children }: { children: any }) => {
    return (
        <header css={{}}>
            {children}
            <h1 css={{}}></h1>
        </header>
    );
};

export const Button = ({ children }: { children: any }) => {
    return (
        <button
            css={{
                width: '200px',
                height: '70px',
                backgroundColor: 'yellow',
                color: 'black',
                boxShadow: '0 10px 10px -5px',
            }}
        >
            {children}
        </button>
    );
};

export const Ul = () => {
    return (
        <ul
            css={{
                listStyle: 'none',
            }}
        ></ul>
    );
};
