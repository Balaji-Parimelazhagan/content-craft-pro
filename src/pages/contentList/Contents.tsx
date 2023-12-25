import { PrimeIcons } from 'primereact/api'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Dialog } from 'primereact/dialog'
import { Menu } from 'primereact/menu'
import { useRef, useState } from 'react'
import { getDocContents, getTextContents } from '../../services/api/contentService'
import { IContent } from '../../types/app.types'
import './Contents.css'
const Contents = () => {
  return (
    <div className="w-full flex space-x-8">
      <TextContents />
      <DocContents />
    </div>
  )
}

const TableHeader = ({ header }: { header: string }) => (
  <div className="flex items-center justify-between p-0 ">
    <span className="text-xl text-900 font-bold text-cyan-600">{header.toUpperCase()}</span>
    <Button icon="pi pi-refresh" className="text-cyan-500" rounded raised />
  </div>
)

const TextContents = () => {
  const { data, isLoading } = getTextContents()
  const optionsTemplate = (content: IContent) => <TableOptions rowData={content} />

  return isLoading ? (
    <div className="pi pi-spinner"></div>
  ) : (
    <DataTable
      removableSort
      className="border border-gray-200 rounded-xl overflow-hidden shadow-md text-sm w-7/12"
      header={<TableHeader header="Text Contents" />}
      value={data}
      scrollable = {true}
      scrollHeight={'400px'}
    >
      <Column field="topic" header="Topic" bodyClassName="font-semibold" />
      <Column field="tags" header="Tags" body={TagChips} />
      <Column field="jist" header="Jist" body={JistTemplate} />
      <Column header="Impressions" body={Impressions} />
      <Column header="Options" body={optionsTemplate} />
    </DataTable>
  )
}

const JistTemplate = (content: IContent) => {
  return <div className="max-w-xs max-h-50 truncate">{content.jist}</div>
}

const DocContents = () => {
  const { data, isLoading } = getDocContents()
  const optionsTemplate = (content: IContent) => <TableOptions rowData={content} />

  return isLoading ? (
    <div className="pi pi-spinner"></div>
  ) : (
    <DataTable
      removableSort
      className="border border-gray-200 rounded-xl overflow-hidden shadow-md text-sm w-5/12"
      header={<TableHeader header="Document Contents" />}
      value={data}
      scrollable = {true}
      scrollHeight={'400px'}

    >
      <Column field="topic" header="Document" bodyClassName="font-semibold" />
      <Column field="tags" header="Tags" body={TagChips} />
      <Column header="Impressions" body={Impressions} />
      <Column header="Options" body={optionsTemplate} />
    </DataTable>
  )
}

const TagChips = (content: IContent) =>
  content.tags.map((tag) => (
    <span
      className="bg-cyan-100 text-cyan-600 p-1 text-xs font-semibold px-2 ms-1 rounded-md"
      key={tag}
    >
      {tag}
    </span>
  ))

const Impressions = (content: IContent) => (
  <div className="flex items-center text-xs">
    <i className="pi pi-eye me-1 text-gray-400" />
    <span className="text-gray-600">{content.views}</span>
    <i className="pi pi-thumbs-up me-1 ms-4 text-green-400" />
    <span className="text-green-400">{content.likes}</span>
    <i className="pi pi-thumbs-down me-1 ms-4 text-red-400" />
    <span className="text-red-400">{content.dislikes}</span>
  </div>
)

const TableOptions = ({ rowData }: { rowData: any }) => {
  const optionsMenu = useRef<Menu>(null)
  const [showHistory, setshowHistory] = useState(false)
  const options = [
    {
      items: [{ label: 'History', icon: PrimeIcons.HISTORY }],
      command: () => setshowHistory(true),
    },
  ]
  return (
    <>
      <Button
        icon="pi pi-ellipsis-h"
        onClick={(event) => optionsMenu?.current && optionsMenu?.current.toggle(event)}
      />
      <Menu model={options} popup ref={optionsMenu} />
      <Dialog header="Flex Scroll" visible={showHistory} modal onHide={() => setshowHistory(false)}>
        {rowData.topic}
      </Dialog>
    </>
  )
}

export default Contents
