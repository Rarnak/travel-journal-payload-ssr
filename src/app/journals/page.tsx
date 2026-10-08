import JournalList from '@/components/JournalList'

export default async function Journals({ params }: { params: Promise<{ page: string }> }) {
  const page = (await params).page
  return <JournalList page={parseInt(page, 10)} />
}
