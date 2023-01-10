import React, { useEffect } from 'react'
import './List.scss'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch.js'

const List = ({ subCats, maxPrice, sort, catId }) => {

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}`
  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;