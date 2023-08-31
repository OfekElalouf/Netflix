import React, {useContext} from 'react'
import FeaturedContent from '../../Components/FeaturedContentCarousel/FeaturedContentCarousel';
import { Store } from '../../Context/Store'
import Billboard from '../../Components/billBoard/billboard';
import useFeaturedContent from '../../hooks/useFeaturedContent';


  const MoviesPage = () => {
  const { data, error, isLoading } = useFeaturedContent("movie");
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  return (
    <>
    <div>
        <Billboard type="movie"/>
        <div className="pb-40 text-white">
        {isLoading ? (
          <h1 className="text-white">Loading...</h1>
        ) : error ? (
          <h1 className="text-white">Error...</h1>
        ) : (
          userInfo &&
          data.map((f) => (
            <FeaturedContent key={f._id} data={f}></FeaturedContent>
          ))
        )}
      </div>
      
    </div>
    </>
  )
}

export default MoviesPage