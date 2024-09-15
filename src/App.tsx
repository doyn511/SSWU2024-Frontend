import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import DesktopRouter from './DesktopRouter';
import MobileRouter from './MobileRouter';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const [queryClient] = useState(() => new QueryClient());

  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      // cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      {width >= 375 && width < 1440 ? <MobileRouter /> : <DesktopRouter />}
    </QueryClientProvider>
  );
}

export default App;
