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
export type CharactersQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type CharactersQuery = { __typename?: 'Query', characters?: { __typename?: 'Characters', results?: Array<{ __typename?: 'Character', id?: string | null, name?: string | null, status?: string | null, image?: string | null } | null> | null } | null };


export const CharactersDocument = `
    query Characters($page: Int) {
  characters(page: $page) {
    results {
      id
      name
      status
      image
    }
  }
}
    `;
export const useCharactersQuery = <
      TData = CharactersQuery,
      TError = unknown
    >(
      variables?: CharactersQueryVariables,
      options?: UseQueryOptions<CharactersQuery, TError, TData>
    ) =>
    useQuery<CharactersQuery, TError, TData>(
      variables === undefined ? ['Characters'] : ['Characters', variables],
      fetcher<CharactersQuery, CharactersQueryVariables>(CharactersDocument, variables),
      options
    );