import axios, {AxiosRequestHeaders} from 'axios';

const apiClient = axios.create({baseURL: 'https://api.staging.hotspotz.uk/'});

export const axiosRequest =
    <TData, TVariables>(
        query: string,
        headers?: AxiosRequestHeaders,
    ): ((variables?: TVariables) => Promise<TData>) =>
        async (variables?: TVariables) =>
            apiClient
                .post<{ data: TData; errors: any }>(
                    '',
                    {
                        query,
                        variables,
                    },
                    {headers: headers},
                )
                .then(res => {
                    if (res.data.errors) {
                        throw new Error(res.data.errors[0].message);
                    }
                    return res.data.data;
                });

// apiClient.interceptors.request.use(
//     function (config) {
//         if (config.headers) {
//             // if (store.getState().auth.token) {
//             //     config.headers.Authorization = `Bearer ${store.getState().auth.token}`;
//             // }
//
//             // config.headers.Mode = APP_ENV.MODE;
//         }
//         return config;
//     },
//     function (error) {
//         console.warn('Errrr', error);
//         //TODO handle some errors
//         return Promise.reject(error);
//     },
// );
//
// apiClient.interceptors.response.use(function (response) {
//     if (
//         response.data.hasOwnProperty('errors') &&
//         response.data.errors[0]?.extensions.response?.statusCode === 401
//     ) {
//         // logOut(true);
//         // return Promise.reject(response.data.errors[0].extensions.response.message);
//     }
//     return response;
// });