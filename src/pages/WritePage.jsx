import {
  Button,
  ContentForm,
  FileUploader,
  SelectIsPublic,
  StudentIdInput,
  TitleForm,
  useFormSubmit,
} from '@/components/modules'
import * as S from './WritePage.styled'

export const WritePage = () => {
  const onSubmit = useFormSubmit()
  return (
    <S.Container>
      <S.Form onSubmit={onSubmit}>
        <TitleForm />
        <ContentForm />
        <StudentIdInput />
        <SelectIsPublic />
        <FileUploader />
        <Button type='submit'>제출하기</Button>
      </S.Form>
    </S.Container>
  )
}
