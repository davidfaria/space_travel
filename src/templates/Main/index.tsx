import React from 'react'
import StarShipsService from 'services/StarShipsService'
import { MdSearch } from 'react-icons/md'
import Input from 'components/Input'
import Button from 'components/Button'
import Loader from 'components/Loader'
import StarShip, { StarShipProps } from 'components/StarShip'

import * as S from './styles'

// import MOCK_START_SHIP from './mock'
import { toastError } from 'utils/toast'

const PER_PAGE = 10

const Main = () => {
  const [distance, setDistance] = React.useState<number>()
  const [loading, setLoading] = React.useState(false)
  const [loadingPagination, setLoadingPagination] = React.useState(false)
  const [starships, setStarShips] = React.useState<StarShipProps[]>([])
  // const [starships, setStarShips] = React.useState<StarShipProps[]>(
  //   MOCK_START_SHIP
  // )
  const [page, setPage] = React.useState(0)
  const [totalPage, setTotalPage] = React.useState(0)

  const disabledNextButton = React.useMemo(() => {
    return page >= totalPage || !distance || starships.length <= 0
  }, [page, totalPage, distance, starships])

  const disabledPreviousButton = React.useMemo(() => {
    return page <= 1 || !distance
  }, [page, distance])

  const disabledButtonSearch = React.useMemo(() => {
    return !distance
  }, [distance])

  const handleInputDistance = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if (Number.isNaN(value)) {
      toastError('Você precisa informar uma distância VÁLIDA')
      setDistance(undefined)
    } else {
      setDistance(Number(value))
    }
  }

  const loadShips = async (page: number) => {
    const { results, count } = await StarShipsService.getStarShips({
      page
    })
    setStarShips(results)
    setTotalPage(Math.round(count / PER_PAGE))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setLoading(true)
      setLoadingPagination(true)

      const currentPage = 1
      setPage(currentPage)

      await loadShips(currentPage)
    } catch (error) {
      toastError(
        'Ops..., ocorreu um erro ao buscar os dados, por favor tente mais tarde.'
      )
    } finally {
      setLoading(false)
      setLoadingPagination(false)
    }
  }

  const handlePreviousPage = async () => {
    try {
      setLoadingPagination(true)
      const currentPage = page - 1
      setPage(currentPage)
      await loadShips(currentPage)
    } catch (error) {
      toastError(
        'Ops..., ocorreu um erro ao buscar os dados da página anterior, por favor tente mais tarde.'
      )
    } finally {
      setLoadingPagination(false)
    }
  }
  const handleNextPage = async () => {
    try {
      setLoadingPagination(true)
      const currentPage = page + 1
      setPage(currentPage)
      await loadShips(currentPage)
    } catch (error) {
      toastError(
        'Ops..., ocorreu um erro ao buscar os dados da próxima página, por favor tente mais tarde.'
      )
    } finally {
      setLoadingPagination(false)
    }
  }

  React.useEffect(() => {
    // loadStarShips({ page })
  }, [])

  return (
    <S.Wrapper>
      <S.Panel>
        <S.LogoInfo>
          <S.Logo src="img/logo.png" loading="lazy" alt="Logo Space Travel" />
          <S.AppTitle>Space Travel</S.AppTitle>
        </S.LogoInfo>

        <S.Title>
          Olá viajante, informe a distância da sua viagem, vamos ajudá-lo a
          fazer a(s) parada(s) para reabastecimento
        </S.Title>

        <S.Form onSubmit={handleSubmit}>
          <Input
            title="Digite a distância da viagem"
            placeholder="Distância ex: 100000"
            type="search"
            name="search"
            onChange={handleInputDistance}
            icon={MdSearch}
          />
          <Button
            type="submit"
            loading={loading}
            disabled={disabledButtonSearch}
          >
            Pesquisar
          </Button>
        </S.Form>

        {loadingPagination ? (
          <Loader
            loading={loadingPagination}
            align="center"
            message="Carregando..."
          />
        ) : (
          <>
            <S.StarShipList>
              {starships?.map((starship, index) => (
                <StarShip
                  key={`${starship.name}-${index}`}
                  starship={starship}
                  distance={distance}
                />
              ))}
            </S.StarShipList>

            {!!starships.length && (
              <S.Navigation>
                <Button
                  type="button"
                  onClick={handlePreviousPage}
                  disabled={disabledPreviousButton}
                >
                  Anterior
                </Button>

                <S.PageInfo>
                  {page} / {totalPage}
                </S.PageInfo>

                <Button
                  type="button"
                  onClick={handleNextPage}
                  disabled={disabledNextButton}
                >
                  Próximo
                </Button>
              </S.Navigation>
            )}
          </>
        )}
      </S.Panel>
    </S.Wrapper>
  )
}

export default Main
