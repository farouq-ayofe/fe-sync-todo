import styled, {keyframes} from "styled-components";

export const Button = (props: React.ButtonHTMLAttributes<any>) => {
    return <button className={props.className} {...props} style={{background: "#aa3bff"}} />
}


/**
 * @keyframes pulse {
 *  from {
 *    background-color: red;
 *  }
 *  to {
 *    background-color: blue;
 *  }
 * }
 */

export const pulseKeyframes = keyframes`
    0% {
        //
    }
    20% {
        //
    }
    40% {
        //
    }
    60% {
        //
    }
    80% {
        //
    }
    100% {
        //
    }
`;


const BaseButton = styled.button`
    outline: 0;
    background-color: white;
    border: none;
    cursor: pointer; 
    animation: ${pulseKeyframes} 1s infinite;
`;

export const StartButton = styled.button`
    background-color: green;
`;

export const PrimaryButton = styled(BaseButton)<{
    isOnHomePage?: boolean;
}>`
    border-radius:${props => props.isOnHomePage ? "10px" : "5px"};
    color: white;
    padding: 8px 12px; 
    background: ${props => props.theme.is_dark_theme ? props.theme.colors.primary : props.theme.colors.secondary};

    &:hover ${StartButton} {
        background-color: blue;
    }
`;

export const SecondaryButton = styled(BaseButton)`
    background-color: ${(props) => props.theme.colors.secondary};
`;

export const InfoButton = styled(BaseButton)`
    background-color: lightgray;
`;

export const ErrorButton = styled(BaseButton)`
    background-color: red;
`;



// styling parent components next



export const Header  = ({className}: {className?: string
/// ....
}) => {
const handleClick = () => {
    console.log("clicked");
}
    return <div className={className}>
        <Button >Click me</Button>

        <StartButton>Start</StartButton>

        <PrimaryButton isOnHomePage={true} onClick={handleClick}>Click me</PrimaryButton>
    </div>
}


export const HeaderWithBorder = styled(Header)`
    border: 1px solid red;
`;


/// <HeaderWithBorder {...props} />