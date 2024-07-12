import { useState } from 'react';

import { Typography } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

export default function Home() {

    const [age, setAge] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div>
            <Typography sx={{my: 3, display: 'flex', justifyContent: 'center', fontSize: { xs: '1rem', sm: '1rem', md: '1rem', lg: '1.5rem', xl: '1.5rem'}, fontWeight: 600}}>
                João, pague o restante em 1x no cartão
            </Typography>

            {/* Form */}
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: 'calc(100% - 16px)' },
                    width: '90%',
                    margin: '0 auto',
                    boxSizing: 'border-box',
                }}
                noValidate
                autoComplete="off"
            >
                {/* Full Name */}
                <TextField fullWidth id="outlined-basic" label="Nome completo" variant="outlined" />
                {/* cpf */}
                <TextField fullWidth id="outlined-basic" label="CPF" variant="outlined" />
                {/* Card Number */}
                <TextField fullWidth id="outlined-basic" label="Número do cartão" variant="outlined" />
                <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px'}}>
                    {/* Expiry */}
                    <TextField fullWidth id="outlined-basic" label="Vencimento" variant="outlined" />
                    {/* cvv */}
                    <TextField fullWidth id="outlined-basic" label="CVV" variant="outlined" />
                </Box>
                {/* Installments */}
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Parcelas</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Parcelas"
                            onChange={handleChange}
                        >
                            <MenuItem value={'1x R$ 30.500,00'}>1x R$ 30.500,00</MenuItem>
                            <MenuItem value={'2x R$ 15.300,00'}>2x R$ 15.300,00</MenuItem>
                            <MenuItem value={'3x R$ 10.196,66'}>3x R$ 10.196,66</MenuItem>
                            <MenuItem value={'4x R$ 7.725,00'}>4x R$ 7.725,00</MenuItem>
                            <MenuItem value={'5x R$ 6.300,00'}>5x R$ 6.300,00</MenuItem>
                            <MenuItem value={'6x R$ 5.283,33'}>6x R$ 5.283,33</MenuItem>
                            <MenuItem value={'7x R$ 4.542,85'}>7x R$ 4.542,85</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Button sx={{bgcolor: '#123a6e', '&:hover': { bgcolor: '#0f315d' }}} variant="contained" onClick={handleClick}>Pagar</Button>
            </Box>

            {/* payment term */}
            <Box>
                <Typography sx={{display: 'flex', justifyContent: 'center',mt: 3}}>Prazo de pagamento::</Typography>
                <Typography sx={{display: 'flex', justifyContent: 'center',mb: 3}}><strong>15/12/2021 - 08:17</strong></Typography>
            </Box>
            
            {/* status */}
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%', margin: '10px auto'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Box sx={{display: 'grid', gridTemplateRows: '1fr 1.2fr 1fr'}}>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            <label className="custom-checkbox">
                                <input type="checkbox" checked />
                                <span className="checkmark"></span>
                            </label>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <hr className="full-height-hr" />
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            <div style={{border: '3px solid #03D69D', borderRight: '1px solid #fff', borderRadius: '50%', padding: '12px'}}></div>
                        </Box>
                    </Box>
                    <Box sx={{display: 'grid', gridTemplateRows: '1fr  1fr', gap: '15px'}}>
                        <Typography variant='h8'>1ª entrada no Pix</Typography>
                        <Typography></Typography>
                        <Typography variant='h8'>2ª no cartão</Typography>
                    </Box>
                </Box>
                <Box sx={{display: 'grid', gridTemplateRows: '1fr 1.2fr 1fr'}}>
                    <Typography><strong>R$ 15.300,00</strong></Typography>
                    <Typography></Typography>
                    <Typography><strong>R$ 15.300,00</strong></Typography>
                </Box>
            </Box>

            <Box sx={{width: '90%', margin: '0 auto'}}>
                <hr />
            </Box>
            
            {/* cet */}
            <Box sx={{display: 'flex', justifyContent: 'space-between', width: '90%', margin: '20px auto'}}>
                <Typography>CET: 0,5%</Typography>
                <Typography>Total: R$ 30.600,00</Typography>
            </Box>

            <Box sx={{width: '90%', margin: '0 auto'}}>
                <hr />
            </Box>
            
            {/* how */}
            <Box sx={{display: 'flex', justifyContent: 'space-between', width: '90%', margin: '20px auto'}}>
                <Typography><strong>Como funciona?</strong></Typography>
                <Typography><strong>up arrow</strong></Typography>
            </Box>

            <Box sx={{width: '90%', margin: '0 auto'}}>
                <hr />
            </Box>
            
            {/* identifier */}
            <Box sx={{display: 'flex', flexDirection: 'column', width: '90%', margin: '20px auto'}}>
                <Typography align='center'>Identificador:</Typography>
                <Typography align='center'><strong>2c1b951f356c4680b13ba1c9fc889c47</strong></Typography>
            </Box>
        </div>
    )
}