import React, {FC} from 'react';
import * as Styled from './HomePageStyled';
import {useQuery} from "@apollo/client";
import {GET_ANIME_PAGE} from "../../graphql/queries/getAnimePage";

interface IHomePageProps {

}

const HomePage: FC<IHomePageProps> = () => {

    const {data, loading, error} = useQuery(GET_ANIME_PAGE, {
        variables:{
            first: 10
        }
    });

    return (
        <Styled.Container>
            homepage
        </Styled.Container>
    );
};

export default HomePage;