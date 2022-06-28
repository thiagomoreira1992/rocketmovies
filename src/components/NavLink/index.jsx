import { Container } from "./styles";

export function NavLink({title, icon: Icon, to,  ...rest}){
    return(
        <Container
        to={to}
        {...rest}
        >
            {Icon && <Icon size={16}/>}
            {title}
        </Container>
    )
}