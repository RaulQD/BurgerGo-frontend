import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { App } from './app/App';
import './app/index.css';
import { Toaster } from 'sonner';
import { Ban, Check } from 'lucide-react';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
            <Toaster
                position='top-center'
                duration={2000}
                icons={{
                    success: <Check className='text-green-500  w-4 h-4' />,
                    error: <Ban className='text-red-500 w-4 h-4' />,
                }}
            />
        </BrowserRouter>
    </StrictMode>
);
