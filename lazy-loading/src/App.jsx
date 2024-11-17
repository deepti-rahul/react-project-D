import React, { Suspense } from "react";
// import LazyLoading from "./LazyLoading";

const LazyLoading = React.lazy(() => import('./LazyLoading'))
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading Data....</div>}>
        <LazyLoading />
      </Suspense>
    </>
  )
}

export default App;
