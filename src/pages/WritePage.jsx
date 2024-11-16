import {
  Button,
  ContentForm,
  FileUploader,
  SelectIsPublic,
  StudentIdInput,
  TitleForm,
} from '@/components/modules'
import * as S from './WritePage.styled'
import { FormProvider, useForm } from 'react-hook-form'
import { postMail } from '@/apis'
import { useUserId } from '@/stores'
import { useNavigate } from 'react-router'

export const WritePage = () => {
  const methods = useForm()
  const userId = useUserId()
  const navigate = useNavigate()
  const onSubmit = async (form) => {
    const { data } = await postMail(userId, form)
    const {
      status,
      message,
      data: { mailId },
    } = data

    if (status === 200) {
      alert(message)
      navigate(`/content/detail/${mailId}`)
    } else {
      alert(message)
    }
  }

  return (
    <FormProvider {...methods}>
      <S.Container>
        <S.Form onSubmit={methods.handleSubmit(onSubmit)}>
          <TitleForm />
          <ContentForm />
          <StudentIdInput />
          <SelectIsPublic control={methods.control} />
          <FileUploader control={methods.control} />
          <Button type='submit'>제출하기</Button>
        </S.Form>
      </S.Container>
    </FormProvider>
  )
}
