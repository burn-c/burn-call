import { useState } from 'react'

import CalendarStep from './CalendarStep'
import ConfirmStep from './ConfirmStep'

export default function ScheduleForm() {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)

  function handleClearSelectedDateTime() {
    setSelectedDateTime(null)
  }

  return selectedDateTime ? (
    <ConfirmStep
      schedulingDate={selectedDateTime}
      onCancelConfirmation={handleClearSelectedDateTime}
    />
  ) : (
    <CalendarStep onSelectDateTime={setSelectedDateTime} />
  )
}
