import { Avatar } from 'primereact/avatar'
import { Card } from 'primereact/card'
import { Image } from 'primereact/image'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PiFileDoc } from 'react-icons/pi'
import { TextContentContext } from '../../hooks/textContentContext'
import { UserContext } from '../../hooks/userContext'
import './Contents.css'
import { FaPenNib, FaSearch } from 'react-icons/fa'
const Contents = () => {
  const [textContents, dispatchContent] = useContext(TextContentContext)
  const [users, dispatchUsers] = useContext(UserContext)
  return (
    <div className="w-full h-full overflow-auto px-40 pb-20">
      <HomeActions />
      <div className="text-gray-500 my-5 text-3xl text-start font-extrabold">Top Picks For You</div>
      <TextContents textContents={textContents.slice(0, 5)} />
      <div className="text-gray-500 my-5 mt-10 text-3xl text-start font-extrabold">
        Trending Contents{' '}
      </div>
      <TextContents textContents={textContents.slice(0, 5)} />
      <div className="text-gray-500 my-5 mt-10 text-3xl text-start font-extrabold">
        Author picks
      </div>
      <Authors authors={users.slice(0, 5)} />
      {/* <DocContents /> */}
    </div>
  )
}

const HomeActions = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center my-5">
      <Card
        title={
          <div className="text-cyan-600 font-semibold text-lg bg-transparent">
            Craft <br />
            Text Content
          </div>
        }
        header={
          <div className="flex justify-center h-24 items-center bg-transparent">
            <FaPenNib className="text-cyan-600 mt-8" size={40} />
          </div>
        }
        className="w-48 flex flex-col justify-center items-center shadow border border-cyan-600 mx-5 bg-cyan-50 overflow-hidden"
        onClick={() => navigate(`/content`)}
      ></Card>
      <Card
        title={
          <div className="text-cyan-600 font-semibold text-lg bg-transparent">
            Craft <br />
            Doc Content
          </div>
        }
        header={
          <div className="flex justify-center h-24 items-center bg-transparent">
            <PiFileDoc className="text-cyan-600 mt-8" size={40} />
          </div>
        }
        className="w-48 flex flex-col justify-center items-center shadow border border-cyan-600 bg-cyan-50 mx-5 overflow-hidden"
        onClick={() => navigate(`/content`)}
      ></Card>
      <Card
        title={
          <div className="text-cyan-600 font-semibold text-lg bg-transparent">
            Explore <br />
            Contents
          </div>
        }
        header={
          <div className="flex justify-center h-24 items-center bg-transparent">
            <FaSearch className="text-cyan-600 mt-8" size={40} />
          </div>
        }
        className="w-48 flex flex-col justify-center items-center shadow border border-cyan-600 bg-cyan-50 mx-5 overflow-hidden"
        onClick={() => navigate(`/search`)}
      ></Card>
    </div>
  )
}

const TextContents = ({ textContents }: any) => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {textContents.map((content: any) => {
        return (
          <Card
            key={content.id}
            title={<div className="w-60 text-sm ">{content.title}</div>}
            subTitle={
              <div className="flex justify-center w-60 mb-3">
                <TagChips content={content} />
              </div>
            }
            footer={<Impressions content={content} />}
            header={
              <div className="flex justify-center items-center">
                <Image
                  src={content.thumbnail}
                  alt="Image"
                  className="w-20 flex justify-center items-center h-20 mx-auto"
                />
              </div>
            }
            className="w-64 relative shadow border border-gray-200 overflow-hidden"
            onClick={() => navigate(`/content/${content.id}`)}
          ></Card>
        )
      })}
    </div>
  )
}

const Authors = ({ authors }: any) => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {authors.map((author: any) => {
        const userInitial = author.username.charAt(0)
        return (
          <Card
            key={author.id}
            title={<div className="w-60 text-sm mb-5">{author.username}</div>}
            subTitle={
              <span className="rounded-lg border border-cyan-600 text-cyan-600 bg-cyan-50 font-semibold py-1 px-2">
                {author.userId}
              </span>
            }
            header={
              <Avatar
                label={userInitial}
                size="large"
                shape="circle"
                className="bg-cyan-50 border-2 border-cyan-600 text-cyan-600 mt-5"
              />
            }
            className="w-64 relative shadow border border-gray-200 overflow-hidden"
            onClick={() => navigate(`/author/${author.id}`)}
          ></Card>
        )
      })}
    </div>
  )
}

const TagChips = ({ content }: any) =>
  content.tags.map((tag: any) => (
    <div
      className="w-max h-max bg-cyan-100 text-cyan-600 p-1 text-xs font-semibold px-2 ms-1 mt-1 rounded-md"
      key={tag}
    >
      {tag}
    </div>
  ))

const Impressions = ({ content }: any) => (
  <div className="absolute bottom-5 left-0 w-full flex justify-center text-xs">
    <i className="pi pi-eye me-1 text-gray-400" />
    <span className="text-gray-600">{content.views}</span>
    <i className="pi pi-thumbs-up me-1 ms-4 text-green-400" />
    <span className="text-green-400">{content.likes}</span>
    <i className="pi pi-thumbs-down me-1 ms-4 text-red-400" />
    <span className="text-red-400">{content.dislikes}</span>
  </div>
)

export default Contents
