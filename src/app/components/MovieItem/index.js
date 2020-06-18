import React from 'react'
import { 
    MovieContainer,
    MovieMain,
    MovieImage,
    MovieInfo,
    MovieTitle,
    MovieRate,
    MovieDate,
    MovieOverview
} from './style'

export const MovieItem = props => {
    return(
        <MovieContainer>
            <MovieMain>
                <MovieImage background={'https://image.tmdb.org/t/p/original/'+props.poster_path} />
                <MovieInfo>
                    <MovieTitle>
                        {props.title}
                    </MovieTitle>
                    <MovieRate>
                        {props.vote_average}
                    </MovieRate>
                    <MovieDate>
                        {props.release_date}
                    </MovieDate>   
                    <MovieOverview>
                        {props.overview}
                    </MovieOverview>
                </MovieInfo>
            </MovieMain>                 
        </MovieContainer>
    )
}