import React, { useState, Fragment } from "react";

const Points = (props) => {
  return (
    <Fragment>
      <div className=" px-1 grid grid-cols-3 gap-8 text-left mx-12 lg:mx-0">
        <p className="">Barking:{props.fullArr[0].Barking}</p>
        <p>Coat Length:{props.fullArr[0].Coat_Length}</p>
        <p>Drooling:{props.fullArr[0].Drooling}</p>
        <p>Energy:{props.fullArr[0].Energy}</p>
        <p>Grooming:{props.fullArr[0].Grooming}</p>
        <p>Playfulness:{props.fullArr[0].Playfulness}</p>
        <p>Protectiveness: {props.fullArr[0].Protectiveness}</p>
        <p>Shedding: {props.fullArr[0].Shedding}</p>
        <p>Trainability: {props.fullArr[0].Trainability}</p>
        <p>Max height: {props.fullArr[0].Max_Height}in.</p>
        <p>Min height: {props.fullArr[0].Min_Height}in.</p>
        <p>Max weight: {props.fullArr[0].Max_Weight}lbs.</p>
        <p>Min weight: {props.fullArr[0].Min_Weight}lbs.</p>
        <p>Max life expectancy: {props.fullArr[0].Max_Life_Expectancy} yrs.</p>
        <p>Min life expectancy: {props.fullArr[0].Min_Life_Expectancy} yrs.</p>
      </div>
    </Fragment>
  );
};

export default Points;
