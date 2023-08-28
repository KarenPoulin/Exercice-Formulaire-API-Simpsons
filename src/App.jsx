import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SearchForm } from './Components/SearchForm/SearchForm'
import './App.css'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<SearchForm />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
