import ItemList from "./ItemList"

export default function RestaurantCategory({ data ,showItems, setShowIndex }) {
    return (
        <div className="w-6/12 m-auto p-2 bg-gray-200 mb-2">
            <div className="flex justify-between cursor-pointer" onClick={() => setShowIndex()}>
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {showItems && <ItemList items={data.itemCards} />}
        </div>
    )
}
