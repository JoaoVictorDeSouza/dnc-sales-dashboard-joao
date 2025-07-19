import { AvatarsList, CardComponent, CustomTable, Header } from '@/components'

// MUI
import Container from '@mui/material/Container'

// UTILS
import { currencyConverter } from '@/utils'

const mockListData = [
  {
    avatar: '/dnc-avatar.svg',
    name: 'Nome Sobrenome 1',
    subtitle: currencyConverter(1234.56),
  },
  {
    avatar: '/dnc-avatar.svg',
    name: 'Nome Sobrenome 2',
    subtitle: currencyConverter(1014.26),
  },
  {
    avatar: '/dnc-avatar.svg',
    name: 'Nome Sobrenome 3',
    subtitle: currencyConverter(934.56),
  },
]

const mockTableData = {
  headers: ['Name', 'Email', 'Actions'],
  rows: [
    [
      <span>Nome 1</span>,
      <span>nome1@email.com</span>,
      <button>ACTION</button>,
    ],
    [
      <span>Nome 2</span>,
      <span>nome2@email.com</span>,
      <button>ACTION</button>,
    ],
    [
      <span>Nome 3</span>,
      <span>nome3@email.com</span>,
      <button>ACTION</button>,
    ],
  ],
}

function Home() {
  return (
    <>
      <Header />
      <br />
      <Container maxWidth="lg">
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
