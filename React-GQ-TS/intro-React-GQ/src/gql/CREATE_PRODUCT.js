import {gql} from "@apollo/client";

export const CREATE_PRODUCT = gql`
    mutation CreateProduct($name: String!, $quantityPerUnit:Int!) {
        createProduct(record:{name:$name, quantityPerUnit:$quantityPerUnit}){
            record{
                name
            }
        }
    }
`;
