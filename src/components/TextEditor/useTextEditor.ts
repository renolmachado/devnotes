import { useCallback, useEffect, useRef, useState } from 'react'
import { createEditor } from 'slate'
import { withReact } from 'slate-react'
import { useDebounce } from '../../hooks/useDebounce'

import { useFileSystem } from '../../hooks/useFileSystem'
import { Descendant } from './types'

const FILE_NAME = 'notes' // TODO make this dynamic

export const useTextEditor = () => {
  const isInitializedRef = useRef(false)
  const { createDataFile, readTextFile } = useFileSystem({
    folderName: 'dev-notes',
  })
  const [editor] = useState(() => withReact(createEditor()))
  const [values, setValues] = useState<Descendant[] | undefined>(undefined)
  const debouncedValues = useDebounce<Descendant[]>(values ?? [], 1000)

  const onChange = useCallback((newValues: Descendant[]) => {
    setValues(newValues)
  }, [])

  const initializeValues = useCallback(async () => {
    if (!isInitializedRef.current) {
      const data = await readTextFile(FILE_NAME)
      let defaultData: Descendant[] = [
        {
          children: [{ text: '' }],
          style: { textAlign: 'left' },
        },
      ]

      if (data) {
        const valuesRead: Descendant[] = JSON.parse(data)
        defaultData = valuesRead?.length ? valuesRead : defaultData
      }

      setValues(defaultData)
      isInitializedRef.current = true
    }
  }, [readTextFile])

  useEffect(() => {
    if (isInitializedRef.current) {
      const dataToSave = JSON.stringify(debouncedValues)
      createDataFile(dataToSave, FILE_NAME)
    }
  }, [debouncedValues, createDataFile])

  useEffect(() => {
    initializeValues()
  }, [initializeValues])

  return { editor, values, onChange }
}