import React from 'react'

const Card = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch("https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json").then(
            response => response.json()
        ).then(
            json => {
                console.log(json.items);
                setData(json.items);
            }
        )
    }, [])
    return (
        <div>
            <center>
                <div className='container mt-5' >
                    <div className='row'>

                        {
                            data.map((item) =>
                                <div className="col-4" key={item.id}>
                                    <div className="card mb-5" style={{ width: "18rem" }}>
                                        <img src={item.url} className="card-img-top" alt={item.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">Rs.{item.prize}</p>
                                        <button className='btn btn-primary'>Order Now</button>
                                        {/* <button className='btn btn-primary'>Order Now</button>
                                        <button className='btn btn-primary'>Order Now</button> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        }


                    </div>
                </div>
            </center>
        </div>
    )
}

export default Card