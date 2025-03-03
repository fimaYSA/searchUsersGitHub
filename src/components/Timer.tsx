import {FC, useEffect, useState} from "react";

export const Timer: FC<OwnProps> = ({userId, onShowUserDetails}) => {
  const startTimerValue = 10
  const [seconds, setSeconds] = useState(startTimerValue)

  useEffect(() => {
    setSeconds(startTimerValue)
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev - 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [userId])

  useEffect(() => {
    if (seconds === 0) {
      onShowUserDetails(null)
    }
  }, [seconds])

  return (
    <div>{seconds}</div>
  )
}

type OwnProps = {
  userId: number
  onShowUserDetails: (userDetails: null) => void
}
