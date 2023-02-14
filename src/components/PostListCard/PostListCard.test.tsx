import { render, screen } from '@testing-library/react'

import PostListCard from './PostListCard'

describe('Post List Card', () => {
  const POST = {
    post: { id: 1, thumbnail: { path: '/', extension: 'jpg' }, name: '', description: '', comics: { items: [] } },
  }

  it('renders correctly', () => {
    const { container } = render(<PostListCard {...POST} />)
    expect(container).toMatchSnapshot()
  })

  it('renders PostListCard', () => {
    render(<PostListCard {...POST} />)

    const postListCard = screen.getByTestId('post-list-card')

    expect(postListCard).toBeInTheDocument()
  })
})
