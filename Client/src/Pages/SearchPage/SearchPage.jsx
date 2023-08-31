import React, { useState, useEffect } from "react";
import useSearch from "../../hooks/useSearch";
import { useLocation } from "react-router-dom";
import ContentCard from "../../Components/ContentCard/ContentCard";
import NetflixSpinner from "../../Components/NetflixSpinner/NetflixSpinner";


const SearchPage = () => {
  const [query, setQuery] = useState("");

  const { search } = useLocation();
  //console.log(search);
  const searchParams = new URLSearchParams(search);
  //console.log(query);
  const { data, error, isLoading } = useSearch(query);

  useEffect(() => {
    setQuery(searchParams.get("q"));
  }, [search, searchParams]);

  return (
    <>
    <div className="h-24"></div>
      <h1 className="text-white text-2xl mx-10 lg:mx-15">Showing Search Results from {query} : </h1>
      <div className="grid grid-cols-4 gap-2 mx-10 lg:mx-15">
      {isLoading ? (
        <NetflixSpinner/>
      ) : error ? (
        <h1>Error!!</h1>
      ) : 
        data && (
          data.contents.map((c)=><div className=""><ContentCard key={c._id} data={c}></ContentCard></div>)  
      )}
      </div>
      </>
  );
};

export default SearchPage;