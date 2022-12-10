import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Character from "./character";


const queryClient = new QueryClient();


const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Character/>
        </QueryClientProvider>
    );
};

export default App;