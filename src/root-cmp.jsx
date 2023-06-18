import React from 'react';
import { useState } from 'react'
import { Routes, Route } from 'react-router'
import routes from './routes'
import { AppFooter } from './cmps/app-footer'
import { AppHeader } from './cmps/app-header';

export const RootCmp = () => {
    const [scrollTop, setScrollTop] = useState(0);

    return (
        <div className="app-container main-layout">
            <AppHeader scrollTop={scrollTop} />
            <main onScroll={(ev) => { setScrollTop(ev.currentTarget.scrollTop) }} className="home-app-container full  main-layout">
                <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                </Routes>
            </main>
            <AppFooter />
        </div>
    )

}