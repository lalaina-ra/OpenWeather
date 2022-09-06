import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Home from './'
import { ThemeProvider } from '../../styles/Context'

describe('The Home component', () => {
  it('should render title', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(
      screen.getByRole('heading', {
        level: 1,
        text:
          'OpenWeather for Business',
      })
    ).toBeTruthy()
  })
})