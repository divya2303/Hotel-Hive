import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(`https://hotel-hive-l4rm.onrender.com/api/hotels?featured=true`);

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <Link to={`/hotels/${item._id}`} className="fpItem" key={item._id} style={{textDecoration: "none"}}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from &#8377;{item.CheapestPrice}</span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
