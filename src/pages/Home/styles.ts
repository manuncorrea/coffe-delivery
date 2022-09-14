import styled from 'styled-components'
import backgroundImage from '../../assets/background-home.png'

export const BannerCoffe = styled.section`
  position: absolute;
  width: 100%;
  height: 34rem;
  left: 0px;
  right: 0px;
  top: 6.5rem;

  background: url(${backgroundImage}) no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    position: absolute;
    width: 29.75rem;
    height: 22.5rem;
    left: calc(50% - 29.75rem / 2 + 20.125rem);
    top: calc(50% - 22.5rem / 2);
  }
`
export const Container = styled.div`
  .text-banner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${(props) => props.theme['base-title']};
    padding: 0px;
    gap: 1rem;
    position: absolute;

    width: 36.75rem;
    height: 12rem;

    left: calc(50% - 36.75rem / 2 - 16.625rem);
    top: calc(50% - 12rem / 2 - 5.125rem);

    span {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 48px;
    }

    p {
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  .itens-banner {
    position: absolute;
    width: 35.438rem;
    height: 5.25rem;
    left: calc(50% - 567px / 2 - 276.5px);
    top: calc(50% - 84px / 2 + 122px);

    ul {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`
