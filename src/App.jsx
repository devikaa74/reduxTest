import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/reduxStore';
import RecipieList from './components/RecipieList';
import RecipeDetail from './components/RecipeDetail';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<RecipieList />} />
                    <Route path="/recipe/:id" element={<RecipeDetail />} />
                </Routes>
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;