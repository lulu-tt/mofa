import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Vite 캐시와 브라우저 렌더링을 강제로 트리거하기 위한 주석 추가
console.log('MOFA App Mounting...');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
