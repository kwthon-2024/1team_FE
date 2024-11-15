import styled from 'styled-components'
import { FaRegCheckCircle } from 'react-icons/fa'
import { MdErrorOutline } from 'react-icons/md'

export const Alert = ({ type, message }) => {
  return (
    <AlertDiv type={type}>
      {type === 'error' ? <AlertIconError /> : <AlertIconSuccess />}
      <AlertMessage type={type}>{message}</AlertMessage>
    </AlertDiv>
  )
}

export const AlertDiv = styled.div`
  background-color: ${(props) =>
    props.type === 'error' ? props.theme.colors.alertErrorB : props.theme.colors.alertSuccessB};
  display: flex;
  align-items: center;
  width: 500px;
  padding: 6px 16px;
  align-items: flex-start;
  border-radius: 4px;
`

const AlertIconSuccess = styled(FaRegCheckCircle)`
  width: 22px;
  height: 22px;
  color: ${(props) => props.theme.colors.alertSuccessI};
  margin-right: 12px;
  margin-top: 7px;
  margin-bottom: 7px;
`
const AlertIconError = styled(MdErrorOutline)`
  width: 22px;
  height: 22px;
  color: ${(props) => props.theme.colors.alertErrorI};
  margin-right: 12px;
  margin-top: 7px;
  margin-bottom: 7px;
`
const AlertMessage = styled.div`
  align-self: stretch;
  display: flex;
  height: 100%;

  color: ${(props) =>
    props.type === 'error' ? props.theme.colors.alertErrorT : props.theme.colors.alertSuccessT};
  letter-spacing: 0.17px;
  padding: 10px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`
