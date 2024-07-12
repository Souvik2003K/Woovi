import { useState } from "react";
import '../App.css';
import { pay } from '../data/pay';

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { useNavigate } from "react-router-dom";

export default function InstallmentCard() {

    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);

    const Basics = {
        border: 'none',
        borderRadius: 'none',
        p: 2,
        pt: 4,
    }

    const Upstyle = {
        border: '2px solid #03D69D',
        borderRadius: '10px',
        p: 2,
        pt: 4,
    }


    const handleClick = (item) => {
        setSelected(item.id);
        setTimeout(() => {
            navigate('/payout/qr');
        }, 1000);
    }


    return (
        <Box sx={{ width: { xs: '90%', sm: '90%', md: '80%', lg: '60%', xl: '50%' }, margin: '0 auto', my: 5, position: 'relative' }}>
            <Stack direction="row" spacing={1} sx={{position: 'absolute', top: -15, left: 15, bgcolor: 'lightgray', borderRadius: '50px'}}>
                <Chip label="Pix Parcelado" sx={{fontSize: 16, fontWeight: 600}} />
            </Stack>
        
            <Box sx={{ border: '1px solid lightgray', borderRadius: '10px', }}>
                {pay["Pix Installment"].map((item, index) => {
                    return (
                        <Box>
                            <Box key={index} sx={selected === item.id ? Upstyle : Basics}>
                                <div style={{display: 'grid', gridTemplateColumns: '3fr 0.2fr'}}>
                                    <Box>
                                        <Typography variant="h5">
                                            <strong>{item.id}x</strong> R$ {item.amount}
                                        </Typography>
                                        <Typography variant="h8" sx={{ mb: 1.5, color: '#AFAFAF' }}>
                                            Total: R$ {item.total}
                                        </Typography>   
                                    </Box>
                                    <Box my={2}>
                                        <label className="custom-checkbox">
                                            <input type="checkbox" checked={selected === item.id ? true : ''} onClick={()=>{handleClick(item)}} />
                                            <span className="checkmark"></span>
                                        </label>
                                    </Box>
                                </div>
                                {item.discount && (
                                    <Typography className="blue-flag" sx={{ fontSize: { xs: '0.75rem', sm: '0.75rem', md: '0.75rem', lg: '1rem', xl: '1rem'}, color: 'white' }}>
                                        {item.discount}
                                    </Typography>
                                )}
                            </Box>
                            {index+1 !== pay["Pix Installment"].length ? <hr style={{margin: '0'}} />: ''}
                        </Box>
                    )
                })}
                
            </Box>
        </Box>
    );
}
