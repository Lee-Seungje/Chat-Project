/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';

const Enter = () => {
    return (
        <div>
            <S.Form>
                <S.Input text="방 이름 입력."></S.Input>
                <S.Input text="닉네임 입력."></S.Input>
                <S.Button>입장</S.Button>
            </S.Form>
            <h3>입장 가능한 방들</h3>
            <S.Ul></S.Ul>
        </div>
    );
};

export default Enter;
