import { Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { useNavigate } from 'react-router-dom';

import qr from '../Images/qr.png'
import { useEffect } from 'react';

export default function QRcode() {

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/payout/form');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        // navigate('/');
        console.log('copied');
    }

    return (
        <div>
            <Typography sx={{my: 3, display: 'flex', justifyContent: 'center', fontSize: { xs: '1rem', sm: '1rem', md: '1rem', lg: '1.5rem', xl: '1.5rem'}, fontWeight: 600}}>
                João, pague a entrada de R$ 
                15.300,00 pelo Pix
            </Typography>

            {/* QR */}
            <Box sx={{width: { xs: '90%', sm: '90%', md: '90%', lg: '20%', xl: '20%'}, height: '320px', margin: '0 auto', border: '1px solid #03D69D', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={qr} alt='qr' style={{width: '95%', height: '95%'}} />
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', my: 3}}>
                <Button sx={{bgcolor: '#123a6e', '&:hover': { bgcolor: '#0f315d' }, p: 1.5}} variant="contained" onClick={handleClick}>Clique para copiar QR CODE<FileCopyIcon sx={{mx: 1}} /></Button>
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
