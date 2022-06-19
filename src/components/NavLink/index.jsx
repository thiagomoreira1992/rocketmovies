import { Container } from "./styles";

export function NavLink({title, icon: Icon, href,  ...rest}){
    return(
        <Container
        href={href}
        {...rest}
        >
            {Icon && <Icon size={16}/>}
            {title}
        </Container>
    )
}