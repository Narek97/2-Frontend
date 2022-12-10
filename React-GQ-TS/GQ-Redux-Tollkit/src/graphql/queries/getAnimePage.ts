import {gql} from "@apollo/client";


export const GET_ANIME_PAGE = gql`
    query getAllPlanets($first: Int!) {
        allPlanets(first:$first){
            planets{
                name
                diameter
                rotationPeriod
                gravity
                population
                climates
                terrains

            }
        }
    }
`;