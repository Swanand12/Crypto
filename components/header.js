import Link from "next/link";


export default function Header({ add, del }) {
  return (
    <>
      <h1 className="p-3 text-2xl font-bold text-black">WatchList</h1>

      <div className=" h-10 flex pl-5 bg-white items-center ">

        <ul className="text-black flex text-xl ">
          <li className="p-1">
            <Link href="/alert">Alert</Link>
          </li>
          <li className="p-1">
            <Link href="/">Watch-List</Link>
          </li>
          <li className="p-1">
            <Link href="/black-list">Black-List</Link>
          </li>
        </ul>

        <div className="ml-auto flex items-center">
          <select className="w-40 h-8 text-black m-1 rounded-lg border-2 border-blue-900">
            <option>all</option>
          </select>
          <select className="w-40 h-8 text-black  rounded-lg border-2 border-blue-900">
            <option></option>
          </select>

          <div className="flex relative items-center">
            <input
              className=" w-80 h-8 text-black m-1 p-2 pl-8 rounded-lg border-2 border-blue-900 "
              type="text"
            ></input>
            <img className="absolute left-3" src="search.png"></img>
          </div>
        </div>
      </div>

      <div className="w-full py-4 flex  ">
        <div className="ml-auto flex pr-2">

          <button
            className={`flex rounded-lg border-2 border-green-400 items-center bg-green-200 px-2 text-green-400 mr-1  ${
              add ? "block" : "hidden"
            }`}
          >
            <img src="Add_plus.png"></img>ADD
          </button>

          <button
            className={`flex rounded-lg border-2 border-red-400 items-center bg-red-200 px-2 text-red-400 ${
              del ? "block" : "hidden"
            }`}
          >
            <img src="Delete_plus.png"></img>DELETE
          </button>

        </div>
      </div>
    </>
  );
}
