import { useParams } from 'react-router-dom'

import { TextEditor } from '../../components/TextEditor'

const Note = () => {
  const { name } = useParams()

  return (name && <TextEditor fileName={name} />) || null
}

export default Note
