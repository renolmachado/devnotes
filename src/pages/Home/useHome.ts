import type { FileEntry } from '@tauri-apps/api/fs'
import { WebviewWindow } from '@tauri-apps/api/window'
import { useCallback, useEffect, useState } from 'react'

import { useFileSystem } from '../../hooks/useFileSystem'

export const useHome = () => {
  const { readDirFiles, createDataFile } = useFileSystem()
  const [notes, setNotes] = useState<FileEntry[]>([])
  const [newNoteName, setNewNoteName] = useState<string>('')

  const initializeNotes = useCallback(async () => {
    const files = await readDirFiles()
    setNotes(files)
  }, [readDirFiles])

  const onNoteClick = useCallback((note: FileEntry) => {
    const name = note.name?.replace('.json', '') ?? ''

    const webview = new WebviewWindow(name, {
      url: `/note/${name}`,
      width: 400,
      height: 400,
      title: 'devnotes',
      alwaysOnTop: true,
    })
    webview.setFocus()
  }, [])

  const addNewNote = useCallback(async () => {
    const name = newNoteName
    const emptyNote = ''

    if (!notes.some((note) => note.name === `${name}.json`)) {
      await createDataFile(emptyNote, name)
      onNoteClick({ name: `${name}.json` } as FileEntry)

      setNewNoteName('')
      initializeNotes()
    }
  }, [newNoteName, notes, createDataFile, onNoteClick, initializeNotes])

  useEffect(() => {
    initializeNotes()
  }, [initializeNotes])

  return {
    notes,
    newNoteName,
    setNewNoteName,
    onNoteClick,
    addNewNote,
  }
}
