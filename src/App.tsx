import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import MobileRouter from './MobileRouter';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <MobileRouter />
    </QueryClientProvider>
  );
}

export default App;
