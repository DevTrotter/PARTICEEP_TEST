import React from 'react'
import StyledFilter from './StyledFilter'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { switchSort} from '../../redux/action/movieAction/movieAction'
import { useSelector, useDispatch } from 'react-redux';

export const Filter = () => {
    
    const dispatch = useDispatch()
    const {allMovies, sortBy} = useSelector((state => state.movies))

    const handleChange = (event, option) => {
        option === 'order' ? dispatch(switchSort('order' ,event.target.value, allMovies)) : dispatch(switchSort('filter' ,event.target.value, allMovies))
    };

    return (
        <StyledFilter>
            <h1>Tous les films</h1>
            <div className="param">
                <div className="container-sort">
                    <h2>Trier par :</h2>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                        className="selector"
                        style={{width: "150px", height: "40px"}}
                        value={sortBy.order}
                        onChange={(e) => handleChange(e, 'order')}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="default">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'Ordre alphabétique'}>Ordre alphabétique</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="container-filter">
                    <h2>Filtrer par :</h2>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                        className="selector"
                        style={{width: "96px", height: "40px"}}
                        value={sortBy.filter}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>Genre</em>
                            </MenuItem>
                            <MenuItem value={'Tous'}>Tous</MenuItem>
                            <MenuItem value={'Action'}>Action</MenuItem>
                            <MenuItem value={'Horeur'}>Horeur</MenuItem>
                            <MenuItem value={'Amour'}>Amour</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </StyledFilter>
    )
}
