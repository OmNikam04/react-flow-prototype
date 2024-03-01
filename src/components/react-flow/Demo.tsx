import { useCallback, useMemo, useState } from 'react';
import ReactFlow, { Background, Connection, Controls, Edge, ReactFlowProvider, addEdge, applyEdgeChanges, applyNodeChanges, updateEdge, useNodes } from 'reactflow'
import 'reactflow/dist/style.css';
import TextUpdaterNode from './CustomNode';

const initialNodes = [
    {
        id: '1',
        data: { label: 'Hello' },
        position: { x: 0, y: 0 },
        type: 'input',
    },
    {
        id: '2',
        data: { label: 'World' },
        position: { x: 100, y: 100 },
        
    },
    {
        id: '3',
        type: 'textUpdater',
        position: { x: 3, y: -15 },
        data: { value: 123 },
    },
];

const initialEdges = [
    { id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' },
];
export default function Demo() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    
    const onNodesChange = useCallback(
        (changes:any) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes:any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [],
    );
    const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

    const onConnect = useCallback(
        (params:any) => setEdges((eds) => {
            console.log(params)
            return (
                addEdge(params, eds)
            )
        }),
        [],
    );

    const onEdgeUpdate = useCallback(
        (oldEdge: Edge, newConnection: Connection) => setEdges((els) => updateEdge(oldEdge, newConnection, els)),
        []
      );
    return (
        <ReactFlowProvider>
            <ReactFlow 
                nodes={nodes}
                onNodesChange={onNodesChange}
                edges={edges}
                onEdgesChange={onEdgesChange}
                fitView
                nodeTypes={nodeTypes}
                onConnect={onConnect}
                onEdgeUpdate={onEdgeUpdate}
                >
                <Background/>
                <Controls />
                {/* Sidebar gives coordinates of each node */}
                <Sidebar />
            </ReactFlow>
        </ReactFlowProvider>
    )
}

function Sidebar() {
    // This hook will only work if the component it's used in is a child of a
    // <ReactFlowProvider />.
    const nodes = useNodes()

    return (
        <aside>
            {nodes.map((node: any) => (
                <div key={node.id}>
                    Node {node.id} -
                    x: {node.position.x.toFixed(2)},
                    y: {node.position.y.toFixed(2)}
                </div>
            ))}
        </aside>
    )
}
