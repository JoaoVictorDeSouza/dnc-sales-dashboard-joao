import { Box, Container, Grid } from '@mui/material'
import {
  BannerImage,
  FormComponent,
  StyledH1,
  StyledP,
  StyledUl,
} from '@/components'

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
              width: '50vw',
              // aqui você pode definir tamanhos usando flexbox ou outras propriedades
            }}
          >
            <Container maxWidth="sm">
              <Box>
                <StyledH1>Faça o seu cadastro</StyledH1>
                <StyledP>Primeiro, diga-nos quem você é</StyledP>
                <StyledUl>
                  <li>Pelo menos 8 caracteres</li>
                  <li>Pelo menos uma letra maiúscula</li>
                  <li>Pelo menos um caractere especial</li>
                  <li>Pelo menos um número</li>
                </StyledUl>
              </Box>

              <FormComponent
                inputs={[
                  { type: 'email', placeholder: 'Email' },
                  { type: 'password', placeholder: 'Senha' },
                ]}
                buttons={[
                  { className: 'primary', type: 'submit', children: 'Login' },
                ]}
                message={{
                  msg: 'ERRO!!!',
                  type: 'error',
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

export default Registration
