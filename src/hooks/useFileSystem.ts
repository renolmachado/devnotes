import { useCallback, useEffect, useRef } from 'react'
import {
  BaseDirectory,
  readDir,
  createDir,
  writeFile,
  readTextFile as readTextFileFromFs,
} from '@tauri-apps/api/fs'

export const useFileSystem = () => {
  const folderNameRef = useRef(import.meta.env.VITE_LOCAL_FOLDER)
  const folderName = folderNameRef.current as string

  const createDataFolder = useCallback(async () => {
    await createDir(folderName, {
      dir: BaseDirectory.LocalData,
      recursive: true,
    })
  }, [folderName])

  const createDataFile = useCallback(
    async (contents: string, fileName: string) => {
      try {
        await writeFile(
          {
            contents,
            path: `./${folderName}/${fileName}.json`,
          },
          {
            dir: BaseDirectory.LocalData,
          }
        )
      } catch (e) {
        // TODO handle error
        // eslint-disable-next-line no-console
        console.error(e)
      }
    },
    [folderName]
  )

  const readTextFile = useCallback(
    async (fileName: string) => {
      try {
        const data: string = await readTextFileFromFs(
          `./${folderName}/${fileName}.json`,
          {
            dir: BaseDirectory.LocalData,
          }
        )

        return data
      } catch (e) {
        return ''
      }
    },
    [folderName]
  )

  const readDirFiles = useCallback(async () => {
    const files = await readDir(folderName, {
      dir: BaseDirectory.LocalData,
    })

    return files
  }, [folderName])

  useEffect(() => {
    try {
      createDataFolder()
    } catch (e) {
      // TODO handle error | show a tooltip specifying that the data folder could not be created
    }
  }, [createDataFolder])

  return { createDataFile, readTextFile, readDirFiles }
}
