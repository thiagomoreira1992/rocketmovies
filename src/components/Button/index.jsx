import { Container } from "./styles";

export function Button({title, loading = false,icon : Icon, height, ...rest}){
    return(
        <Container
            type='button'
            disabled={loading}
            height={height}
            {...rest}
        > 
            {Icon && <Icon size={20}/>}
            {loading ? Carregando : title}
        </Container>
    )
}