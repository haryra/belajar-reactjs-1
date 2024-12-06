import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

const groceryItems = [
  {
    id: 1,
    name: 'Air',
    quantity: 1,
    checked: false 
  },
  {
    id: 2,
    name: 'Beras',
    quantity: 2,
    checked: false 
  },
  {
    id: 3,
    name: 'Gula Pasir',
    quantity: 2,
    checked: true 
  },
  {
    id: 4,
    name: 'Kopi Bubuk',
    quantity: 5,
    checked: true 
  },
  {
    id: 5,
    name: 'Minyak Goreng',
    quantity: 1,
    checked: true 
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems)

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? {...item, checked: !item.checked} : item ))
  }

  function handdleClearItems() {
    setItems([]);
  }

  return (
  <div className="app">
    <Header />
    <Form onAddItem={handleAddItem} />
    <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handdleClearItems} />
    <Footer items={items} />
  </div>
  )
}


// Buka console di browser
// ctrl + Shift + i


// Menit 48.30
// Console Ninja

// Menghilangkan Error "Missing Props Validation eslint" / Type Checking
// Menit 31.40

// #4 Membuat App CATATAN BELANJA | Tutorial REACT "Paling Masuk Akal" untuk PEMULA 🤩🌐
// Menit : 01.18.46 (Menyiapkan item baru)