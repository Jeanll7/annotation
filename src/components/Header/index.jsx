import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img 
          src="https://github.com/Jeanll7.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem vindo,</span>
          <strong>Jean leal</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine size={30} color="#666360" />
      </Logout>
    </Container>
  )
}