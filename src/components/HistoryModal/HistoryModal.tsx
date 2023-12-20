import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

export interface TableRow {
  topic: string
  createdOn: string
  revisedOn: string
  updates: number
}
interface IHistoryModalProps {
  topicHistory: TableRow[]
  onHideModal: () => void
  onShowModal: () => void
}

const HistoryModal = forwardRef(function ResultModal(
  { topicHistory, onHideModal, onShowModal }: IHistoryModalProps,
  ref
) {
  const dialog = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
      close() {
        dialog.current.close()
      },
    }
  })
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      <DataTable value={topicHistory} stripedRows tableStyle={{ minWidth: '50rem', textAlign: 'center' }}>
        <Column field="topic" header="Topic"></Column>
        <Column field="createdOn" header="Created on"></Column>
        <Column field="revisedOn" header="Revised on"></Column>
        <Column field="updates" header="Updates"></Column>
      </DataTable>
      {/* <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Created on</th>
            <th>Revised on</th>
            <th>Updates</th>
          </tr>
        </thead>
        <tbody>
          {topicHistory.map((row, index) => (
            <tr key={index}>
              <td>{row.topic}</td>
              <td>{row.createdOn}</td>
              <td>{row.revisedOn}</td>
              <td>{row.updates}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <form method="dialog" onSubmit={onHideModal}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  )
})
export default HistoryModal
