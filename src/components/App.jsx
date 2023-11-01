import React, { lazy, Suspense } from "react"
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';

import tabs from '../tabs.json';


const Home = (path) => {
  const LazyComponent = lazy(() => import(`./${path}`));
  return (
    <main>
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </Suspense>
    </main>
);
};


export const App = () => {
  const tabsSort = tabs.sort((a, b) => {
    return a.order - b.order;
});
  return (
    <div>
      <div 
        style={{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}
      >
        {tabsSort.map((tab) => (
                        <NavLink 
                          style={{
                            textDecoration: 'none', 
                            alignItems: 'center', 
                            marginLeft: '50px',
                            padding: '8px 16px',
                            borderRadius: '4px',
                            color: 'black',
                            fontWeight: '500'
                            }} 

                            key={tab.id} 
                            to={`/${tab.id}`}>
                            {tab.title}
                        </NavLink>
        ))}
      </div>
        <Routes>
          <Route path="/" element={<Navigate to={`/${tabs[0].id}`} replace />} />
            {tabsSort.map((tab) => (
          <Route key={tab.id} path={tab.id} element={Home(tab.path)} /> ))}
        </Routes>
    </div>
  );
};
