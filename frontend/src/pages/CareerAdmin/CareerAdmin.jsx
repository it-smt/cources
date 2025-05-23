import { useEffect, useState } from "react"
import "./CareerAdmin.scss"

export default function CareerAdmin() {
  const [list, setList] = useState([])
  const [newItem, setNewItem] = useState({ title: "", text: "" })
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/careerDropdown")
      .then(res => res.json())
      .then(setList)
  }, [])

  const handleDelete = id => {
    fetch(`http://localhost:3001/careerDropdown/${id}`, {
      method: "DELETE",
    }).then(() => setList(list.filter(item => item.id !== id)))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (editId) {
      fetch(`http://localhost:3001/careerDropdown/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      }).then(() => {
        setList(
          list.map(item =>
            item.id === editId ? { ...newItem, id: editId } : item
          )
        )
        setEditId(null)
        setNewItem({ title: "", text: "" })
      })
    } else {
      fetch("http://localhost:3001/careerDropdown", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      })
        .then(res => res.json())
        .then(data => {
          setList([...list, data])
          setNewItem({ title: "", text: "" })
        })
    }
  }

  const startEdit = item => {
    setEditId(item.id)
    setNewItem({ title: item.title, text: item.text })
  }

  return (
    <div className="admin-wrapper">
      <h1>Управление карьерными блоками</h1>

      <form onSubmit={handleSubmit} className="admin-form">
        <input
          type="text"
          placeholder="Заголовок"
          value={newItem.title}
          onChange={e => setNewItem({ ...newItem, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Текст"
          value={newItem.text}
          onChange={e => setNewItem({ ...newItem, text: e.target.value })}
          required
        />
        <div className="admin-form__actions">
          <button type="submit">{editId ? "Сохранить" : "Добавить"}</button>
          {editId && (
            <button
              type="button"
              onClick={() => {
                setEditId(null)
                setNewItem({ title: "", text: "" })
              }}
              className="cancel-button"
            >
              Отмена
            </button>
          )}
        </div>
      </form>

      <div className="admin-list">
        {list.map(item => (
          <div key={item.id} className="admin-card">
            <div className="admin-card__content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            <div className="admin-card__actions">
              <button onClick={() => startEdit(item)}>✏️</button>
              <button onClick={() => handleDelete(item.id)}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
