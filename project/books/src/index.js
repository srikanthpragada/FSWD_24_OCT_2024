import React from 'react';
import { createRoot } from 'react-dom/client';
import Books from './Books'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Books />

);

