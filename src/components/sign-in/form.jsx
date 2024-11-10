// 'use client';

// import { signIn } from '@/lib/actions/auth';
import { Button, Input } from "@nextui-org/react"
// import img from 'next/img';
import { useState } from "react"
import { useForm } from "react-hook-form"
import styles from "./form.module.css"
import { useNavigate } from "react-router-dom"

export default function SignInFormComponent() {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm()
  const [state, setState] = useState({})
  const navigate = useNavigate()

  const onSubmit = async (formData) => {
    navigate("/video")
    setState({})
    const response = await signIn({}, formData)
    if (!response) {
      setState({ success: true })
    } else {
      setState(response)
    }
  }
  function signIn() {
    console.log("hijra")
  }

  return (
    <form className={styles.signInForm} onSubmit={handleSubmit(onSubmit)}>
      {state?.error && <div className="error">{state.error}</div>}
      <div className={styles.inputWrapper}>
        <Input
          errorMessage={errors.name && "Please enter your Name"}
          isInvalid={!!errors.name}
          label={"Student Name"}
          labelPlacement={"outside"}
          placeholder={"Enter your Name"}
          radius={"sm"}
          {...register("name", { required: true })}
          type={"text"}
          variant={"bordered"}
        />
      </div>
      <div className={styles.inputWrapper}>
        <Input
          //   endContent={<img alt={'email icon'} height={20} radius={'none'} src={'/icons/password.svg'} width={20} />}
          errorMessage={errors.grade && "Please enter your Grade"}
          isInvalid={!!errors.grade}
          label={"Student Grade"}
          labelPlacement={"outside"}
          placeholder={"Enter your Grade"}
          radius={"sm"}
          {...register("grade", { required: true })}
          type={"text"}
          variant={"bordered"}
        />
      </div>
      <div className={styles.inputWrapper}>
        <Input
          //   endContent={<img alt={'email icon'} height={20} radius={'none'} src={'/icons/password.svg'} width={20} />}
          errorMessage={errors.SchoolName && "Please enter your School Name"}
          isInvalid={!!errors.SchoolName}
          label={"Student School Name"}
          labelPlacement={"outside"}
          placeholder={"Enter your School Name"}
          radius={"sm"}
          {...register("SchoolName", { required: true })}
          type={"text"}
          variant={"bordered"}
        />
      </div>
      <div className={styles.signInOptions}></div>
      <div className={styles.signInButtonWrapper}>
        <Button
          className={styles.signInButton}
          color={"primary"}
          isDisabled={!!state.success}
          isLoading={isSubmitting}
          radius={"sm"}
          type={"submit"}
          onClick={() => {}}
        >
          Proceed To Video
        </Button>
      </div>
    </form>
  )
}
