/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';

const Room = () => {
    return (
        <div>
            <h3></h3>
            <S.ChatArea>
                <S.Ul>{}</S.Ul>
            </S.ChatArea>
            <S.Form>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '200px',
                        justifyContent: 'space-around',
                    }}
                >
                    <S.Input text=""></S.Input>
                    <S.Button>전송</S.Button>
                </div>
            </S.Form>
        </div>
    );
};
export default Room;
