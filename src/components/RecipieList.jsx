import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/slices/recipeSlice';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const RecipieList = () => {
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes.allRecipes);
    const loading = useSelector((state) => state.recipes.loading);
    const error = useSelector((state) => state.recipes.error);

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const recipesPerPage = 6;

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    // Extract unique cuisines
    const cuisines = Array.from(new Set(recipes.map(recipe => recipe.cuisine).filter(Boolean)));

    // Filter recipes based on search term
    const filteredRecipes = recipes.filter(recipe =>
        recipe.cuisine && recipe.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Paginate filtered recipes
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

    return (
        <Container>
            <h3 style={{textAlign:'center',fontWeight:'bolder',fontFamily:"monospace",marginTop:'20px',fontSize:'50px'}}>Available Cuisines</h3>
            <ul className="cuisine-list">
                {cuisines.map((cuisine, index) => (
                    <li key={index}>{cuisine}</li>
                ))}
            </ul>

            <SearchBar setSearchTerm={setSearchTerm} />
            {filteredRecipes.length === 0 ? (
                <p>No recipes found for "{searchTerm}"</p>
            ) : (
                <>
                    <Row>
                        {currentRecipes.map((recipe) => (
                            <Col md={4} key={recipe.id} className="mb-4">
                                <Card>
                                    <Card.Img variant="top" src={recipe.image} alt={recipe.name} />
                                    <Card.Body>
                                        <h1 className="recipe-title text-center">{recipe.name}</h1>
                                        <Link to={`/recipe/${recipe.id}`}>
                                            <div className="button-container text-center">
                                                <button className="btn btn-primary">View Recipe</button>
                                            </div>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className="d-flex justify-content-center mt-4">
                        <Pagination
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            totalPages={totalPages}
                        />
                    </div>
                </>
            )}
        </Container>
    );
};

export default RecipieList;