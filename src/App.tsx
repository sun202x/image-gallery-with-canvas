import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ErrorFallback } from './component/error';
import ImageDetailPage from './domain/imageDetail';
import ImageListPage from './domain/imageList';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Suspense fallback={'Loading...'}>
          <div className="app">
            <ErrorBoundary fallbackRender={ErrorFallback}>
              <Routes>
                <Route path="/" element={<ImageListPage />} />
                <Route path="/detail" element={<ImageDetailPage />} />
              </Routes>
            </ErrorBoundary>
          </div>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
