import { useState } from "react";
import * as React from "react";
import '../App.css';
import { pay } from '../data/pay';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { useNavigate } from 'react-router-dom';


export default function MainCard() {


    const [check, setCheck] = useState(false);
    const navigate = useNavigate();


    const style = {
        width: { xs: '90%', sm: '90%', md: '80%', lg: '60%', xl: '50%' }, 
        margin: '0 auto', 
        my: 5, 
        position: 'relative',
        border: check ? '2px solid #03D69D': 'none',
        borderRadius: check ? '10px': 'none',
    }



    const handleClick = (item) => {
        console.log(item);
        setCheck((prev) => !prev);
        setTimeout(() => {
            navigate('/payout/qr');
        }, 1000);
    }

    return (
        <Box sx={style}>
            <Stack direction="row" spacing={1} sx={{position: 'absolute', top: -15, left: 15, bgcolor: 'lightgray', borderRadius: '40%'}}>
                <Chip label="Pix" sx={{fontSize: 16, fontWeight: 600}} />
            </Stack>
        {pay.Pix.map((item, index) => {
            return (
            <Box key={index} sx={{ border: '1px solid lightgray', borderRadius: '10px', p: 2 }}>
                <Box>
                    <div style={{display: 'grid', gridTemplateColumns: '3fr 0.2fr', alignItems: 'center'}}>
                        <Box my={2}>
                            <Typography variant="h5" mt={2}>
                                <strong>{item.id}x</strong> R$ {item.amount}
                            </Typography>
                            <Typography variant="h8" sx={{ color: '#03D69D' }}>
                                {item.cashback}
                            </Typography>
                        </Box>
                        <Box>
                            <label className="custom-checkbox">
                                <input type="checkbox" onClick={()=>{handleClick(item)}} />
                                <span className="checkmark"></span>
                            </label>
                        </Box>
                    </div>
                    <Typography className="blue-flag" sx={{ fontSize: { xs: '0.75rem', sm: '0.75rem', md: '0.75rem', lg: '1rem', xl: '1rem'}, color: 'white' }}>
                    {item.discount}
                    </Typography>
                </Box>
            </Box>
            )
        })}
        </Box>
    );
}
