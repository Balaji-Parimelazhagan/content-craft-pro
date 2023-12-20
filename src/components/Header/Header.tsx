import logo from '../../assets/logo.png'
import SearchBar from '../SearchBar/SearchBar'

export default function Header({ headerTitle, headerSubTitle, onHeaderSearch,searchTag }: IHeaderProps) {
  return (
    <div className="flex w-full px-8 items-center max-h-[10%] justify-between absolute top-0 bg-cyan-50 shadow">
      <div className="flex items-center">
        <img className="my-3 h-10 w-10" src={logo} />
        <div className="py-4 ms-2 flex flex-col text-cyan-600">
          <div className="font-bold text-2xl text-start ">{headerTitle}</div>
          <div className="text-start">{headerSubTitle}</div>
        </div>
      </div>
      <SearchBar searchTag={searchTag} onSearch={onHeaderSearch} maxWidth={true} showSearchTerms={true} />
    </div>
  )
}
export interface IHeaderProps {
  headerTitle: string
  headerSubTitle: string
  onHeaderSearch: (params: string[]) => void
  searchTag: string
}
