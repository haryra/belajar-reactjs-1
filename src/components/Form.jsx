import { useState } from "react";

export default function Form({onAddItem}){

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
  