import { createRoot } from 'react-dom/client';
import './main.css';
import { RootLayout } from '@/layouts';

createRoot(document.getElementById('root')!).render(
  <>
    <RootLayout />
  </>,
);
