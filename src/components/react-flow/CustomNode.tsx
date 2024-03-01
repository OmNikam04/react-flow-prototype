import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
 
const handleStyle = { left: 20, outerWidth: 60 };
 
export default function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt:any) => {
    console.log(evt.target.value);
  }, []);
 
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className='border-2 border-black rounded-md p-2 h-24 bg-white'>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag ml-4 border " />
        <button className='text-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l block mt-4' >My button</button>
      </div>
      <Handle type="source" className='w-full h-2' position={Position.Bottom} id="a" />
    </>
  );
}