import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Contact from '../components/Contact'
import NotFoundPage from '../components/NotFoundPage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import HomePage from '../components/HomePage'
import BlogListPage from '../components/BlogListPage'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/blogs" component={BlogListPage} />
                        <Route path="/blogs/:id" component={BlogDetailsPage} />
                        <Route path="/contact" component={Contact} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter;
