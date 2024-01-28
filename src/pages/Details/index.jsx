import { Container, Links, Content } from './styles';

import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';



export function Details() {
  return (   
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam a hic in rem ea magni quasi similique eligendi saepe, natus ipsum sit ab accusantium vitae repellat nulla est neque id? Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatem repellat eum labore aspernatur cum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde nulla commodi, possimus ipsum quae quidem!
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="https://www.linkedin.com/in/jean-leal/">https://www.linkedin.com/in/jean-leal/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />        
            <Tag title="nodejs" />        
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>   
  )
}


