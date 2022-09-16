import styled from 'styled-components'

export const SuccessContainer = styled.div`
  div {
    margin-bottom: 2.5rem;
    h2 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 800;
      font-size: 2rem;
      color: ${(props) => props.theme['yellow-dark']};
      margin-top: 2rem;
    }

    p {
      font-weight: 400;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
export const SucessContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 32.875rem;
    height: 16.875rem;

    border: double 1px transparent;
    border-image-slice: 1;
    border-radius: 6px 36px;
    background-image: linear-gradient(
        ${(props) => props.theme.white},
        ${(props) => props.theme.white}
      ),
      radial-gradient(circle at top left, #dbac2c, #8047f8);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
`
