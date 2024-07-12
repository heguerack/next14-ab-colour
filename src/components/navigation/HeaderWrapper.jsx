import { HeaderProvider } from '@/context/Context'
import Header from './Header'

export default function HeaderWrapper() {
  return (
    <HeaderProvider>
      <Header />
    </HeaderProvider>
  )
}
