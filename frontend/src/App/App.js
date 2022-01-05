// react
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// components
import Nav from "./components/Nav";
import Loading from "./components/Loading";
import MatchList from "./components/MatchList";


export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, []);

  return (
    <div className="container__main">
      <Nav />
      <main className="container__body">
        {!loading ?
          <React.Suspense fallback={<Loading />}>
            <TransitionGroup>
              <CSSTransition timeout={250} classNames="fade" key={location.key}>
                <Routes location={location}>
                  <Route exact path="/england" element={<MatchList country="ENGLAND"/>} />
                  <Route exact path="/spain" element={<MatchList country="SPAIN"/>} />
                  <Route exact path="/italy" element={<MatchList country="ITALY"/>} />
                  <Route exact path="/portugal" element={<MatchList country="PORTUGAL"/>} />
                  <Route exact path="/france" element={<MatchList country="FRANCE"/>} />
                  <Route exact path="*" element={<MatchList country="ENGLAND"/>} />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          </React.Suspense>
        : <Loading />
        }
      </main>
    </div>
  );
}