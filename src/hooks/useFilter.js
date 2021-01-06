import { useState } from "react";

export const useFilter = (initialState = {}) => {

  const [filter, setFilter] = useState(initialState);

  const changeCountrie = ({target}) => {
    
    const { value: countrie } = target;    
    setFilter({...filter, countrie});
  }

  const changeContinent = ({target}) => {

    const { value: continent } = target;    
    setFilter({...filter, continent});
  };

  return { filter, changeContinent, changeCountrie };

}
