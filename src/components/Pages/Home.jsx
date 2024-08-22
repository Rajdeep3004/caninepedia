import React, { useState, useRef, Fragment } from "react";
import Form from "./Form";
import Data from "./Data";
import { data } from "autoprefixer";

const Home = () => {
  const dogName = useRef(); // input ref
  const [desc, setDesc] = useState(""); // main description from wiki api
  const [url, setUrl] = useState(""); //  url under desc from wiki api
  const [showButton, setShowButton] = useState(false); // show points(false) & wiki(true)
  const [blur, setBlur] = useState(false); // blur while searching
  const [showData, setShowData] = useState(false); // show all data
  const [largeArr, setLargearr] = useState([]); // dog image & name/related list
  const [fullArr, setFullarr] = useState([]); // dog all api data
  const [error, setError] = useState(null); // no such breed found

  /////////////////////////////////////////////////

  const fetchHandler = (event) => {
    event.preventDefault();

    if (dogName.current.value.trim().length < 1) {
      setError(true);
      return;
    }

    const name = dogName.current.value;

    setShowData(false);
    setBlur(true);
    setDesc("");
    setUrl("");
    setLargearr([]);
    setFullarr([]);
    setError(null);

    //////

    fetch("https://api.api-ninjas.com/v1/dogs?name=" + name, {
      method: "GET",
      headers: { "X-Api-Key": "M2F7UZxyhh97gGuLNWAIlw==p8yvhb0fDBpzk2VN" },
      contentType: "application/json",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setError(true);
          setBlur(false);
          return;
        }
        console.log(data);

        let largeDummy = [];
        let fullDummy = [];

        for (let i = 0; i <= data.length - 1; i++) {
          largeDummy.push({
            name: data[i].name,
            link: data[i].image_link,
          });
        }

        for (let i = 0; i <= data.length - 1; i++) {
          fullDummy.push({
            Barking: data[i].barking,
            Coat_Length: data[i].coat_length,
            Drooling: data[i].drooling,
            Energy: data[i].energy,
            Grooming: data[i].grooming,
            Playfulness: data[i].playfulness,
            Protectiveness: data[i].protectiveness,
            Shedding: data[i].shedding,
            Trainability: data[i].trainability,
            Max_Height: data[i].max_height_male,
            Max_Weight: data[i].max_weight_male,
            Min_Height: data[i].min_height_female,
            Min_Weight: data[i].min_weight_female,
            Max_Life_Expectancy: data[i].max_life_expectancy,
            Min_Life_Expectancy: data[i].min_life_expectancy,
          });
        }
        setBlur(false);
        setFullarr(fullDummy);
        setLargearr(largeDummy);
        setShowData(true);
        if (data.length === 1) {
          reFetch();
        } else {
          return;
        }
      })
      .catch((error) => {
        alert(`Dog api --- ${error.message}`);
      });

    /////////////////////////////////////////////////

    const reFetch = async () => {
      const url = `https://wiki-briefs.p.rapidapi.com/search?q=${name}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "2efd7f1c7bmshea5d78567512410p18cd05jsnbbd54e0de960",
          "X-RapidAPI-Host": "wiki-briefs.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (data.length === 0) {
          setError(true);
          return;
        } else if (data.summary) {
          console.log(data);
          setDesc(data.summary);
          setUrl(data.url);
        }
      } catch (error) {
        alert(`Web search api --- ${error.message}`);
      }
    };
  };

  /////////////////////////////////////////////////

  return (
    <Fragment>
      <Form
        fetchHandler={fetchHandler}
        ref={dogName}
        blur={blur}
        error={error}
      />
      {showData && (
        <Data
          showButton={showButton}
          setShowButton={setShowButton}
          largeArr={largeArr}
          fullArr={fullArr}
          desc={desc}
          url={url}
          ref={dogName}
        />
      )}
    </Fragment>
  );
};

export default Home;
