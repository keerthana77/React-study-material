import { CDN_URL } from "../utils/constants"

export default function ItemList({ items }) {
  return (
    <div>
      {items.map(item => {
        return <div key={item.card.info.id} className="border-b-2 bg-gray-300 m-2 p-2 text-left flex">
          <div className="flex w-9/12 ">
            <div className="py-2 ">
              <span className="">{item.card.info.name} - </span>
              <span>₹{item.card.info.price / 100} </span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12" >
            <div className="relative">
              <button className="px-1 bg-black text-white shadow-lg m-auto absolute right-16">Add +</button>
              <img src={CDN_URL + item.card.info.imageId} className="w-full h-16" style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      })}
    </div >
  )
}
