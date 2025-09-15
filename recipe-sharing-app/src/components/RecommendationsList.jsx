import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const favorites = useRecipeStore(state => state.recommendations);

  return (
    <div>
      <h2>My Recommendations</h2>
      {favorites.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList