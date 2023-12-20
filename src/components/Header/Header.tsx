import logo from '../../assets/logo.png'
import SearchBar from '../SearchBar/SearchBar'

export default function Header({ headerTitle, headerSubTitle, onHeaderSearch }: IHeaderProps) {
  return (
    <div className="flex p-4 items-center justify-between">
      <div className='flex'>
        <div className="rounded-full bg-orange-200">
          <img className="m-3 h-16 w-16" src={logo} />
        </div>
        <div className="p-4 flex flex-col">
          <div className="font-extrabold text-2xl text-start">{headerTitle}</div>
          <div className="text-start">{headerSubTitle}</div>
        </div>
      </div>
      <SearchBar onSearch={onHeaderSearch} maxWidth={true} showSearchTerms={true} />
    </div>
  )
}
export interface IHeaderProps {
  headerTitle: string
  headerSubTitle: string
  onHeaderSearch: (params: string[]) => void
}
