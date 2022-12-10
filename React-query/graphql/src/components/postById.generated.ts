import * as Types from '../../types/__generated__/types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
export type GetCharacterByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type GetCharacterByIdQuery = { __typename?: 'Query', character?: { __typename?: 'Character', id?: string | null, name?: string | null, status?: string | null, type?: string | null, gender?: string | null, image?: string | null, origin?: { __typename?: 'Location', id?: string | null, name?: string | null } | null, location?: { __typename?: 'Location', id?: string | null, name?: string | null } | null } | null };


export const GetCharacterByIdDocument = `
    query GetCharacterById($id: ID!) {
  character(id: $id) {
    id
    name
    status
    type
    gender
    origin {
      id
      name
    }
    location {
      id
      name
    }
    image
  }
}
    `;
export const useGetCharacterByIdQuery = <
      TData = GetCharacterByIdQuery,
      TError = unknown
    >(
      variables: GetCharacterByIdQueryVariables,
      options?: UseQueryOptions<GetCharacterByIdQuery, TError, TData>
    ) =>
    useQuery<GetCharacterByIdQuery, TError, TData>(
      ['GetCharacterById', variables],
      fetcher<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>(GetCharacterByIdDocument, variables),
      options
    );