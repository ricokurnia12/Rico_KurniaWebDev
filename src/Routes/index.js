import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import SignForm from '../Page/SignForm';
import Home from '../Page/Home';
import Detail from '../Page/Detail';

export const Router = () => {
  return (
    <Routes>
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignForm />} />
    </Routes>
  );
};
