import SearchBar from '../SearchBar/SearchBar'

export default function Footer({ onTextPost, onDocumentPost, onFooterSearch }: IFooterProps) {
  return (
    <div className="flex items-center justify-end px-2 relative bottom-0 w-full h-20">
      <SearchBar onSearch={onFooterSearch} showSearchTerms={false} />
      <button
        className="bg-blue-400 rounded-lg border-2 hover:border-gray-700 text-white font-bold w-64 mx-2 h-10"
        onClick={onTextPost}
      >
        Create Text Post
      </button>
      <button
        className="bg-blue-400 rounded-lg border-2 hover:border-gray-700 text-white font-bold w-64 mx-2 h-10"
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
}
