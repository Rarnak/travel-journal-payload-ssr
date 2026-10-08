import { fetchJournals } from '@/actions/fetchJournals'

export default async function JournalList({ page = 1 }) {
  const journals = await fetchJournals({ page })

  return (
    <ul>
      {journals.map((journal) => {
        return <li key={journal.id}>{journal.location}</li>
      })}
    </ul>
  )
}
