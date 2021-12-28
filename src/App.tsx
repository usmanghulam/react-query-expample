import React, { useState } from 'react';
import Navbar from './components/Navbar/containers/Navbar';
import People from './components/People/containers/People';
import Planets from './components/Planets/containers/Planets';
import { QueryClientProvider, QueryClient } from 'react-query';

function App() {
  const [page, setPage] = useState("planet");
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navbar {...{ setPage }} />
        {(page === "planet") ? <Planets /> : <People />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
