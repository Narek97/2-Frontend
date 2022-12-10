import * as Types from '../types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { axiosRequest } from '../../axiosHelper/axiosRequest';
export type GetMeQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetMeQuery = { getMe: { id: number, name?: string | null, email?: string | null, role: string } };


export const GetMeDocument = `
    query getMe {
  getMe {
    id
    name
    email
    role
  }
}
    `;
export const useGetMeQuery = <
      TData = GetMeQuery,
      TError = unknown
    >(
      variables?: GetMeQueryVariables,
      options?: UseQueryOptions<GetMeQuery, TError, TData>
    ) =>
    useQuery<GetMeQuery, TError, TData>(
      variables === undefined ? ['getMe'] : ['getMe', variables],
      axiosRequest<GetMeQuery, GetMeQueryVariables>(GetMeDocument).bind(null, variables),
      options
    );
useGetMeQuery.document = GetMeDocument;


useGetMeQuery.getKey = (variables?: GetMeQueryVariables) => variables === undefined ? ['getMe'] : ['getMe', variables];
;
