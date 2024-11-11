"use client"

import { Button, Progress, Radio, RadioGroup } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import styles from "./quiz.module.css"

export default function Quiz() {
  const [completed, setCompleted] = useState(false)
  const {
    control,
    formState: { isSubmitting },
    getValues,
    handleSubmit,
  } = useForm({ mode: "onChange" })

  const [progress, setProgress] = useState(0)
  const [state, setState] = useState({})
  const questions = [
    {
      _id: 1,
      name: "Is he a good person?",
      answers: [
        { _id: 1, name: "Yes" },
        { _id: 2, name: "No" },
        { _id: 3, name: "Definitely not" },
        { _id: 4, name: "No doubt" },
      ],
    },
    {
      _id: 2,
      name: "Will he get a girl in the future?",
      answers: [
        { _id: 1, name: "Yes" },
        { _id: 2, name: "No" },
        { _id: 3, name: "Definitely not" },
        { _id: 4, name: "No doubt" },
      ],
    },
    {
      _id: 3,
      name: "Will he become rich?",
      answers: [
        { _id: 1, name: "Yes" },
        { _id: 2, name: "No" },
        { _id: 3, name: "Definitely not" },
        { _id: 4, name: "No doubt" },
      ],
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1)
  }

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }

  const handleSkip = () => {
    setCurrentIndex((currentIndex + 1) % questions.length)
  }
 async function createCompletedSurvey(){}
  const onSubmit = async (formData) => {
    setState({})
    try {
      const response = await createCompletedSurvey({}, formData)
      setState(response)
    } catch (error) {
      setState({ error: error.message })
    }
  }

  const updateProgress = () => {
    const values = Object.values(getValues())
    const completedAnswers = values.filter((v) => v)
    setProgress((completedAnswers.length / questions.length) * 100)
  }

  useEffect(() => {
    updateProgress()
  }, [currentIndex])

  useEffect(() => {
    if (state.success) {
      setCompleted(true)
    }
  }, [state])

  return (
    <>
      {!completed && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.audit}>
            <div className={styles.topBar}>
              <img
                alt="Inspire Logo"
                height={74}
                src="/logo-green.png"
                width={130}
              />
              <p className={styles.title}>Quiz Derived From Video</p>
            </div>
            <div className={styles.content}>
              <div className={styles.contentInner}>
                <div
                  className={styles.question}
                  key={questions[currentIndex]._id}
                >
                  <Controller
                    control={control}
                    name={`answer${questions[currentIndex]._id}`}
                    render={({ field: { onChange } }) => (
                      <RadioGroup
                        label={
                          <p>
                            Q{currentIndex + 1}: {questions[currentIndex].name}
                          </p>
                        }
                        onChange={onChange}
                      >
                        {questions[currentIndex].answers.map((answer) => (
                          <Radio key={answer._id} value={answer._id}>
                            {answer.name}
                          </Radio>
                        ))}
                      </RadioGroup>
                    )}
                    rules={{ required: true }}
                  />
                </div>

                <div className="flex flex-col h-52 w-32  bg-black">
                  <div className="">
                    <Button
                      color="primary"
                      isLoading={isSubmitting}
                      type="submit"
                      onClick={() => {
                        handlePrevious()
                      }}
                    >
                      Previous
                    </Button>
                  </div>
                  <div>
                    <Button
                      color="primary"
                      isLoading={isSubmitting}
                      type="submit"
                      onClick={() => {
                        handleNext()
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footer}>
              {state.error && <div className="error">{state.error}</div>}
              <div className={styles.footerInner}>
                <Button color="primary" isLoading={isSubmitting} type="submit">
                  Submit
                </Button>
                <div className={styles.progress}>
                  <Progress
                    aria-label="Survey Progress"
                    color="primary"
                    value={progress}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      )}

      {completed && (
        <div className={styles.completed}>
          <h1>Audit Completed!</h1>
          <p className={styles.completedText}>
            Thank you for your reflection. Your results are on the way to your
            inbox. Feel free to contact your INSPIRE® expert for further
            discussion.
          </p>
          <h1 className={styles.completedFooter}>Your INSPIRE® Team</h1>
        </div>
      )}
    </>
  )
}
