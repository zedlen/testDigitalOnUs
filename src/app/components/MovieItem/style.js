import styled from "styled-components";

export const MovieContainer = styled.div`
    width: calc( 100% - 40px);
    padding: 20px;
    background-color: #fafafa;
    margin-bottom: 15px;
`;

export const MovieMain = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    height: 300px;
`;

export const MovieImage = styled.div`
    flex: 1;
    background-image: url('${( { background } ) => background}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-right: 10px;
`;

export const  MovieInfo = styled.div`
    flex: 3;   
    margin-left: 10px; 
`;

export const  MovieTitle = styled.h3`
    color: #3e4d61;
`;

export const  MovieDate = styled.h5`
    color: #3e4d61;
`;

export const  MovieRate = styled.h4`
    background-color: #3e4d61;
    padding: 5px;
    border-radius: 4px;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
`;

export const  MovieOverview = styled.p`
    color: #3e4d61;
    text-align: justify;
`;