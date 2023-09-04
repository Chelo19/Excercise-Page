interface Props{
    items: string[];
    name: string;
    onSelectItem: (item: string) => void;
}



function Message({items, name, onSelectItem}: Props){
    return (
        <h1>Hello {name}
            {items.map((item) => (
                <li key={item} onClick={() => {onSelectItem('item1')}}>{item}</li>
            ))}
        </h1>
    )
}

export default Message;