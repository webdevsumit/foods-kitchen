import React,{useState} from 'react';

function Card(props){

	const [total, setTotal] = useState(0);
	const [cost, setCost] = useState(0);

	const increment=()=>{
		props.onAddItem(props.name,total+1, (total+1)*props.price,props.price);
		setTotal(total+1);
		setCost((total+1)*props.price);
	};

	const decrement=()=>{
		if(total>0){
			setTotal(total-1);
			props.onRemoveItem(props.name, total-1, (total-1)*props.price,props.price)
			setCost((total-1)*props.price);
		}
	};

	
	return(
		<div className="card">
			<img className="card-img" src={"./assets/"+props.image}/>
			<p>{props.name}</p>
			<p className="price">Price : {props.price}</p>
			
			{total>0 && <p className="price">Total : {total}</p>}
			{total>0 && <p className="price">Cost(INR) : {cost}</p>}
			
			<button className="check-btn"
			onClick={increment}>+</button>
			
			<button className="check-btn"
			style={total>0?{backgroundColor:"red"}:
			{backgroundColor:"#ddd",color:"black"}}
			onClick={decrement}>-</button>
		</div>
	);
}

export default Card;
