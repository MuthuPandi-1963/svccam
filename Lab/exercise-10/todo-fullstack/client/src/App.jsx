import React, { useState, useEffect, useCallback } from "react";
import { todoAPI } from "./api/todo.js";
import "./App.css";

// ── Icons ─────────────────────────────────────────────
const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
    <path d="M10 11v6M14 11v6" /><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
  </svg>
);
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// ── Modal ─────────────────────────────────────────────
function Modal({ isOpen, onClose, onSubmit, editTodo }) {
  const [form, setForm] = useState({ name: "", des: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editTodo) setForm({ name: editTodo.name, des: editTodo.des || "" });
    else setForm({ name: "", des: "" });
    setError("");
  }, [editTodo, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) { setError("Task name is required"); return; }
    setLoading(true);
    setError("");
    try {
      await onSubmit(form);
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{editTodo ? "EDIT TASK" : "NEW TASK"}</h2>
          <button className="icon-btn" onClick={onClose}><CloseIcon /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>TASK NAME *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="What needs to be done?"
              autoFocus
            />
          </div>
          <div className="field">
            <label>DESCRIPTION</label>
            <textarea
              value={form.des}
              onChange={(e) => setForm({ ...form, des: e.target.value })}
              placeholder="Add some details..."
              rows={4}
            />
          </div>
          {error && <p className="error-msg">{error}</p>}
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Saving..." : editTodo ? <><CheckIcon /> Update</> : <><PlusIcon /> Create</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── TodoCard ──────────────────────────────────────────
function TodoCard({ todo, onEdit, onDelete, index }) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    try { await onDelete(todo._id); }
    catch { setDeleting(false); }
  };

  const date = new Date(todo.createdAt).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric"
  });

  return (
    <div className="todo-card" style={{ animationDelay: `${index * 60}ms` }}>
      <div className="card-index">{String(index + 1).padStart(2, "0")}</div>
      <div className="card-body">
        <h3 className="card-name">{todo.name}</h3>
        {todo.des && <p className="card-des">{todo.des}</p>}
        <span className="card-date">{date}</span>
      </div>
      <div className="card-actions">
        <button className="icon-btn edit-btn" onClick={() => onEdit(todo)} title="Edit">
          <EditIcon />
        </button>
        <button className="icon-btn delete-btn" onClick={handleDelete} disabled={deleting} title="Delete">
          {deleting ? "..." : <TrashIcon />}
        </button>
      </div>
    </div>
  );
}

// ── App ───────────────────────────────────────────────
export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [fetchError, setFetchError] = useState("");

  const fetchTodos = useCallback(async () => {
    setLoading(true);
    setFetchError("");
    try {
      const res = await todoAPI.getAll();
      setTodos(res.data.data);
    } catch {
      setFetchError("Failed to connect to server. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchTodos(); }, [fetchTodos]);

  const handleCreate = async (form) => {
    const res = await todoAPI.create(form);
    setTodos((prev) => [res.data.data, ...prev]);
  };

  const handleUpdate = async (form) => {
    const res = await todoAPI.update(editTodo._id, form);
    setTodos((prev) => prev.map((t) => (t._id === editTodo._id ? res.data.data : t)));
  };

  const handleDelete = async (id) => {
    await todoAPI.delete(id);
    setTodos((prev) => prev.filter((t) => t._id !== id));
  };

  const openCreate = () => { setEditTodo(null); setModalOpen(true); };
  const openEdit = (todo) => { setEditTodo(todo); setModalOpen(true); };

  const filtered = todos.filter(
    (t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.des?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <span className="header-tag">TASK MANAGER</span>
          <h1 className="header-title">TASK<br />BOARD</h1>
        </div>
        <div className="header-right">
          <div className="stat-box">
            <span className="stat-num">{todos.length}</span>
            <span className="stat-label">TOTAL</span>
          </div>
          <button className="btn-primary fab" onClick={openCreate}>
            <PlusIcon /> NEW TASK
          </button>
        </div>
      </header>

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button className="clear-search" onClick={() => setSearchQuery("")}>
            <CloseIcon />
          </button>
        )}
      </div>

      {/* Content */}
      <main className="main">
        {fetchError && <div className="fetch-error">{fetchError}</div>}

        {loading ? (
          <div className="loading">
            <div className="spinner" />
            <p>Loading tasks...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="empty">
            <div className="empty-icon">✦</div>
            <p>{searchQuery ? "No tasks match your search." : "No tasks yet. Create your first task!"}</p>
            {!searchQuery && (
              <button className="btn-primary" onClick={openCreate}>
                <PlusIcon /> Add Task
              </button>
            )}
          </div>
        ) : (
          <div className="todo-list">
            {filtered.map((todo, i) => (
              <TodoCard
                key={todo._id}
                todo={todo}
                index={i}
                onEdit={openEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </main>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={editTodo ? handleUpdate : handleCreate}
        editTodo={editTodo}
      />
    </div>
  );
}