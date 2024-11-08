// 'use client';

// import { signIn } from '@/lib/actions/auth';
import { Button, Checkbox, Input, Link } from '@nextui-org/react';
// import img from 'next/img';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './form.module.css';

export default function SignInFormComponent() {
  const { control, formState: { errors, isSubmitting }, handleSubmit, register } = useForm();
  const [state, setState] = useState({});

  const onSubmit = async (formData) => {
    setState({});
    const response = await signIn({}, formData);
    if (!response) {
      setState({ success: true });
    } else {
      setState(response);
    }
    };
    function signIn() {
        console.log("hijra")
    }

  return (
    <form className={styles.signInForm} onSubmit={handleSubmit(onSubmit)}>
      {state?.error && <div className="error">{state.error}</div>}
      <div className={styles.inputWrapper}>
        <Input
          //   endContent={<img alt={'email icon'} height={20} radius={'none'} src={'/icons/email.svg'} width={20} />}
          errorMessage={errors.email && "Please enter your Name"}
          isInvalid={!!errors.email}
          label={"Student Name"}
          labelPlacement={"outside"}
          placeholder={"Enter your Name"}
          radius={"sm"}
          {...register("email", { required: true })}
          type={"text"}
          variant={"bordered"}
        />
      </div>
      <div className={styles.inputWrapper}>
        <Input
          //   endContent={<img alt={'email icon'} height={20} radius={'none'} src={'/icons/password.svg'} width={20} />}
          errorMessage={errors.password && "Please enter your Grade"}
          isInvalid={!!errors.password}
          label={"Student Grade"}
          labelPlacement={"outside"}
          placeholder={"Enter your Grade"}
          radius={"sm"}
          {...register("Grade", { required: true })}
          type={"text"}
          variant={"bordered"}
        />
      </div>
      <div className={styles.inputWrapper}>
        <Input
          //   endContent={<img alt={'email icon'} height={20} radius={'none'} src={'/icons/password.svg'} width={20} />}
          errorMessage={errors.password && "Please enter your School Name"}
          isInvalid={!!errors.password}
          label={"Student School Name"}
          labelPlacement={"outside"}
          placeholder={"Enter your School Name"}
          radius={"sm"}
          {...register("School Name", { required: true })}
          type={"text"}
          variant={"bordered"}
        />
      </div>
      <div className={styles.signInOptions}>
        {/* <Controller control={control} name={'remember'} render={({ field: { onChange, value } }) => (
          <Checkbox isSelected={value} onChange={onChange}>Remember Me</Checkbox>
        )} /> */}
        {/* <Link href={'/reset-password'}>Forgot Password?</Link> */}
      </div>
      <div className={styles.signInButtonWrapper}>
        <Button
          className={styles.signInButton}
          color={"primary"}
          isDisabled={!!state.success}
          isLoading={isSubmitting}
          radius={"sm"}
          type={"submit"}
        >
          Proceed To Video
        </Button>
      </div>
    </form>
  )
}
