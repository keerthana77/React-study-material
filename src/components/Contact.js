export default function Contact() {
    return (
        <div className="text-center m-auto w-6/12">
            <h1 className="font-bold text-2xl">Contact us page</h1>
            <form className="flex gap-2 items-center p-3 justify-center">
                <input className="border border-black p-2" placeholder="name" />
                <input className="border border-black p-2" placeholder="message" />
                <button className="border border-black p-2 bg-gray-100">Submit</button>
            </form>
        </div>
    )
}
