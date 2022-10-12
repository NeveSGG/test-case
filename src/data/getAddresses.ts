import { CardProps } from "./CardProps";

export function getAddresses() {

    const addresses: CardProps [] = [
        {
            key: 0,
            location: 'Calabasas, CA',
            cost: 1.5,
            beds: 2,
            type: 'Appt'
        },
        {
            key: 1,
            location: 'Long Beach, CA',
            cost: 2.0,
            beds: 1,
            type: 'Appt',
            view: 'Ocean',
            stars: 4
        }, 
        {
            key: 2,
            location: 'Fullerton, CA',
            cost: 2.5,
            beds: 2,
            type: 'Appt',
            view: 'Ocean',
            stars: 5,
            whatsNearby: 'New Restaurant'
        }
    ]

    return addresses;
}