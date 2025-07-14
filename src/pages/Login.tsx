import { Box, Container, Grid } from '@mui/material'
import { BannerImage, FormComponent, StyledH1, StyledP } from '@/components'
import { pxToRem } from '@/utils'

function Login() {
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
              width: '50vw', // aqui você pode definir tamanhos usando flexbox ou outras propriedades
            }}
          >
            <Container maxWidth="sm">
              <Box sx={{ marginBottom: pxToRem(24) }}>logo</Box>
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>Bem-vindo</StyledH1>
                <StyledP>Digite sua senha para logar</StyledP>
              </Box>
              <FormComponent
                inputs={[
                  { type: 'email', placeholder: 'Email' },
                  { type: 'password', placeholder: 'Senha' },
                ]}
                buttons={[
                  {
                    className: 'primary',
                    type: 'submit',
                    children: 'Login',
                    disabled: true,
                  },
                ]}
                message={{
                  msg: 'Sucesso!!!',
                  type: 'success',
                }}
              />
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

export default Login
