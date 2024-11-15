import { getVideo } from "../firebase"

const videoLoader = async () => {
  const queryParams = new URLSearchParams(location.search)
  const grade = queryParams.get("grade")

  const video = await getVideo(grade)
  if (video) {
    return video[0] // Return video document data
  } else {
    throw new Error("Video not found")
  }
}

export { videoLoader }
