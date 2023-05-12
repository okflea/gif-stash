const SearchBar = () => {
  async function handleSubmit(data) {
    "use server";
    const query = data.get("search");
    console.log(query);
  }
  return (
    <div>

      <form action={handleSubmit} >
        <input type="text" name="search" className="p-4 bg-slate-400 bg-opacity-50 backdrop-blur-lg rounded-lg border border-slate-200 border-opacity-50"/>
        <button type="submit" className="bg-slate-600 bg-opacity-50 backdrop-blur-lg rounded-lg border border-slate-200 border-opacity-50 p-3">Search</button>
      </form>
    </div>
  )
}

export default SearchBar
