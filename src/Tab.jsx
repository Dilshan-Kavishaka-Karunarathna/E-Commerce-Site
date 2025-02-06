function Tab(props)

{
    const handleClick = (e) => {
        props.onTabClick(props._id);
    }
    
    if(props._id === props.selectedCategoryId){

        return (
            <button className=" bg-slate-200 px-2 py-1 mx-4 rounded-sm text-zinc-950 font-semibold">
             {props.name}
            </button>
         );
    }

    return (
       <button className="border border-white px-2 py-1 mx-4 rounded-sm text-zinc-950 font-semibold" onClick={handleClick}>
        {props.name}
       </button>
    );
}

export default Tab;