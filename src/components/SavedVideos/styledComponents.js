import styled from 'styled-components'

export const SavedContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
`
export const SavedBodyContent = styled.div`
  height: calc(100vh - 60px);
  display: flex;
`
export const SavedVideos = styled.div`
  width: 80%;
  height: 100%;
  flex-grow: 1;
  border: solid 2px red;
  background-color: ${props => (props.dark ? '#000' : '#fff')};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 767px) {
    width: 100%;
    align-items: center;
    overflow-y: auto;
  }
`
