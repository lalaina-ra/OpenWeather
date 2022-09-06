import Footer from './'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../styles/Context'
 
describe('Footer', () => {
    test('should render without crashing', async () => {
        render(
          <ThemeProvider>
            <Footer />
          </ThemeProvider>
        )
    })

    test('Should change theme', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
        const nightModeButton = screen.getByRole('button')
        expect(nightModeButton.textContent).toBe('Changer de mode : ☀️ © Copyrights 2022 ® All Rights Reserved')
        fireEvent.click(nightModeButton)
        expect(nightModeButton.textContent).toBe('Changer de mode : 🌙 © Copyrights 2022 ® All Rights Reserved')
    })
})