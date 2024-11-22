export default function Tabs({children, buttons, buttonsContainer}) {
    // The follow variable is mandatory as we need to have the uppercase letter
    // otherwise react will try to look for inside 'buttonsContainer' method
    // which does not exist!!!
    const ButtonsContainer = buttonsContainer;
    return <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
    </>
}