import React,{useState,useEffect} from 'react'


const products = [
  { id: 1, title: "Laptop", price: 50000 },
  { id: 2, title: "Mobile", price: 20000 },
  { id: 3, title: "TV", price: 30000 },
  { id: 4, title: "Headphone", price: 5000 }
]


const Searching = () => {
    const [search, setSearch] = useState("")
    const [sort , setSort] = useState("")

    let res = products.filter((item)=> item.title.toLowerCase().includes(search.toLowerCase()))

    if(sort === "low"){
        res = [...res].sort((a,b)=> a.price-b.price)

    }

    if(sort === "high"){
        res = [...res].sort((a,b)=> b.price-a.price)

    }




  return (
    <div>
        <input type="text" name="searching" value={search} onChange={(e)=> setSearch(e.target.value)} />

        <select name="sort" value={sort} id=""  onChange={(e)=> setSort(e.target.value)}>
            <option value="">sort by</option>
            <option value="low">price low to high</option>
             <option value="high">price high to low</option>
        </select>

        {res.map((item)=>(
            <div key={item.id}>
                <h1>{item.id}</h1>
                <h1>{item.title}</h1>
                <h1>{item.price}</h1>


            </div>
        ))}
    
    </div>
  )
}

export default Searching
