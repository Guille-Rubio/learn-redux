import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle, changeLightColor, addBulb, deleteBulbList } from '../../../redux/slices/lightSwitch'


const TestRedux = () => {

  const lightSwitch = useSelector((state) => state.light.lightSwitch);//subscribes to the state to retreive its values
  const lightColor = useSelector((state) => state.light.lightColor);
  const bulbList = useSelector((state) => state.light.bulbList);
  const dispatch = useDispatch();//Redux method used to send actions to the reducer

  const [colorInput, setColorInput] = useState("");//state hook used only by this component, not related to redux
  const [bulbInput, setBulbInput] = useState("")

  const handleChange = (event) => setColorInput(event.target.value);//Event handlers to capture input values
  const handleList = (event) => setBulbInput(event.target.value);


  return <section>
    <h3>Lamp with redux</h3>

    <article>
      <button onClick={() => dispatch(toggle())}>Switch</button><br />
      <p>{lightSwitch}</p>
    </article>

    <article>
      <label htmlFor="color">Choose your light color</label><br />
      <input type="text" name="color" onChange={handleChange} /><br /><br />
      {/* The action passed to the dispatch method only requires to specify the action payload */}
      <button onClick={() => dispatch(changeLightColor(colorInput))} style={{ backgroundColor: lightColor }}>Change light color</button><br />
      <p>{lightColor}</p>
    </article>

    <article>
      <p>List bulbs</p>
      <input type="text" name="bulbs" onChange={handleList} />
      <button onClick={() => dispatch(addBulb(bulbInput))}>Add Bulb</button>
      {bulbList.map((e, i) => <p key={i}>{e}</p>)}
      <button onClick={() => dispatch(deleteBulbList())}>Delete bulb list</button>
    </article>



  </section>;
}


export default TestRedux;
