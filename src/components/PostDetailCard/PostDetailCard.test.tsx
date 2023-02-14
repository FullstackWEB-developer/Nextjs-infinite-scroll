import { render, screen } from '@testing-library/react'

import PostDetailCard from './PostDetailCard'

jest.mock('next/image', () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />
  },
}))

describe('Post Detail Card', () => {
  const POST = {
    post: { id: 1, thumbnail: { path: '/', extension: 'jpg' }, name: '', description: '', comics: { items: [] } },
  }
  it('renders correctly', () => {
    const { container } = render(<PostDetailCard {...POST} />)
    expect(container).toMatchSnapshot()
  })

  it('renders PostDetailCard', () => {
    render(<PostDetailCard {...POST} />)

    const postDetailCard = screen.getByTestId('post-detail-card')

    expect(postDetailCard).toBeInTheDocument()
  })
})
