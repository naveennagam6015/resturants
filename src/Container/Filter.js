import React from 'react'

const Filter = () => {
    const opts = ["All Items", "Rice Items", "Cold Drinks", "Pizza", "Hot Drinks"]
    const [filter, setFilter] = React.useState("All items");
    return (
        <div>
            <center className='mt-3'>
                <label className='m-2 h4'>Filter :</label>
                <select className='form-select w-25 d-inline' onChange={(e) => setFilter(e.target.value)}>
                    {opts.map((item, index) => (
                        <option value={item} key={index}>
                            {item}
                        </option>
                    ))}

                </select>
                <button onClick={() => console.log(filter)} className='btn btn-primary m-2' >Submit</button>
            </center>
        </div>
    )
}

export default Filter