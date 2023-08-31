import React, { useContext, useEffect } from "react";
import Billboard from "../../Components/billBoard/billboard";
import Continue2Watch from '../../Components/Continue2Watch/Continue2Watch'
import { useNavigate } from "react-router-dom";
import { Store } from "../../Context/Store";
import useFeaturedContent from "../../hooks/useFeaturedContent";
import FeaturedContentCarousel from "../../Components/FeaturedContentCarousel/FeaturedContentCarousel";
import Top10 from "../../Components/Top10/Top10";

const HomePage = () => {
  const { data, error, isLoading } = useFeaturedContent();
  const navigate = useNavigate("");
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const DataSlicedLine1 = data?.slice(0,1);
  const DataSlicedLine2 = data?.slice(3,5);

  const { userInfo } = state;
  console.log(error);
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [state]);
  return (
    <>
      <Billboard></Billboard>
      {isLoading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        userInfo &&
        data.map((listC, index) => (
         <>
           <FeaturedContentCarousel data={listC} key={listC._id} />
           {index === 2 && <Top10 data={listC} />}
           {index === 3 && <Continue2Watch data={listC} />}
         </> 
        ))
       
      ) 
      }
    </>
  );
};
export default HomePage;
