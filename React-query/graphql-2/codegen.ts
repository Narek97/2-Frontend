// import type {CodegenConfig} from '@graphql-codegen/cli';
//
// const config: CodegenConfig = {
//     overwrite: true,
//     schema: "https://rickandmortyapi.com/graphql",
//
//     generates: {
//         'src/generated/index.ts': {
//             documents: "src/**/*.graphql",
//             plugins: ['typescript', 'typescript-operations', 'typescript-react-query']
//         }
//     }
//
// };
//
// export default config;


// import type { CodegenConfig } from '@graphql-codegen/cli';
//
// const config: CodegenConfig = {
//     schema: 'https://rickandmortyapi.com/graphql',
//     documents: 'src/**/*.graphql',
//     generates: {
//         'src/types.ts': { plugins: ['typescript'] },
//         'src/': {
//             preset: 'near-operation-file',
//             presetConfig: {
//                 baseTypesPath: 'types.ts',
//                 folder: '__generated__'
//             },
//             plugins: ['typescript-operations', 'typescript-react-query'],
//
//         },
//     },
// };
// export default config;

import type {CodegenConfig} from '@graphql-codegen/cli';
// import axiosRequest from './axiosHelper/axiosRequest'

const config: CodegenConfig = {
    schema: 'https://api.staging.hotspotz.uk/',
    documents: 'src/**/*.graphql',
    generates: {
        'src/gql/types.ts': {plugins: ['typescript']},
        'src/': {
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