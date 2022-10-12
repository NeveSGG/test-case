import './../../styles/searchButton.scss';
import { ButtonProps } from "../../data/BtnProps";

export function SearchButton(props: ButtonProps) {
    return (
        <div className='SearchButton'>
            <button>
                {props.text}
            </button>
        </div>
    )
}