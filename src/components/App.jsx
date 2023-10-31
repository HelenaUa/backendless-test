import React, { lazy, Suspense } from "react"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Routes, Switch, Route } from 'react-router-dom';
import { NavLink, Route, Routes } from 'react-router-dom';
import DummyList from './DummyList';
import DummyTable from './DummyTable';
import DummyChart from './DummyChart';
import Home from '../pages/Home';
import tabsData from '../tabs.json';
// console.log(tabsData);

// const Home = lazy(() => import('../pages/Home'));

// 
function getTabComponent(tabOrder) {
  switch (tabOrder) {
    case 'dummyTable':
      return <DummyTable />;
    case 'dummyChart':
      return <DummyChart />;
    case 'dummyList':
      return <DummyList />;
    default:
      return null; 
  }
};

export const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
          {tabsData.map((tab) => (
          <Route key={tab.order} path={`/${tab.order}`} element={getTabComponent(tab.order)} /> ))}
     </Routes> */}

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

      <nav>
        <NavLink to="/">Dummy List</NavLink>
        <NavLink to="/localhost">Dummy Table</NavLink>
        <NavLink to="/localhost">Dummy Chart</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/localhost' element={<DummyTable />}/>
        <Route path='/localhost' element={<DummyChart />}/>
      </Routes> 
    </div>
  );
};
