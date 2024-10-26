import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, Container } from 'react-bootstrap';
import '../App.css'; // Ensure you're importing your CSS file

const RecipeDetail = () => {
    const { id } = useParams();
    const recipes = useSelector((state) => state.recipes.allRecipes);
    const recipe = recipes.find((rec) => rec.id === parseInt(id));

    if (!recipe) {
        return <p>Recipe not found!</p>;
    }

    return (
        <Container className="my-4">
            <Card>
                <div className="recipe-image-container">
                    <Card.Img 
                        variant="top" 
                        src={recipe.image} 
                        alt={recipe.name} 
                        className="recipe-image" 
                    />
                </div>
                <Card.Body>
                    <h1 className="recipe-title">{recipe.name}</h1> {/* Center-aligned heading */}
                    <Card.Text>
                        <strong>Description:</strong> {recipe.instructions.join(', ')}
                    </Card.Text>
                    <Card.Text>
                        <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default RecipeDetail;