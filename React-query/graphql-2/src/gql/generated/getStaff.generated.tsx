import * as Types from '../types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { axiosRequest } from '../../axiosHelper/axiosRequest';
export type ListVenueStaffQueryVariables = Types.Exact<{
  listVenueStaffArgs: Types.ListVenueStaffArgs;
}>;


export type ListVenueStaffQuery = { listVenueStaff: { count: number, venueStaffs: Array<{ id: number, name: string, phone?: string | null, position?: string | null, email?: string | null }> } };


export const ListVenueStaffDocument = `
    query listVenueStaff($listVenueStaffArgs: ListVenueStaffArgs!) {
  listVenueStaff(listVenueStaffArgs: $listVenueStaffArgs) {
    count
    venueStaffs {
      id
      name
      phone
      position
      email
    }
  }
}
    `;
export const useListVenueStaffQuery = <
      TData = ListVenueStaffQuery,
      TError = unknown
    >(
      variables: ListVenueStaffQueryVariables,
      options?: UseQueryOptions<ListVenueStaffQuery, TError, TData>
    ) =>
    useQuery<ListVenueStaffQuery, TError, TData>(
      ['listVenueStaff', variables],
      axiosRequest<ListVenueStaffQuery, ListVenueStaffQueryVariables>(ListVenueStaffDocument).bind(null, variables),
      options
    );
useListVenueStaffQuery.document = ListVenueStaffDocument;


useListVenueStaffQuery.getKey = (variables: ListVenueStaffQueryVariables) => ['listVenueStaff', variables];
;
