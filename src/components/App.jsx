import React, { lazy, Suspense } from "react"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Routes, Switch, Route } from 'react-router-dom';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';

import DummyList from './DummyList';
import DummyTable from './DummyTable';
import DummyChart from './DummyChart';

// import Home from '../pages/Home';
import Table from "pages/Table";
import Chart from "pages/Chart";
import NotFound from "pages/NotFound";

import tabs from '../tabs.json';

// const Home = lazy((path) => import(`./${path}`));


const Home = (path) => {
  const LazyComponent = lazy(() => import(`./${path}`));
  return (
    <main>
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </Suspense>
    </main>
);
}



// function getTabComponent(tabId) {
//   switch (tabId) {
//     case 'dummyTable':
//       return <DummyTable />;
//     case 'dummyChart':
//       return <DummyChart />;
//     case 'dummyList':
//       return <DummyList />;
//     default:
//       return <NotFound />; 
//   }
// };


export const App = () => {
  return (
    <div>
       {tabs.map((tab) => (
                        <NavLink key={tab.id} to={`/${tab.id}`}>
                            {tab.title}
                        </NavLink>
                    ))}
      <Routes>
        <Route path="/" element={<Navigate to={`/${tabs[0].id}`} replace />} />
          {tabs.map((tab) => (
          <Route key={tab.id} path={tab.id} element={Home(tab.path)} /> ))}
     </Routes>

{/* <Routes>
      <Route path="/" element={<Home />} />
      {tabsData.map((tab) => (
        <Route
          key={tab.id}
          path={`/${tab.id}`}
          element={
            tab.id === 'dummyTable'
              ? <DummyTable />
              : tab.id === 'dummyChart'
              ? <DummyChart />
              : tab.id === 'dummyList'
              ? <DummyList />
              : null 
          }
        />
      ))}
    </Routes> */}
      
      {/* <Switch>
        <Suspense>
        {tabsData.map((tab) => (
          <Route
            key={tab.id}
            path={`/${tab.id}`}
            component={tabComponentMap[tab.id]} // Потрібно створити tabComponentMap
          />
        ))}
        </Suspense>
      </Switch> */}

      {/* <nav>
        <NavLink to="/">Dummy List</NavLink>
        <NavLink to="/localhost">Dummy Table</NavLink>
        <NavLink to="/localhost">Dummy Chart</NavLink>
      </nav> */}

      {/* <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/tabs/dummyTable.js' element={<Table />}/>
        <Route path='/tabs/dummyChart.js' element={<Chart />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>  */}
    </div>
  );
};
