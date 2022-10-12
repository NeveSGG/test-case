import './../../styles/signButton.scss';
import { ButtonProps } from "../../data/BtnProps";

export function SignButton(props: ButtonProps) {
    return (
        <div className='SignButton'>
            <button>
                {props.text}
            </button>
        </div>
    )
}