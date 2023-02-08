/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';

const Enter = () => {
    return (
        <div>
            <S.Form>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '300px',
                    }}
                >
                    <S.Input text="방 이름 입력."></S.Input>
                    <S.Input text="닉네임 입력."></S.Input>
                    <S.Button>입장</S.Button>
                </div>
            </S.Form>
            <h3
                style={{
                    color: 'white',
                    fontSize: '25px',
                }}
            >
                입장 가능한 전장
            </h3>
            <S.Ul>{}</S.Ul>
        </div>
    );
};

export default Enter;
