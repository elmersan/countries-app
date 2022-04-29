import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from '../components/Layout';
import { CountryScreen } from '../pages/CountryScreen';
import { CountriesScreen } from '../pages/CountriesScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>  
      <Layout>
        <Routes>
          <Route path="/" element={<CountriesScreen/>} />
          <Route path="/countries" element={<CountryScreen />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
