import { Container } from "./styles";

export function Button({title, loading = false,icon : Icon, deactivated, height, ...rest}){
    return(
        <Container
            type='button'
            disabled={loading}
            deactivated={deactivated}
            height={height}
            {...rest}
        > 
            {Icon && <Icon size={20}/>}
            {loading ? Carregando : title}
        </Container>
    )
}