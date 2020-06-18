import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MainContainer, MovieItem } from '../../components'
import { loadList } from '../../store/movieSlice';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export const Home = () => {
    const { loaded, items, loading } = useSelector( state => state.movie );
    const dispatch = useDispatch()     
    useEffect(()=>{
        if (!loaded) {
            dispatch(loadList()) 
        }
    },[ loaded, dispatch ])    
    return(
        <MainContainer>
            { loading  && 
                <Loader
                    type="Puff"
                    color="#3e4d61"
                    height={100}
                    width={100}/>
            }
            {items.map( movie => <MovieItem {...movie} key={movie.id} />)}
        </MainContainer>
    )
}