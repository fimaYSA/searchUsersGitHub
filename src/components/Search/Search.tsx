import {FC, useEffect, useState} from 'react';
import s from './search.module.css'

export const Search: FC<OwnPropsType> = ({searchTerm, onSubmit}) => {
  const [tempSearch, setTempSearch] = useState<string>('')

  useEffect(() => {
    setTempSearch(searchTerm)
  }, [searchTerm])

  return (
    <div className={s.search}>
      <div className={s.search_row}>
        <input
          className={s.search_input}
          placeholder={'search'}
          value={tempSearch}
          onChange={(e) => {
            setTempSearch(e.currentTarget.value)
          }}
        />
        <button
          className={s.btn_find}
          onClick={() => {
            onSubmit(tempSearch)
          }}
          disabled={tempSearch === searchTerm}
        >
          find
        </button>
      </div>

      <button className={s.btn_reset} onClick={() => onSubmit('olga')}>
        reset
      </button>
    </div>
  )
}

type OwnPropsType = {
  searchTerm: string
  onSubmit: (value: string) => void
}
