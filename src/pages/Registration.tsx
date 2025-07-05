import { Box, Container, Grid } from "@mui/material";
import { BannerImage } from "@/components";

function Registration() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid 
            container
            sx={{
              flexDirection: { xs: 'column', sm: 'row' }, // exemplo de responsividade
              alignItems: 'center',
              display: 'flex',
              height: '100vh',
              width: '50vw'
              // aqui você pode definir tamanhos usando flexbox ou outras propriedades
            }}
          >
            <Container maxWidth="sm">
              <h1>CADASTRO</h1>
            </Container>
          </Grid>
          <Grid
            sx={{
              display: 'block',
              flexBasis: { xs: '100%', sm: '50%' },
            }}
          >
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Registration
