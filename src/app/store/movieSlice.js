import { createSlice } from '@reduxjs/toolkit';
import { AxiosService } from '../services/api'

const initialState = {
    items: [],
    page: 1,
    loading: true,
    loaded: false,  
    totalPages: 1,
    totalResults: 0  
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setList: (state, action) => {
        state.items = action.payload;        
    },
    setPage: (state, action) => {
        state.page += action.payload;
    },    
    setLoading: (state, action) => {
        state.loading = action.payload;
    },
    setLoaded: (state, action) => {
        state.loaded = action.payload;
    },
    setTotalPages: (state, action) => {
        state.totalPages = action.payload;
    },
    setTotalResults: (state, action) => {
        state.totalResults = action.payload;
    },
  },
});

export const { 
    setList,
    setPage,
    setLoaded,
    setLoading, 
    setTotalPages,
    setTotalResults   
} = movieSlice.actions;

export const loadList = () => async (dispatch) => {
    dispatch(setLoading(true));
    try{
        const movieResponse = await AxiosService.get('/discover/movie')    
        console.log(movieResponse)
        if (movieResponse.status === 200) {    
            dispatch(setList(movieResponse.data.results));
            dispatch(setLoaded(true));
            dispatch(setLoading(false));
            dispatch(setPage(movieResponse.data.page))
            dispatch(setTotalPages(movieResponse.data.total_pages))
            dispatch(setTotalResults(movieResponse.data.total_results))
        }
    } catch( e ){
        alert('Error while getting movie entries')
    } finally{
        dispatch(setLoading(false));
    }    
};

export default movieSlice.reducer;