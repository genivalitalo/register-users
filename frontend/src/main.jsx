import { createRoot } from 'react-dom/client'
import './index.css'
import BaseLayout from './layouts/BaseLayout'
import HomePage from './pages/Home/Home'

createRoot(document.getElementById('root')).render(
    <BaseLayout>
    <HomePage/>
    </BaseLayout>
)
