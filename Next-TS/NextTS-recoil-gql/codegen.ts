import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'https://api.staging.hotspotz.uk/',
    documents: './**/*.graphql',
    generates: {
        './gql/types.ts': {plugins: ['typescript']},
        './': {
            preset: 'near-operation-file',
            presetConfig: {
                extension: '.generated.tsx',
                baseTypesPath: 'gql/types.ts',
                folder: 'generated'
            },
            plugins: ['typescript-operations', 'typescript-react-query'],
            config: {
                exposeQueryKeys: true,
                exposeDocument: true,
                skipTypename: true,
                fetcher: {
                    func: '../../axiosHelper/axiosRequest#axiosRequest',
                    isReactHook: true,
                    // endpoint: 'https://api.staging.hotspotz.uk/',
                    // fetchParams: JSON.stringify({
                    //     headers: {
                    //         "Content-Type": "application/json",
                    //         authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbmFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY2NjQ1OTU0NCwiZXhwIjoxNjc0MjM1NTQ0fQ.B-IcBKIwNm9goWAowO6qJuSwYvYPXObVaFXnh0xvbRc`,
                    //     },
                    // })
                }
            }
        },
    },
};
export default config;