import React from 'react';
import ReactGraphVis, { GraphData } from 'react-graph-vis';
import { useQuery, gql } from '@apollo/client';
import './PodGraph.css';

const PODS = gql`
  query {
	  pods {
      apiVersion
      kind
      metadata
      spec
      status
    }
  }
`;

const graph: GraphData = {
  nodes: [
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' },
  ],
  edges: [
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 3 },
  ],
};

export const PodGraph = () => {

  const { data } = useQuery(PODS);

  if (data)
    return <code className="code">{JSON.stringify(data, null, 2)}</code>
  return <ReactGraphVis graph={graph} />;
}

export default PodGraph;