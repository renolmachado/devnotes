import { Container, Note, Title } from './Home.styles'
import { useHome } from './useHome'

const Home = () => {
  const { notes, onNoteClick } = useHome()

  return (
    <div style={{ padding: '2rem' }}>
      <Title>Bienvenido a Devnotes</Title>
      <Container>
        {notes.map((note) => (
          <Note key={note.name} onClick={() => onNoteClick(note)}>
            {note.path}
          </Note>
        ))}
      </Container>
    </div>
  )
}

export default Home
