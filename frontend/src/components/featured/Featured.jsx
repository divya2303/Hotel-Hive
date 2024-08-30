import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = ({ cities }) => {
  const { data, loading, error } = useFetch(
    `https://hotel-hive-l4rm.onrender.com/api/hotels/countByCity?cities=${cities.join(",")}`
  );

  const cityImages = {
    berlin: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    madrid: "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
    london: "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
  };

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          {cities.map((city, index) => (
            <div className="featuredItem" key={city}>
              <img
                src={cityImages[city]}
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>{city.charAt(0).toUpperCase() + city.slice(1)}</h1>
                <h2>{data[index]} properties</h2>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Featured;