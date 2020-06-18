import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MainContainer, MovieItem } from '../../components'
import { loadList } from '../../store/movieSlice';

export const Home = () => {
    const { loaded, items } = useSelector( state => state.movie );
    const dispatch = useDispatch()
    useEffect(()=>{
        if (!loaded) {
            dispatch(loadList())
        }
    },[ loaded ])    
    return(
        <MainContainer>
            {items.map( movie => <MovieItem {...movie} key={movie.id} />)}
        </MainContainer>
    )
}