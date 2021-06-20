import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {jsonData} from './../data/feeds';

import Card from './cards';


function Screen2(){

	const [data,  setData] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	const [checkPage, setChekPage] = useState(false);
	const [selectedData, setSelectedData] = useState([]);
	const [totalCost, setTotalCost] = useState(0);

	const onAddItem=(name, total,cost,price)=>{
		if(total===1) setTotalItems(totalItems+1);
		let tempData = selectedData.filter(d=>d.name!=name);
		if(total>0) setSelectedData([...tempData,{"name":name,"total":total,"cost":cost,"price":price}]);
		else setSelectedData(tempData);

		let tempCost = 0;
				for(let i=0;i<selectedData.length;i++){
					tempCost += JSON.parse(selectedData[i].cost);
				}
				setTotalCost(tempCost);
				
	}

	const onRemoveItem=(name,total,cost,price)=>{
		if(total===0) setTotalItems(totalItems-1);
		let tempData = selectedData.filter(d=>d.name!=name);
		if(total>0) setSelectedData([...tempData,{"name":name,"total":total,"cost":cost,"price":price}]);
		else setSelectedData(tempData);
		let tempCost = 0;
				for(let i=0;i<selectedData.length;i++){
					tempCost +=JSON.parse(selectedData[i].cost);
				}
				setTotalCost(tempCost);
				
	}

	const showCheckPage=()=>{
		// let tempCost = 0;
		// for(let i=0;i<selectedData.length;i++){
			// tempCost += selectedData[i].cost
		// }
		// setTotalCost(tempCost);
		setChekPage(true);
	}
	
	useEffect(()=>{
		setData(jsonData);
	},[])
	return(
	
		<div className="Screen2">
		
							{totalItems>0 && <p
							className="bucket"
							onClick={showCheckPage}
							>{totalItems}</p>}

							{checkPage && <div className="check-page">

								<div>
									<h5>Order Summary</h5>
									{selectedData.map((d,i)=><div className="check-cont" key={i}>
											<p>{d.name}   :  {d.total}
											
											<button 
											className="check-btn"
											onClick={()=>onAddItem(d.name,d.total+1,d.cost+d.price,d.price)}
											>+</button>
											
											<button
											onClick={()=>onAddItem(d.name,d.total-1,d.cost-d.price,d.price)}
											className="check-btn bg-red"
											>-</button>

											
											</p>
										</div>)}

									<p>Total : {totalCost} </p>
									<div>
									<Link to='/checkout'>
										<button className="menu-btn">SAVE AND CHECKOUT</button>
									</Link>
										<button onClick={()=>setChekPage(false)}
										 className="menu-btn cancel-btn">CANCEL</button>
									</div>
								</div>
								
							</div>}
							
							{data.map((d,i)=><Card 
							image={d.image}
							name={d.name}
							price={d.price}
							onAddItem={onAddItem}
							onRemoveItem={onRemoveItem}
						/>)}
		</div>
	);
}

export default Screen2;
