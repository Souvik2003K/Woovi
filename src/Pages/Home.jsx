import MainCard from '../components/MainCard'
import InstallmentCard from '../components/InstallmentCard'

import { Typography } from '@mui/material'

export default function Home() {

    return (
        <div>
            <Typography variant='h5' sx={{display: 'flex', justifyContent: 'center', my: 3}} >
                João, como você quer pagar?
            </Typography>
            <MainCard />
            <InstallmentCard />
        </div>
    )
}
