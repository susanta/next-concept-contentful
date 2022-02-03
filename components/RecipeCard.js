import Link from 'next/link';

export default function RecipeCard({ recipe }) {
  const { title, slug, cookingTime, thumnail } = recipe.fields;
  return (
    <div className="card">
      <div className="featured">{/* {image} */}</div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} min to make.</p>
        </div>
        <div className="actions">
          <Link href={'/recipes/' + slug}>
            <a>Cook this</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
