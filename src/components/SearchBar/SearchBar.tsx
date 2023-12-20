import { useState } from 'react'
import { BsSearch, BsX } from 'react-icons/bs'
import './SearchBar.css'

const SearchBar = ({ onSearch, maxWidth, showSearchTerms=false, searchTag }: ISearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<string[]>([])

  const handleAddSearchTerm = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchTerm?.length < 1) {
      return
    }
    if (e.key === 'Enter') {
      setSearchResults((prevResults) => [...prevResults, searchTerm])
      setSearchTerm('')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleRemoveSearchTerm = (index: number) => {
    setSearchResults((prevResults) => [
      ...prevResults.slice(0, index),
      ...prevResults.slice(index + 1),
    ])
  }

  const handleSearch = () => {
    onSearch(searchResults);
    setSearchTerm('')
    setSearchResults([]);
  }

  return (
    <div>
      <div className={`${maxWidth ? 'w-96' : 'w-64'} flex items-center justify-between relative`}>
        <input
          className="w-full border-2 rounded-lg border-gray-400"
          type="text"
          placeholder={searchTag}
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleAddSearchTerm}
        />
        <BsSearch size={20} className="cursor-pointer absolute right-4" onClick={handleSearch} />
      </div>
      {showSearchTerms && (
        <div className={`${maxWidth ? 'w-96' : 'w-64'} flex  overflow-x-auto no-scrollbar`}>
          {searchResults.map((result, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-2 rounded-lg m-1 ps-2"
            >
              <span className="pe-2">{result}</span>
              <BsX
                size={20}
                className="cursor-pointer rounded-full hover:bg-red-100"
                onClick={() => handleRemoveSearchTerm(index)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar

interface ISearchBarProps {
  onSearch: (param: string[]) => void
  maxWidth?: boolean
  showSearchTerms?: boolean
  searchTag: string
}
