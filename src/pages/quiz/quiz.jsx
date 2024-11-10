"use client"

// import SurveyContentComponent from "@/components/survey/content"
// import { createCompletedSurvey } from "@/lib/form-actions/completedSurvey"
// import { countQuestions, fetchUrl, reportDataSetConstructor } from "@/lib/utils";
import { Button, Progress, Radio, RadioGroup } from "@nextui-org/react"
// import Image from "next/image"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
// import { useBeforeUnload } from "react-use"
import styles from "./quiz.module.css"

export default function Quiz() {
  const [completed, setCompleted] = useState(false)
  const {
    control,
    formState: { isSubmitting },
    getValues,
    handleSubmit,
    register,
  } = useForm({ mode: "onChange" })

  const [progress, setProgress] = useState(0)
  const [state, setState] = useState({})
  const questions = [
    {
      _id: 1,
      name: "Is Sadeem a good person?",
      answers: [
        { _id: 1, name: "yes" },
        { _id: 2, name: "No" },
        { _id: 3, name: "Defintely not" },
        { _id: 4, name: "No Doubt" },
      ],
    },
    {
      _id: 2,
      name: "will Sadeem get a girl in future?",
      answers: [
        { _id: 1, name: "yes" },
        { _id: 2, name: "No" },
        { _id: 3, name: "Defintely not" },
        { _id: 4, name: "No Doubt" },
      ],
    },
    {
      _id: 3,
      name: "will Sadeem a Become rich?",
      answers: [
        { _id: 1, name: "yes" },
        { _id: 2, name: "No" },
        { _id: 3, name: "Defintely not" },
        { _id: 4, name: "No Doubt" },
      ],
    },
  ]

  const count = questions?.length || 0
  const onSubmit = async (formData) => {
    setState({})
    const response = await createCompletedSurvey({}, formData)
    setState(response)
  }

  const updateProgress = () => {
    const values = []
    setTimeout(() => {
      const formData = getValues()
      for (const key of Object.keys(formData)) {
        if (key.startsWith("answer") && formData[key])
          values.push(formData[key])
      }
      setProgress((values.length / count) * 100)
    }, 10)
  }

  async function createCompletedSurvey() {
    console.log("krwa")
  }

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
              <div>
                <img
                  alt={"Inspire Logo"}
                  height={74}
                  src={"/public/logo-green.png"}
                  width={130}
                />
              </div>
              <div>
                <p className={styles.title}>Quizz Derived From Video</p>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.contentInner}>
                {questions?.map((question, questionIndex) => (
                  <div className={styles.question} key={question._id}>
                    <Controller
                      control={control}
                      name={`answer${questionIndex + 1}`}
                      render={({ field: { onChange } }) => (
                        <RadioGroup
                          {...register(`answer${questionIndex + 1}`, {
                            required: true,
                          })}
                          label={
                            <p>
                              Q{questionIndex + 1}: {question.name}
                            </p>
                          }
                          onChange={onChange}
                          onValueChange={updateProgress}
                        >
                          {question.answers.map((answer) => (
                            <Radio
                              {...register(`answer${questionIndex + 1}`, {
                                required: true,
                              })}
                              key={answer._id}
                              value={answer._id}
                            >
                              {answer.name}
                            </Radio>
                          ))}
                        </RadioGroup>
                      )}
                      rules={{ required: true }}
                    />
                    {/* <input
                      defaultValue={surveyInvitation._id}
                      {...register("surveyInvitation")}
                      type="hidden"
                    />
                    <input
                      defaultValue={surveyInvitation.survey._id}
                      {...register("survey")}
                      type="hidden"
                    />
                    <input
                      defaultValue={surveyInvitation.employee._id}
                      {...register("employee")}
                      type="hidden"
                    /> */}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.footer}>
              {state.error && <div className="error">{state.error}</div>}
              <div className={styles.footerInner}>
                <Button
                  color={"primary"}
                  isLoading={isSubmitting}
                  type={"submit"}
                >
                  Submit
                </Button>
                <div className={styles.progress}>
                  <Progress
                    aria-label={"Survey Progress"}
                    color={"primary"}
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
          <h1>Audit erledigt!</h1>
          <p className={styles.completedText}>
            Vielen Dank für Ihre Reflexion & Einschätzung. Ihre individuelle
            Auswertung ist bereits auf dem Weg zu Ihnen in Ihr Emailpostfach.
            Zögern Sie bitte nicht, Ihren INSPIRE® Experten zu kontaktieren,
            falls Sie Ihre Ergebnisse im Sinne eines kollegialen Sparrings
            besprechen möchten.
          </p>
          <h1 className={styles.completedFooter}>Ihr INSPIRE® Team</h1>
        </div>
      )}
    </>
  )
}
