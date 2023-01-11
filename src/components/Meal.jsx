import {Link} from 'react-router-dom';

function Meal(props) {
  const { strMeal, strMealThumb, idMeal } = props;

  return (
    <div class='card'>
      <div class='card-image'>
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div class='card-content'>
        <span classname='card-title'>{strMeal}</span>
      </div>
      <div className='card-action'>
        <Link to={`/meal/${idMeal}`} className='btn'>
          Whatch meal
        </Link>
      </div>
    </div>
  );
}

export { Meal };
