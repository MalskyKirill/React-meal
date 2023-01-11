import {Link} from 'react-router-dom';

function CategoryItem(prop) {
  const { strCategory, strCategoryThumb, strCategoryDescription } =
    prop;

  return (
    <div classname='card'>
      <div classname='card-image'>
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div classname='card-content'>
        <span classname='card-title'>{strCategory}</span>
        <p>
          {strCategoryDescription.slice(0, 60)}...
        </p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn">Whatch category</Link>
      </div>
    </div>
  );
}

export { CategoryItem };
