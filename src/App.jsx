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
  return (
  <div className="app">
    <Header />
    <Form />
    <GroceryList />
    <Footer />
  </div>
  )
}

function Header(){
  return <h1>Catatan Belanjaku 📝</h1>;
}

function Form(){
  return(
    <form className="add-form">
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input type="text" placeholder="nama barang..." />
      </div>
      <button>Tambah</button>
    </form>
  );
}

function GroceryList(){
  return (
    <>
    <div className="list">
      <ul>
        {groceryItems.map((item) => (
          <li key={item.id}>
            <input type="checkbox" checked="true" />
            <span className={ item.checked ? "blok" : {}}>{item.quantity} {item.name}</span>
            <button>&times;</button>
          </li>
        ))}
      </ul>
    </div>

    <div className="actions">
      <select>
        <option value="input">Urutkan berdasarkan urutan input</option>
        <option value="name">Urutkan berdasarkan nama barang</option>
        <option value="checked">Urutkan berdasarkan ceklis</option>
      </select>
      <button>Bersihkan Daftar</button>
    </div>
    </>
  );
}

function Footer(){
  return <footer class="stats">Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)</footer>;
}


// #4 Membuat App CATATAN BELANJA | Tutorial REACT "Paling Masuk Akal" untuk PEMULA 🤩🌐
// Menit : 30.04 (Mencoret Barang)