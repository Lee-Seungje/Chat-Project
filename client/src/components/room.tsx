/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';

const Room = () => {
    return (
        <div>
            <h3></h3>
            <S.Ul></S.Ul>
            <S.Form>
                <S.Input text="닉네임 입력."></S.Input>
                <S.Button>전송</S.Button>
            </S.Form>
        </div>
    );
};
export default Room;
