const SearchBar = () => {
  async function handleSubmit(data) {
    "use server";
    const query = data.get("search");
    console.log(query);
  }
  return (
    <div>
      <form action={handleSubmit} className="flex flex-col justify-center items-center">
        <input type="text" name="search" className="p-4 bg-slate-800 text-slate-300 rounded-lg border border-slate-400  focus:border-slate-500 "/>
        <button type="submit" className="hover:bg-slate-800 bg-slate-400 rounded-lg border text-slate-300 m-3 transform hover:scale-110 transition-all duration-500 border-slate-400 p-3 ">Search</button>
      </form>
    </div>
  )
}

export default SearchBar
