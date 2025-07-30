import {
  AvatarsList,
  CardComponent,
  CustomChart,
  CustomTable,
  Header,
  StyledH2,
  StyledH3,
  StyledSpan,
} from '@/components'

//LINK
import { Link } from 'react-router-dom'

// MUI
import { Container, Grid } from '@mui/material/'

// UTILS
import { currencyConverter } from '@/utils'
import { useGet } from '@/hooks/useAxios'
import { CustomChartProps, HighlightsData, NewsData, StarsData } from '@/types'
import { highlightTextConverter } from '@/utils/highlightTextConverter'


function Home() {
  // HIGHLIGHTS
  const {
    data: highlightsData,
    loading: highlightsLoading,
    error: highlightsError,
  } = useGet<HighlightsData[]>('sales/highlights')

  // SALES PER MONTH
  const {
    data: salesPerMonthData,
    loading: salesPerMonthLoading,
    error: salesPerMonthError,
  } = useGet<CustomChartProps>('sales/month')

  // SALES STARS
  const {
    data: salesStarsData,
    loading: salesStarsLoading,
    error: salesStarsError,
  } = useGet<StarsData[]>('sales/stars')

  // NEWS
  const {
    data: newsData,
    loading: newsLoading,
    error: newsError,
  } = useGet<NewsData[]>('news')

  // YEAR
  const {
    data: salesYearData,
    loading: salesYearLoading,
    error: salesYearError,
  } = useGet<CustomChartProps>('sales/year')
  
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
           {!highlightsError && ( //O Highlight só aparece se não tiver erros
            <> 
              <Grid item xs={12} md={4}>
                <CardComponent
                  className={
                    highlightsLoading
                      ? 'skeleton-loading skeleton-loading-mh-1'
                      : ''
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1">
                        Total de vendas no mês
                      </StyledH2>
                      <StyledH3 className="mb-1" size={40} lineheight={40}>
                        {currencyConverter(highlightsData[0].value)}
                      </StyledH3>
                      <StyledSpan>{highlightsData[0].subtitle}</StyledSpan>
                    </>
                  )}
                </CardComponent>
              </Grid>
              <Grid item xs={12} md={4}>
                <CardComponent
                  className={
                    highlightsData
                      ? highlightsData[1].subtitle
                      : 'skeleton-loading skeleton-loading-mh-1'
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1" color="white">
                        Meta do mês
                      </StyledH2>
                      <StyledH3
                        className="mb-1"
                        size={40}
                        lineheight={40}
                        color="white"
                      >
                        {currencyConverter(highlightsData[1].value)}
                      </StyledH3>
                      <StyledSpan color="white">
                        {highlightTextConverter(highlightsData[1].subtitle)}
                      </StyledSpan>
                    </>
                  )}
                </CardComponent>
              </Grid>
              <Grid item xs={12} md={4}>
                <CardComponent
                  className={
                    highlightsLoading
                      ? 'skeleton-loading skeleton-loading-mh-1'
                      : ''
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <Link to="/leads">
                        <StyledH2 className="mb-1">Leads contactados</StyledH2>
                        <StyledH3 className="mb-1" size={40} lineheight={40}>
                          {highlightsData[2].value}
                        </StyledH3>
                        <StyledSpan>{highlightsData[2].subtitle}</StyledSpan>
                      </Link>
                    </>
                  )}
                </CardComponent>
              </Grid>
            </>
          )}
          <Grid item xs={12} md={7}>
            {!salesPerMonthError && (
              <CardComponent
                className={
                  salesPerMonthLoading
                    ? 'skeleton-loading skeleton-loading-mh-2'
                    : ''
                }
              >
                {!salesPerMonthLoading && salesPerMonthData && (
                  <>
                    <StyledH2 className="mb-1">Valor de vendas no mês</StyledH2>
                    <CustomChart
                      labels={salesPerMonthData.labels.map((label) => label)}
                      data={salesPerMonthData.data.map((data) => data)}
                      type={salesPerMonthData.type}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>
          <Grid item xs={12} md={5}>
            {!salesStarsError && (
              <CardComponent
                className={
                  salesStarsLoading
                    ? 'skeleton-loading skeleton-loading-mh-2'
                    : ''
                }
              >
                {!salesStarsLoading && salesStarsData && (
                  <>
                    <StyledH2 className="mb-1">
                      Maiores vendedores no mês
                    </StyledH2>
                    <AvatarsList
                      listData={salesStarsData.map((star) => ({
                        name: star.name,
                        subtitle: currencyConverter(star.value),
                      }))}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>
          <Grid item xs={12} md={5}>
            {!newsError && (
              <CardComponent
                className={
                  newsLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''
                }
              >
                {!newsLoading && newsData && (
                  <>
                    <StyledH2 className="mb-1">Notícias relevantes</StyledH2>
                    <CustomTable
                      headers={['Título', 'Horário']}
                      rows={newsData.map((news) => [
                        <a
                          className="ellipsis"
                          href={news.link}
                          target="_blank"
                        >
                          {news.title}
                        </a>,
                        <a href={news.link} target="_blank">
                          {news.date}
                        </a>,
                      ])}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>
          <Grid item xs={12} md={7}>
            {!salesYearError && (
              <CardComponent
                className={
                  salesYearLoading
                    ? 'skeleton-loading skeleton-loading-mh-2'
                    : ''
                }
              >
                {!salesYearLoading && salesYearData && (
                  <>
                    <StyledH2 className="mb-1">
                      Valor de vendas por mês
                    </StyledH2>
                    <CustomChart
                      labels={salesYearData.labels.map((label) => label)}
                      data={salesYearData.data.map((data) => data)}
                      type={salesYearData.type}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
