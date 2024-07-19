import { screen, render, fireEvent } from "@testing-library/react"
import App from "./App"


// test mount del componente welcome
it('should mount Welcome component', () => {
    // rendering (per fare test su montaggio di componenti, ha senso 
    // vedere che funzioni nel proprio contesto, quindi non ha senso montarli da soli)
    render(<App />)

    // selezione
    const welcomeComponent = screen.getByText(/Benvenuto in FunnyBooks!/i)
    // verifica
    expect(welcomeComponent).toBeInTheDocument()
})

// test nrCards = length array
it('should have n cards as array of books length', () => {
    // rendering
    render(<App />)

    // selezione delle cards
    const cards = screen.getAllByTestId(/singleBook/)
    
    //verifico che siano 150
    expect(cards).toHaveLength(150)
})

// test montaggio componente commentArea
it('should mount commentArea component', () => {
    //rendering
    render(<App />)

    //selection
    const commentAreaComponent = screen.getByText(/Write a review!/i)

    //verifica
    expect(commentAreaComponent).toBeInTheDocument()
})

// raggruppamento di tests
describe('should search things in searchbar', () => {
    
    test('searching conan with fantasy books', () => {
        //rendering
        render(<App />)

        //selection
        const searchInput = screen.getByPlaceholderText(/Find your new favourite book!/i)
        fireEvent.change(searchInput, {target: {value: 'conan'}})
        
        const cards = screen.getAllByTestId(/singleBook/)

        //verifica
        expect(cards).toHaveLength(2)
    })

    test('searching sword with fantasy books', () => {
        //rendering
        render(<App />)

        //selection
        const searchInput = screen.getByPlaceholderText(/Find your new favourite book!/i)
        fireEvent.change(searchInput, {target: {value: 'sword'}})
        
        const cards = screen.getAllByTestId(/singleBook/)

        //verifica
        expect(cards).toHaveLength(9)
    })
})

// test bordo rosso su carta cliccata
it('should have red border if selected card', () => {
    //rendering
    render(<App />)

    //selection
    //seleziono una card
    const card = screen.getAllByTestId(/singleBook/)[0]
    fireEvent.click(card)
    
    //verifica
    expect(card).toHaveClass('selected')
})

// test bordo rosso solo su una carta
it('should have only one card with red border', () => {
    //rendering
    render(<App />)

    //selection
    const cards = screen.getAllByTestId(/singleBook/i)
    const c1 = cards[0]
    const c2 = cards[1]

    fireEvent.click(c1)
    expect(c1).toHaveClass('selected')

    fireEvent.click(c2)
    expect(c1).not.toHaveClass('selected')
})

// test no singleComment 
it('should not have singleComments component mounted on load', () => {
    //rendering
    render(<App />)

    //selection
    // attenzione! Poichè sto cercando qualcosa che ha lunghezza 0, non posso usare get o find,
    // perchè lanciano un errore in caso di manato ritrovamento!
    // queryAll invece mi restituisce un array vuoto
    const commentsComponents = screen.queryAllByTestId(/singleComment/i)

    //verifica
    expect(commentsComponents).toHaveLength(0)
})

// test commenti caricati su click di una card
it('should load comments after clicking on card', async () => {
    //render
    render(<App/>)
    
    //selection
    const card = screen.getAllByTestId(/singleBook/i)[0]

    fireEvent.click(card)

    // attenzione! uso findAll perchè è una funzione async (cioè, se capisce che nel componente c'è )
    // qualcosa di asincrono, attende che finisca il caricamento e poi prosegue.
    const commentsComponents = await screen.findAllByTestId('singleComment')

    //verifica
    expect(commentsComponents).not.toHaveLength(0)

})

