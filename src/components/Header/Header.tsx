import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import SearchBar from '../searchBar/SearchBar'
import { Avatar } from 'primereact/avatar'
import { useContext } from 'react'
import { GlobalContext } from '../../hooks/globalContext'

export default function Header({ headerTitle, onHeaderSearch, searchTag }: IHeaderProps) {
  const navigate = useNavigate()
  const { currentUser } = useContext(GlobalContext)
  const userInitial = currentUser ? currentUser.username.charAt(0).toUppercase() : null
  return (
    <div className="flex w-full px-8 py-1 items-center max-h-[10%] absolute pb-2 top-0 bg-white shadow">
      <div
        className="flex items-center bg-transparent me-auto cursor-pointer"
        onClick={() => navigate('/contents')}
      >
        <img className="my-auto h-18 w-20" src={logo} />
        <span className="font-bold text-2xl text-cyan-600 ">{headerTitle}</span>
      </div>
      <SearchBar
        searchTag={searchTag}
        onSearch={onHeaderSearch}
        maxWidth={true}
        showSearchTerms={true}
      />
      <Avatar
        {...(userInitial && { label: userInitial })}
        {...(!userInitial && { icon: 'pi pi-user' })}
        size="large"
        shape="circle"
        className="bg-cyan-600 text-cyan-50 ms-4"
      />
    </div>
  )
}
export interface IHeaderProps {
  headerTitle: string
  onHeaderSearch: (params: string[]) => void
  searchTag: string
}
