import { Card } from "../components/card/Card"
import { getAddresses } from "../data/getAddresses"

export function makeCardsList() {

    const cardsData = getAddresses()
    
    const cards = cardsData.map((data) => 
        <Card 
            {... data}
        />
    )

    return cards
}