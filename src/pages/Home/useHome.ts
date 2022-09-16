import type { FileEntry } from '@tauri-apps/api/fs'
import { WebviewWindow } from '@tauri-apps/api/window'
import { useCallback, useEffect, useState } from 'react'

import { useFileSystem } from '../../hooks/useFileSystem'

export const useHome = () => {
  const { readDirFiles } = useFileSystem()
  const [notes, setNotes] = useState<FileEntry[]>([])

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

  useEffect(() => {
    initializeNotes()
  }, [initializeNotes])

  return {
    notes,
    onNoteClick,
  }
}
