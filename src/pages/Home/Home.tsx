import NewNote from './components/NewNote'
import { Container, Note, Title } from './Home.styles'
import { useHome } from './useHome'

const Home = () => {
  const { notes, newNoteName, setNewNoteName, onNoteClick, addNewNote } =
    useHome()

  return (
    <div style={{ padding: '2rem' }}>
      <Title>Bienvenido a Devnotes</Title>
      <Container>
        <NewNote
          newNoteName={newNoteName}
          onChange={(e) => setNewNoteName(e.target.value)}
          addNewNote={addNewNote}
        />

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
