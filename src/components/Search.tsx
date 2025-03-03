import {FC, useEffect, useState} from "react";

export const Search: FC<OwnPropsType> = ({searchTerm, onSubmit}) => {
  const [tempSearch, setTempSearch] = useState<string>('')

  useEffect(() => {
    // console.log('Search - useEffect')
    setTempSearch(searchTerm)
  }, [searchTerm])

  // console.log('Search')
  return (
    <div>
      <input
        placeholder={'search'}
        value={tempSearch}
        onChange={(e) => {
          setTempSearch(e.currentTarget.value)
        }}
      />
      <button
        onClick={() => {
          onSubmit(tempSearch)
        }}
        disabled={tempSearch === searchTerm}
      >
        find
      </button>
    </div>
  )
}

type OwnPropsType = {
  searchTerm: string
  onSubmit: (value: string) => void
}
