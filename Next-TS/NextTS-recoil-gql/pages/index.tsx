import React, {FC, useEffect, useState} from 'react';
import {useGetMeQuery} from "../gql/generated/getMe.generated";
import {
    GetAppUsersDocument,
    GetAppUsersQuery,
    GetAppUsersQueryVariables,
    useGetAppUsersQuery
} from "../gql/generated/getAppUsers.generated";
import {GetServerSideProps} from "next";
import {axiosRequest} from "../axiosHelper/axiosRequest";
import {User} from "../gql/types";

interface IUsersProps {
    users: User[];
}

const Index: FC<IUsersProps> = () => {

    const [offset, setOffset] = useState(0);


    const onSuccess = (data: any) => {
        console.log('Perform side effect after data fetching', data);
    };

    const onError = (error: any) => {
        console.log('Perform side effect after encountering fetching', error);
    };

    // const {data} = useGetMeQuery();

    const {
        isLoading,
        data: usersData,
        isError,
        error,
        isFetching,
        refetch
    } = useGetAppUsersQuery({getAppUsersArgs: {limit: 6, offset}}, {enabled: true, onSuccess});

    useEffect(() => {
        console.log(usersData, 'usersData');
        // usersData?.getAppUsers?.users && setUsersState([...usersState, ...usersData.getAppUsers.users]);
    }, [usersData]);


    const getUsers = () => {
        setOffset(prev => prev + 6);
        refetch();
    };
    return (
        <div>
            <button onClick={getUsers}>Fetch users</button>
            {
                usersData?.getAppUsers?.users?.map((el: User) => <p key={el.id}>{el.id} - {el.name}</p>)
            }

        </div>
    );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async ({query}): Promise<any> => {
    const users = await axiosRequest<GetAppUsersQuery, GetAppUsersQueryVariables>(GetAppUsersDocument).bind(null, {
        getAppUsersArgs: {
            limit: 6,
            offset: 0
        }
    })();

    return {
        props: {
            users: users?.getAppUsers?.users || [],
        },
    };
};
