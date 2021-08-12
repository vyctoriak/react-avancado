import { render, screen } from '@testing-library/react'

import Main from '.'

describe('testing Main component', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument() //o i serve para NÃO fazer diferença entre maiúsculas ou minúsculas
  })

  /*it('should render correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })*/
})
