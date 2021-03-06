import Link from 'next/link'

export function displayDateTime(date: string): string {
  let d = new Date(date)
  return (
    d.toLocaleString('en-gb', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }) +
    ' • ' +
    d.toLocaleTimeString('en-gb', {
      hour: '2-digit',
      minute: '2-digit',
    })
  )
}

export default function DateLine({
  date,
  linked,
}: {
  date: string
  linked?: boolean
}) {
  let classes = ['text-xs', 'pt-1', 'font-light']
  if (linked) {
    classes.push('cursor-pointer')
  }
  return (
    <>
      <div className={classes.join(' ')}>{displayDateTime(date)}</div>
    </>
  )
}
