import { useState } from "react";

const groceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 5,
    checked: true 
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 2,
    checked: false 
  },
  {
    id: 3,
    name: 'Minyak Goreng',
    quantity: 1,
    checked: false 
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
    <Footer />
  </div>
  )
}

function Header(){
  return <h1>Catatan Belanjaku 📝</h1>;
}

function Form({onAddItem}){

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    // mematikan fungsi default agar tidak direfresh
    e.preventDefault();

    // Menit 50.40
    // Guard Clause
    // jika False (Nilai Truthy dan Falsy)
    if(!name) return;

    
    // const newItem = { name: name, quantity: quantity } 
    // Jika Nama nya sama antara properti dan value maka boleh dibuat seperti ini
    // menit ke 45.55
    const newItem = { name, quantity, checked: false, id: Date.now() };
    onAddItem(newItem)
    
    console.log(newItem);

    setName('');
    setQuantity(1);
  }

  const quantityNum = [...Array(20)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));
  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {quantityNum}
        </select>
        <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button>Tambah</button>
    </form>
  );
}

function GroceryList({items, onDeleteItem, onToggleItem, onClearItems}){
  const [sortBy, setSortBy] = useState("input")

  let sortedItems;

  // Pake If
  // if (sortBy === "input") {
  //   sortedItems = items;
  // }

  // if (sortBy === "name") {
  //   sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name))
  // }

  // if (sortBy === "checked") {
  //   sortedItems = items.slice().sort((a, b) => a.checked - b.checked)
  // }

  switch (sortBy) {
    case "name":
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name))
      break;
    case "checked":
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked)
      break;
  
    default:
      sortedItems = items;
      break;
  }

  return (
    <>
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
        ))}
      </ul>
    </div>

    <div className="actions">
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Urutkan berdasarkan urutan input</option>
        <option value="name">Urutkan berdasarkan nama barang</option>
        <option value="checked">Urutkan berdasarkan ceklis</option>
      </select>
      <button onClick={onClearItems}>Bersihkan Daftar</button>
    </div>
    </>
  );
}


function Item({item, onDeleteItem, onToggleItem}) {
  return (
    <li key={item.id}>
      <input type="checkbox" onChange={() => onToggleItem(item.id)} checked={item.checked} />
      <span className={ item.checked ? "blok" : {}}>{item.quantity} {item.name}</span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  )
}

function Footer(){
  return <footer className="stats">Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)</footer>;
}

// Buka console di browser
// ctrl + Shift + i


// Menit 48.30
// Console Ninja

// #4 Membuat App CATATAN BELANJA | Tutorial REACT "Paling Masuk Akal" untuk PEMULA 🤩🌐
// Menit : 01.18.46 (Menyiapkan item baru)