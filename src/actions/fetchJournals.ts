import { getPayload } from 'payload'
import buildConfig from '@/payload.config'

export async function fetchJournals({ page = 1, limit = 10, sort = 'publishedDate' }) {
  const payload = await getPayload({ config: buildConfig })
  const Journals = await payload.find({
    collection: 'journals',
    limit: 10,
    depth: 2,
    sort: 'Date',
  })
  return Journals.docs
}
