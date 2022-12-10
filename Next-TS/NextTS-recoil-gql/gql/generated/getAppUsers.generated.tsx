import * as Types from '../types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { axiosRequest } from '../../axiosHelper/axiosRequest';
export type GetAppUsersQueryVariables = Types.Exact<{
  getAppUsersArgs: Types.GetAppUsersArgs;
}>;


export type GetAppUsersQuery = { getAppUsers?: { count: number, users: Array<{ id: number, name?: string | null, email?: string | null, hashtags: Array<{ hashtagId: number, name: string }> }> } | null };


export const GetAppUsersDocument = `
    query getAppUsers($getAppUsersArgs: GetAppUsersArgs!) {
  getAppUsers(getAppUsersArgs: $getAppUsersArgs) {
    count
    users {
      id
      name
      email
      hashtags {
        hashtagId
        name
      }
    }
  }
}
    `;
export const useGetAppUsersQuery = <
      TData = GetAppUsersQuery,
      TError = unknown
    >(
      variables: GetAppUsersQueryVariables,
      options?: UseQueryOptions<GetAppUsersQuery, TError, TData>
    ) =>
    useQuery<GetAppUsersQuery, TError, TData>(
      ['getAppUsers', variables],
      axiosRequest<GetAppUsersQuery, GetAppUsersQueryVariables>(GetAppUsersDocument).bind(null, variables),
      options
    );
useGetAppUsersQuery.document = GetAppUsersDocument;


useGetAppUsersQuery.getKey = (variables: GetAppUsersQueryVariables) => ['getAppUsers', variables];
;
