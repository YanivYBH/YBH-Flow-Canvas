import React, {useEffect, useState} from 'react'
import { LuTrash } from 'react-icons/lu'

const TextEdit = ({node, updateNode, deleteElements}) => {

  const [label, setLabel] =useState("")

  const handleLabelChange = (e) => {
    const value = e.target.value
    setLabel(value)
    updateNode(node.id, {label: value})
  }

  const handleDeleteNode = () => {
    deleteElements({nodes: [{id: node.id}]})
  }

  useEffect(() => {

    if(node.data) {
      setLabel(node.data.label)
    }

  }, [node])

  return (
    <div className='flex flex-col gap-4 p-4'>

      <div>
        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Annotation</label>
        <textarea type="text" rows={6} value={label} onChange={handleLabelChange} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  />
      </div>

      <div >
        <button className='bg-white border hover:bg-gray-100 rounded px-2 py-1.5' onClick={handleDeleteNode}>
          <LuTrash />
        </button>
      </div>

    </div>
  )
}

export default TextEdit