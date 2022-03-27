import React from 'react'
import StyledFilter from './StyledFilter'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { switchSort } from '../../redux/action/movieAction/movieAction'
import { useSelector, useDispatch } from 'react-redux';

export const Filter = () => {

    const dispatch = useDispatch()
    const { filters } = useSelector((state => state.movies))

    const handleChange = (event, type) => {
        const value = event.target.value
        dispatch(switchSort(value, type, filters))
    }

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
                        value={filters.sortBy}
                        onChange={(e) => handleChange(e, 'sortBy')}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="None">
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
                        value={filters.genderBy}
                        onChange={(e) => handleChange(e, 'genderBy')}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value={'Tous'}>Tous</MenuItem>
                            <MenuItem value={'Action'}>Action</MenuItem>
                            <MenuItem value={'Horreur'}>Horreur</MenuItem>
                            <MenuItem value={'Amour'}>Amour</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </StyledFilter>
    )
}
