import { useCallback, useEffect } from 'react'
import {
  BaseDirectory,
  createDir,
  writeFile,
  readTextFile as readTextFileFromFs,
} from '@tauri-apps/api/fs'

interface UseFileSystem {
  folderName: string
}

export const useFileSystem = ({ folderName }: UseFileSystem) => {
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
        console.log(e)
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

  useEffect(() => {
    try {
      createDataFolder()
    } catch (e) {
      // TODO handle error | show a tooltip specifying that the data folder could not be created
    }
  }, [createDataFolder])

  return { createDataFile, readTextFile }
}
