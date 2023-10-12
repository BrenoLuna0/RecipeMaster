import React, { useEffect, useState } from "react";
import "./style.css";
import NavBar from "../../components/Navbar";
import RecipeCard from "../../components/Recipe";
import api from "../../services/api";


function Home() {
  const handleButtonClick = async (query) => {
    const newQuery = query.replaceAll(" ", "-");
    await api
      .get(`/complexSearch?number=12&query=${newQuery}`)
      .then((response) => {
        console.log(response);
        setRecipes(response.data.results);
      })
      .catch((error) => {
        setRecipes([]);
      });
  };

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fn = async () => {
      await api
        .get("/complexSearch?number=12")
        .then((response) => {
          console.log(response);
          setRecipes(response.data.results);
        })
        .catch((error) => {
          setRecipes([]);
        });
    };
    fn();
  }, []);

  return (
    <div>
      <NavBar onPress={handleButtonClick} />
      <div className="content-container">
        <div className="row">
          {recipes.length > 0 &&
            recipes.map((item) => {
              return (
                <RecipeCard
                  onPress={() => alert("aaaaa")}
                  imageSrc={item.image}
                  title={item.title}
                  key={item.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
