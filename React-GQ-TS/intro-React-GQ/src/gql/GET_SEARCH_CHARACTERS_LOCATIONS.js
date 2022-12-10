import {gql} from "@apollo/client";

export const GET_SEARCH_CHARACTERS_LOCATIONS = gql`
    query GetCharactersLocations($name: String!) {
        characters(filter:{name:$name}){
            results{
                location{
                    id
                    name
                }
            }
        }
    }
`;
