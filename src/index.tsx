import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {RecoilRoot} from "recoil";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RecoilRoot>
        <QueryClientProvider client={client}>
            <App />
        </QueryClientProvider>
    </RecoilRoot>
);
