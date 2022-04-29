import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from '../App';
import { Layout } from '../components/Layout';
import { CountryScreen } from '../pages/CountryScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>  
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/countries" element={<CountryScreen />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
