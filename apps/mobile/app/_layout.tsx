import { Slot } from 'expo-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { queryClient } from '../src/api/queryClient'
import '../styles/globals.css'

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </SafeAreaProvider>
  )
}
