import { AutoComplete } from 'primereact/autocomplete'
import { useState } from 'react'
import { getTagsBySearchKey } from '../../services/api/tagService'
import './Tags.css'

const Tags = ({ formik, placeholder = '', readOnly = false }: any) => {
  const [filteredTags, setFilteredTags] = useState([])

  const searchTags = async (event: any) => {
    let filteredTags = []
    if (event.query.trim().length) {
      const tags: any = await getTagsBySearchKey(event.query.trim())
      filteredTags = tags.filter((tag: any) => {
        return tag.toLowerCase().startsWith(event.query.toLowerCase())
      })
    }
    setFilteredTags(filteredTags)
  }
  return (
    <AutoComplete
      inputId="tagsInput"
      name="tags"
      multiple
      value={formik.values.tags}
      suggestions={filteredTags}
      completeMethod={searchTags}
      panelClassName="bg-slate-50 text-black"
      data-pr-classname="text-sm"
      inputClassName="border-0 focus:outline-none"
      {...(!readOnly && { placeholder })}
      onChange={formik.handleChange}
      readOnly={readOnly}
    />
  )
}

export default Tags
