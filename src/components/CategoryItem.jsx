import {Link} from 'react-router-dom';

function CategoryItem(prop) {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    prop;

  return (
    <div class='card'>
      <div class='card-image'>
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div class='card-content'>
        <span classname='card-title'>{strCategory}</span>
        <p>
          {strCategoryDescription.slice(0, 60)}...
        </p>
      </div>
      <div className="card-action">
        <Link to={`/category/${idCategory}`} className="btn">Whatch category</Link>
      </div>
    </div>
  );
}

export { CategoryItem };
