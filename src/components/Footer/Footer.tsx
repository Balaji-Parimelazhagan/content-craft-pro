import SearchBar from '../SearchBar/SearchBar'

export default function Footer({ onTextPost, onDocumentPost, onFooterSearch, searchTag }: IFooterProps) {
  return (
    <div className="flex items-center justify-end p-3 absolute bottom-0 w-full h-15 max-h-[10%] bg-cyan-50 shadow">
      <SearchBar onSearch={onFooterSearch} searchTag={searchTag}/>
      <button
        className="bg-cyan-600 rounded-lg border-2 hover:border-gray-700 text-white font-bold w-64 mx-2 h-10"
        onClick={onTextPost}
      >
        Create Text Post
      </button>
      <button
        className="bg-cyan-600 rounded-lg border-2 hover:border-gray-700 text-white font-bold w-64 mx-2 h-10"
        onClick={onDocumentPost}
      >
        Create Document Post
      </button>
    </div>
  )
}
export interface IFooterProps {
  onTextPost: () => void
  onDocumentPost: () => void
  onFooterSearch: (params: string[]) => void
  searchTag: string
}
