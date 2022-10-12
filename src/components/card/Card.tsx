import { CardProps } from "../../data/CardProps"
import './../../styles/card.scss'
import rightArrowGrey from '../../assets/img/right-arrow-grey.svg'
import rightArrowDark from '../../assets/img/right-arrow-dark.svg'
import settingsGrey from '../../assets/img/settings-grey.svg'
import settingsDark from '../../assets/img/settings-dark.svg'
import { useState } from "react"

export function Card(props: CardProps) {

    const [isCardOnHover, setIsCardOnHover] = useState(false)
    const [settingsImg, setSettingsImg] = useState(settingsGrey)

    return (
        <div className="card" onMouseEnter={() => setIsCardOnHover(true)} onMouseLeave={() => setIsCardOnHover(false)}>
            <h3 className="location">
                {`${props.location}`}
            </h3>
            <div className="description">
                <img src={settingsImg} onMouseEnter={() => setSettingsImg(settingsDark)} onMouseLeave={() => setSettingsImg(settingsGrey)} width='16' height='16' />
                <p>
                    {`$${props.cost}k+`}
                </p>
                <p>
                    /
                </p>
                <p>
                    {`${props.beds} Beds`}
                </p>
                <p>
                    /
                </p>
                <p>
                    {`${props.type}.`}
                </p>
                {Object.keys(props).length == 7 ? <p>... 3 more</p> : (Object.keys(props).length == 6 ? <p>... 2 more</p> : (Object.keys(props).length == 5 && <p>... 1 more</p>))}
                {isCardOnHover ? <img src={rightArrowDark} width='16' height='16' /> : <img src={rightArrowGrey} width='16' height='16' />}
            </div>
        </div>
    )
}